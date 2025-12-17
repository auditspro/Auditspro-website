import { Client, Databases, ID, Query } from 'node-appwrite';
import { Client as ClientWeb, Account as AccountWeb, ID as IDWeb } from 'appwrite';

// Initialize Appwrite client for server-side operations
const createServerClient = () => {
  const client = new Client();
  
  const endpoint = process.env.APPWRITE_ENDPOINT;
  const projectId = process.env.APPWRITE_PROJECT_ID;
  const apiKey = process.env.APPWRITE_API_KEY;
  
  if (!endpoint || !projectId || !apiKey) {
    console.error('Missing Appwrite environment variables:', {
      endpoint: !!endpoint,
      projectId: !!projectId,
      apiKey: !!apiKey
    });
    throw new Error('Missing required Appwrite environment variables');
  }
  
  client
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(apiKey);
  
  return client;
};

// Initialize Databases service only on server-side
let databases: Databases | null = null;
try {
  if (typeof window === 'undefined') {
    databases = new Databases(createServerClient());
  }
} catch (error) {
  console.error('Failed to initialize server-side Appwrite client:', error);
}

export { databases };

// Initialize client-side Appwrite client for authentication
const createClientSideClient = () => {
  const client = new ClientWeb();
  
  // Use NEXT_PUBLIC_ variables for client-side access
  const endpoint = typeof window !== 'undefined' 
    ? process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT 
    : process.env.APPWRITE_ENDPOINT;
  const projectId = typeof window !== 'undefined' 
    ? process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID 
    : process.env.APPWRITE_PROJECT_ID;
  
  client
    .setEndpoint(endpoint || 'https://cloud.appwrite.io/v1')
    .setProject(projectId!);
  
  return client;
};

// Initialize client-side services
export const clientAccount = new AccountWeb(createClientSideClient());

// Database and collection IDs from environment variables
export const DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
export const TABLE_ID = process.env.APPWRITE_TABLE_ID!;

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  preferredDate?: string;
  preferredTime?: string;
  auditType?: string;
  submittedAt: string;
}

// Function to create a contact submission in Appwrite
export async function createContactSubmission(data: ContactFormData) {
  if (!databases) {
    throw new Error('Database client not initialized');
  }
  
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      TABLE_ID,
      ID.unique(),
      {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        company: data.company || '',
        message: data.message,
        submittedAt: data.submittedAt,
        // Note: preferredDate, preferredTime, and auditType are not in the database schema
      }
    );
    return response;
  } catch (error) {
    console.error('Error creating contact submission:', error);
    throw error;
  }
}

// Function to get all contact submissions (for admin use)
export async function getContactSubmissions() {
  if (!databases) {
    throw new Error('Database client not initialized');
  }
  
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      TABLE_ID
    );
    return response;
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    throw error;
  }
}

// Function to create a newsletter subscription in Appwrite
export async function createSubscription(email: string) {
  if (!databases) {
    throw new Error('Database client not initialized');
  }
  
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      TABLE_ID,
      ID.unique(),
      {
        name: 'Newsletter Subscriber',
        email: email,
        phone: '',
        company: '',
        message: 'Newsletter Subscription',
        submittedAt: new Date().toISOString(),
      }
    );
    return response;
  } catch (error) {
    console.error('Error creating subscription:', error);
    throw error;
  }
}

// Function to delete newsletter subscription in Appwrite
export async function deleteSubscription(email: string) {
  if (!databases) {
    throw new Error('Database client not initialized');
  }
  
  try {
    // Find documents with the matching email
    const response = await databases.listDocuments(
      DATABASE_ID,
      TABLE_ID,
      [Query.equal('email', email)]
    );
    
    if (response.documents.length === 0) {
      return false; // No subscription found
    }
    
    const db = databases; // Capture for closure
    
    // Delete all matching documents
    const deletePromises = response.documents.map(doc => 
      db.deleteDocument(DATABASE_ID, TABLE_ID, doc.$id)
    );
    
    await Promise.all(deletePromises);
    
    return true;
  } catch (error) {
    console.error('Error deleting subscription:', error);
    throw error;
  }
}

export { ID };

// Authentication utility functions
export const auth = {
  // Register a new user
  async register(email: string, password: string, name: string) {
    try {
      const user = await clientAccount.create(IDWeb.unique(), email, password, name);
      // Automatically log in after registration
      await this.login(email, password);
      return { success: true, user };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
  },

  // Login user
  async login(email: string, password: string) {
    try {
      const session = await clientAccount.createEmailPasswordSession(email, password);
      return { success: true, session };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
  },

  // Logout user
  async logout() {
    try {
      await clientAccount.deleteSession('current');
      return { success: true };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      const user = await clientAccount.get();
      return { success: true, user };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
  },

  // Check if user is logged in
  async isLoggedIn() {
    try {
      await clientAccount.get();
      return true;
    } catch {
      return false;
    }
  },

  // Get current session
  async getCurrentSession() {
    try {
      const session = await clientAccount.getSession('current');
      return { success: true, session };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
  }
};