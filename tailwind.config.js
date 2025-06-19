export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'navy': '#1E2A38',
        'blue': '#3B82F6', 
        'light-gray': '#F4F6F8',
        'text-white': '#FFFFFF',
        'text-gray': '#94A3B8',
        'purple': '#7C3AED',
        'green': '#10B981',
        'orange': '#F97316',
        
        // Primary Color System
        primary: {
          bg: '#1E2A38',    // navy
          accent: '#3B82F6', // blue
        },
        
        // Secondary Color System
        secondary: {
          bg: '#F4F6F8',    // light-gray
        },
        
        // Text System
        text: {
          primary: '#FFFFFF',   // white
          secondary: '#94A3B8', // medium gray
          dark: '#1F2937',      // dark text for light backgrounds
          medium: '#4B5563',    // medium text
        },
        
        // Status Colors
        success: '#10B981',
        warning: '#F97316',
        highlight: '#7C3AED',
        
        // Extended color system for backward compatibility
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6', 
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',  // text-medium
          700: '#374151',
          800: '#1F2937',  // text-dark
          900: '#111827'
        }
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }
    }
  },
  plugins: []
}