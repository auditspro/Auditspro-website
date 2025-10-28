// Script to find the correct project for the API key
import 'dotenv/config';

import { Client, Databases } from 'node-appwrite';

async function findCorrectProject() {
  console.log('🔍 Finding correct project for API key...\n');
  
  const apiKey = process.env.APPWRITE_API_KEY;
  console.log('API Key (first 20 chars):', apiKey?.substring(0, 20) + '...');
  
  // Try different project IDs that might work
  const projectIds = [
    '68fb03580026187793ac', // Original project ID
    '68fb01690018d3cfee68', // Project ID you tried
    '68f9bfe10010a14fc98c', // From QUICK_FIX_GUIDE.md
  ];
  
  for (const projectId of projectIds) {
    console.log(`\n🧪 Testing project ID: ${projectId}`);
    
    const client = new Client();
    client
      .setEndpoint(process.env.APPWRITE_ENDPOINT)
      .setProject(projectId)
      .setKey(apiKey);

    const databases = new Databases(client);

    try {
      const result = await databases.list();
      console.log('✅ SUCCESS! API key works with project:', projectId);
      console.log('Available databases:', result.databases.map(db => ({ id: db.$id, name: db.name })));
      
      // Check if contact_forms_db exists
      const contactDb = result.databases.find(db => db.$id === 'contact_forms_db');
      if (contactDb) {
        console.log('✅ Found contact_forms_db database!');
        console.log('\n🎯 Correct configuration:');
        console.log(`APPWRITE_PROJECT_ID=${projectId}`);
        console.log('APPWRITE_DATABASE_ID=contact_forms_db');
        console.log('APPWRITE_TABLE_ID=contact_submissions');
        return projectId;
      } else {
        console.log('❌ contact_forms_db database not found in this project');
        console.log('Available databases:', result.databases.map(db => db.$id));
      }
      
    } catch (error) {
      console.log(`❌ Failed: ${error.message}`);
    }
  }
  
  console.log('\n❌ No working project found for this API key.');
  console.log('\n💡 Solutions:');
  console.log('1. Get the correct API key for project 68fb03580026187793ac');
  console.log('2. Create the contact_forms_db database in a project this API key can access');
  console.log('3. Check if the API key has the correct permissions (databases.read, databases.write)');
  
  return null;
}

findCorrectProject();