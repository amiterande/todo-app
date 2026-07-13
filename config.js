// Google Tasks API Configuration
// Copy this file to config.local.js and fill in your credentials
// config.local.js is gitignored and won't be committed

window.GOOGLE_CONFIG = {
    // Get these from Google Cloud Console > APIs & Services > Credentials
    CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
    
    // Optional: API Key for higher quota (get from Google Cloud Console > APIs & Services > Credentials > Create Credentials > API Key)
    API_KEY: 'YOUR_GOOGLE_API_KEY',
    
    // Don't change these
    DISCOVERY_DOC: 'https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest',
    SCOPES: 'https://www.googleapis.com/auth/tasks'
};

// Instructions:
// 1. Go to https://console.cloud.google.com/
// 2. Create a new project or select existing
// 3. Enable "Google Tasks API" (APIs & Services > Library)
// 4. Configure OAuth Consent Screen (APIs & Services > OAuth consent screen)
//    - User Type: External
//    - Add scope: https://www.googleapis.com/auth/tasks
//    - Add your email as test user
// 5. Create OAuth 2.0 Client ID (APIs & Services > Credentials > Create Credentials)
//    - Application type: Web application
//    - Authorized JavaScript origins: http://localhost:8080 (or your local server URL)
//    - Authorized redirect URIs: http://localhost:8080
// 6. Copy Client ID to CLIENT_ID above
// 7. (Optional) Create API Key for higher quota and add to API_KEY above
// 8. Serve the app locally: npx serve .  OR  python -m http.server 8080
// 9. Open http://localhost:8080 and click "Sign in with Google"