import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});

interface LogoVariantProps {
  variant: 'default' | 'deep' | 'professional';
  title: string;
  description: string;
  recommended?: boolean;
}

const LogoVariant = ({ variant, title, description, recommended }: LogoVariantProps) => {
  const colorSchemes = {
    // Darkened default - blue-800 base
    default: {
      text: '#1e40af',
      boxDark: '#1e40af',
      boxLight: '#2563eb',
      boxDarkOpacity: 0.95,
      boxLightOpacity: 0.80,
    },
    // ULTRA DEEP - blue-950 for maximum authority
    deep: {
      text: '#172554',
      boxDark: '#1e3a8a',
      boxLight: '#1d4ed8',
      boxDarkOpacity: 0.95,
      boxLightOpacity: 0.80,
    },
    // Deep professional - slate-950
    professional: {
      text: '#020617',
      boxDark: '#1e40af',
      boxLight: '#3b82f6',
      boxDarkOpacity: 0.90,
      boxLightOpacity: 0.70,
    },
  };

  const colors = colorSchemes[variant];

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 relative">
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
          ⭐ RECOMMENDED
        </div>
      )}
      
      <div className={`${outfit.className} w-64 h-20`}>
        <svg
          viewBox="0 0 400 100"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(0, 30)">
            <rect x="0" y="0" width="20" height="20" rx="3" fill={colors.boxDark} opacity={colors.boxDarkOpacity} />
            <rect x="24" y="0" width="20" height="20" rx="3" fill={colors.boxLight} opacity={colors.boxLightOpacity} />
            <rect x="0" y="24" width="20" height="20" rx="3" fill={colors.boxLight} opacity={colors.boxLightOpacity} />
            <rect x="24" y="24" width="20" height="20" rx="3" fill={colors.boxDark} opacity={colors.boxDarkOpacity} />
          </g>
          <text
            x="56"
            y="60"
            fontFamily="Outfit, ui-sans-serif, system-ui, sans-serif"
            fontSize="36"
            fontWeight="500"
            fill={colors.text}
            style={{ letterSpacing: '-0.5px' }}
          >
            AuditsPro
          </text>
          <text
            x="56"
            y="72"
            fontFamily="Outfit, ui-sans-serif, system-ui, sans-serif"
            fontSize="9"
            fontWeight="500"
            fill={colors.text}
            opacity="0.80"
            style={{ letterSpacing: '2px' }}
          >
            TRUST ACCOUNT AUDITING
          </text>
        </svg>
      </div>

      <div className="text-center max-w-xs">
        <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{description}</p>
        
        <div className="mt-4 flex gap-2 justify-center">
          <div className="flex flex-col items-center gap-1 text-xs">
            <div className="w-8 h-8 rounded border border-zinc-300" style={{ backgroundColor: colors.text }} />
            <span className="text-zinc-500 font-medium">Text</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-xs">
            <div className="w-8 h-8 rounded border border-zinc-300" style={{ backgroundColor: colors.boxDark, opacity: colors.boxDarkOpacity }} />
            <span className="text-zinc-500 font-medium">Dark</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-xs">
            <div className="w-8 h-8 rounded border border-zinc-300" style={{ backgroundColor: colors.boxLight, opacity: colors.boxLightOpacity }} />
            <span className="text-zinc-500 font-medium">Light</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LogoComparison() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full">
            ✨ ALL VARIANTS DARKENED
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            AuditsPro Logo - Enhanced Darkness
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            All color variants now feature increased darkness for stronger authority and visual presence. Choose the level that best represents your brand power.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <LogoVariant
            variant="default"
            title="Option A: Dark Authority"
            description="Blue-800 base (#1e40af) - Significantly darker than before. Strong presence while maintaining brand harmony with hero section."
            recommended
          />
          
          <LogoVariant
            variant="deep"
            title="Option B: ULTRA Deep Authority"
            description="Blue-950 (#172554) - MAXIMUM darkness achieved. The darkest professional blue possible. Ultimate authority and gravitas."
          />
          
          <LogoVariant
            variant="professional"
            title="Option C: Deep Professional"
            description="Slate-950 (#020617) - Near-black sophistication with blue accents. Modern, powerful, and universally professional."
          />
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border-2 border-zinc-200 dark:border-zinc-800 mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Darkness Comparison
          </h2>
          
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="bg-[#1e40af] h-24 rounded-lg mb-2"></div>
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Option A</p>
                <p className="text-xs text-zinc-500">Blue-800</p>
                <p className="text-xs text-zinc-400">#1e40af</p>
              </div>
              <div>
                <div className="bg-[#172554] h-24 rounded-lg mb-2"></div>
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Option B</p>
                <p className="text-xs text-zinc-500">Blue-950 🔥</p>
                <p className="text-xs text-zinc-400">#172554</p>
              </div>
              <div>
                <div className="bg-[#020617] h-24 rounded-lg mb-2"></div>
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Option C</p>
                <p className="text-xs text-zinc-500">Slate-950</p>
                <p className="text-xs text-zinc-400">#020617</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border-2 border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Usage Examples
          </h2>
          
          <div className="space-y-8">
            {/* On white background */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3 uppercase tracking-wide">
                On White Background
              </h3>
              <div className="bg-white p-8 rounded-xl border border-zinc-200 flex justify-center">
                <LogoVariant variant="deep" title="" description="" />
              </div>
            </div>

            {/* On hero gradient */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3 uppercase tracking-wide">
                On Hero Section Gradient
              </h3>
              <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 p-8 rounded-xl border border-blue-200 flex justify-center">
                <LogoVariant variant="deep" title="" description="" />
              </div>
            </div>

            {/* Side by side comparison */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3 uppercase tracking-wide">
                All Three Variants Together
              </h3>
              <div className="bg-gradient-to-br from-zinc-50 to-white p-8 rounded-xl border border-zinc-200 flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className={`${outfit.className} w-48 h-16`}>
                  <svg viewBox="0 0 400 100" width="100%" height="100%">
                    <g transform="translate(0, 30)">
                      <rect x="0" y="0" width="20" height="20" rx="3" fill="#1e40af" opacity="0.95" />
                      <rect x="24" y="0" width="20" height="20" rx="3" fill="#2563eb" opacity="0.80" />
                      <rect x="0" y="24" width="20" height="20" rx="3" fill="#2563eb" opacity="0.80" />
                      <rect x="24" y="24" width="20" height="20" rx="3" fill="#1e40af" opacity="0.95" />
                    </g>
                    <text x="56" y="60" fontFamily="Outfit" fontSize="36" fontWeight="500" fill="#1e40af" style={{ letterSpacing: '-0.5px' }}>AuditsPro</text>
                    <text x="56" y="72" fontFamily="Outfit" fontSize="9" fontWeight="500" fill="#1e40af" opacity="0.80" style={{ letterSpacing: '2px' }}>TRUST ACCOUNT AUDITING</text>
                  </svg>
                </div>
                
                <div className={`${outfit.className} w-48 h-16`}>
                  <svg viewBox="0 0 400 100" width="100%" height="100%">
                    <g transform="translate(0, 30)">
                      <rect x="0" y="0" width="20" height="20" rx="3" fill="#1e3a8a" opacity="0.95" />
                      <rect x="24" y="0" width="20" height="20" rx="3" fill="#1d4ed8" opacity="0.80" />
                      <rect x="0" y="24" width="20" height="20" rx="3" fill="#1d4ed8" opacity="0.80" />
                      <rect x="24" y="24" width="20" height="20" rx="3" fill="#1e3a8a" opacity="0.95" />
                    </g>
                    <text x="56" y="60" fontFamily="Outfit" fontSize="36" fontWeight="500" fill="#172554" style={{ letterSpacing: '-0.5px' }}>AuditsPro</text>
                    <text x="56" y="72" fontFamily="Outfit" fontSize="9" fontWeight="500" fill="#172554" opacity="0.80" style={{ letterSpacing: '2px' }}>TRUST ACCOUNT AUDITING</text>
                  </svg>
                </div>
                
                <div className={`${outfit.className} w-48 h-16`}>
                  <svg viewBox="0 0 400 100" width="100%" height="100%">
                    <g transform="translate(0, 30)">
                      <rect x="0" y="0" width="20" height="20" rx="3" fill="#1e40af" opacity="0.90" />
                      <rect x="24" y="0" width="20" height="20" rx="3" fill="#3b82f6" opacity="0.70" />
                      <rect x="0" y="24" width="20" height="20" rx="3" fill="#3b82f6" opacity="0.70" />
                      <rect x="24" y="24" width="20" height="20" rx="3" fill="#1e40af" opacity="0.90" />
                    </g>
                    <text x="56" y="60" fontFamily="Outfit" fontSize="36" fontWeight="500" fill="#020617" style={{ letterSpacing: '-0.5px' }}>AuditsPro</text>
                    <text x="56" y="72" fontFamily="Outfit" fontSize="9" fontWeight="500" fill="#020617" opacity="0.80" style={{ letterSpacing: '2px' }}>TRUST ACCOUNT AUDITING</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
            <span>🔥</span> Enhanced Darkness Analysis
          </h3>
          <div className="space-y-3 text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
            <p>
              <strong>Option A (Dark Authority)</strong> - Blue-800 provides significantly more weight and presence while maintaining visual harmony with your hero section. Professional and trustworthy.
            </p>
            <p>
              <strong>Option B (ULTRA Deep Authority)</strong> - Blue-950 is the DARKEST possible blue in the Tailwind palette. Maximum authority, gravitas, and sophistication. Perfect for establishing ultimate credibility in financial services.
            </p>
            <p>
              <strong>Option C (Deep Professional)</strong> - Slate-950 is near-black, offering the most neutral and universally professional appearance. Works on any background and conveys serious, corporate sophistication.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl p-6 border-2 border-emerald-200 dark:border-emerald-800">
          <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
            <span>✅</span> Recommended Choice
          </h3>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            For financial/auditing services, <strong>Option B (ULTRA Deep Authority)</strong> is now recommended. The blue-950 (#172554) creates maximum trust and authority while maintaining professional blue branding. It&apos;s the perfect balance of darkness and brand color identity.
          </p>
        </div>
      </div>
    </div>
  );
}