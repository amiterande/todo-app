# Task Board - To-Do App with Google Tasks Integration

A Kanban-style task board application with full Google Tasks synchronization.

## Features

- **Kanban Board**: Four columns - Not Started, In Progress, Completed, Archived
- **Drag & Drop**: Move tasks between columns
- **Task Details**: Title, due date, notes, status
- **Auto-Archive**: Completed tasks older than 7 days auto-move to Archived
- **Google Tasks Sync**: 
  - Sign in with Google
  - Import tasks from Google Tasks (Daily Running Tasks list)
  - Mark tasks complete in app → syncs to Google Tasks
  - Create tasks in app → creates in Google Tasks
  - Manual sync button

## Setup Instructions

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Google Tasks API**:
   - APIs & Services → Library → Search "Google Tasks API" → Enable
4. Configure OAuth Consent Screen:
   - APIs & Services → OAuth consent screen
   - User Type: **External**
   - App name: "Task Board" (or your choice)
   - User support email: Your email
   - Scopes: Add `https://www.googleapis.com/auth/tasks`
   - Test users: Add your Google email
5. Create OAuth 2.0 Client ID:
   - APIs & Services → Credentials → Create Credentials → OAuth client ID
   - Application type: **Web application**
   - Name: "Task Board Web Client"
   - Authorized JavaScript origins: `http://localhost:8080`
   - Authorized redirect URIs: `http://localhost:8080`
   - Click Create
6. Copy the **Client ID** (looks like `123456789-abcdef.apps.googleusercontent.com`)

### 2. Configure the App

1. Copy `config.js` to `config.local.js`:
   ```bash
   cp config.js config.local.js
   ```
2. Edit `config.local.js` and replace:
   ```javascript
   CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
   ```
3. (Optional) Create an API Key for higher quota:
   - Credentials → Create Credentials → API Key
   - Add to `config.local.js`:
   ```javascript
   API_KEY: 'YOUR_API_KEY',
   ```

### 3. Run Locally

You need a local web server (CORS requires HTTPS or localhost):

**Option A: Node.js (recommended)**
```bash
npx serve .
# Opens at http://localhost:3000
```

**Option B: Python**
```bash
python -m http.server 8080
# Opens at http://localhost:8080
```

**Option C: VS Code Live Server**
- Right-click `index.html` → "Open with Live Server"

### 4. Use the App

1. Open the local URL in browser
2. Click **"Sign in with Google"**
3. Grant permission to access Google Tasks
4. Click **"Sync"** to import your tasks
5. Tasks from Google Tasks "Daily Running Tasks" list will appear
6. Drag tasks between columns
7. Mark complete → auto-syncs to Google (or click Sync)

## How Sync Works

| Action in App | Google Tasks Sync |
|---------------|-------------------|
| Create task | Creates in Google Tasks (on save or next sync) |
| Mark complete | Updates Google task to completed |
| Mark incomplete | Updates Google task to needsAction |
| Edit task | Updates Google task (on save or next sync) |
| Delete task | Deletes from Google Tasks |
| Click Sync | Full bidirectional sync |

## Task List Structure

The app uses/creates a Google Tasks list called **"Daily Running Tasks"**. If it doesn't exist, it will be created on first sync.

## Local Storage

Tasks are saved to `localStorage` so they persist between sessions even without Google sync.

## Browser Support

- Chrome/Edge 80+
- Firefox 75+
- Safari 14+
- Requires ES6 modules support

## File Structure

```
todo-app/
├── index.html          # Main application
├── config.js           # Config template (commit this)
├── config.local.js     # Your credentials (DON'T COMMIT)
└── README.md           # This file
```

## Troubleshooting

**"Failed to load Google Tasks"**
- Check Client ID is correct in `config.local.js`
- Verify OAuth consent screen has your email as test user
- Check browser console for detailed errors

**"Sync failed"**
- Ensure you're signed in (user avatar shows in header)
- Check internet connection
- Try signing out and back in

**Tasks not appearing**
- Click "Sync" button
- Check Google Tasks has a "Daily Running Tasks" list with tasks
- Check browser console for errors

## Security Notes

- `config.local.js` is gitignored - never commit real credentials
- OAuth token stored in memory only (cleared on sign out)
- No server-side component - all client-side
- Google Tasks API scope: `https://www.googleapis.com/auth/tasks` (read/write tasks only)