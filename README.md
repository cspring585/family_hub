# 🏠 Family Hub

Family Hub is a gamified family chore and rewards dashboard. It helps households assign chores, track points or screen-time minutes, manage streak rewards, review approvals, and display a shared Google Calendar.

## Features

- Google sign-in with account approval checks
- Real-time Firebase synchronization across devices
- Multi-user chore assignments
- Static and dynamic chore values
- Streak goals and customizable prizes
- Point, token, and screen-time tracking for different member roles
- Pending-task approval queue
- Light and dark themes
- Embedded Google Calendar
- Installable PWA support and offline app-shell caching
- JSON export/import for hub backups
- Configurable family name and household settings

## Technology

- HTML and CSS
- Vanilla JavaScript
- Firebase Authentication and Cloud Firestore
- Firebase Hosting
- Progressive Web App manifest and service worker

This is currently implemented primarily in `index.html`, with `sw.js` providing offline caching.

## Running locally

Firebase Authentication and Firestore require an internet connection and an approved Firebase project configuration.

For a basic local preview:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

For Firebase Hosting:

```bash
firebase login
firebase use <your-firebase-project-id>
firebase deploy
```

## Security

The Firebase configuration embedded in `index.html` identifies your Firebase project; it is not an administrative secret. Data access must be protected with Firebase Authentication and appropriately configured Firestore Security Rules.

Before production use:

- Restrict Firestore reads and writes with tested security rules
- Verify that only approved Google accounts can access household data
- Use privileged operations only through trusted server-side code
- Validate user input before storing it
- Review the app's admin and credential-management behavior

The browser UI must not be treated as the application's security boundary.

## Data backup

Signed-in family administrators can use the Hub Settings panel to export a JSON backup or restore a previously exported backup.

## Roadmap

- [x] Standalone app prototype
- [x] Firebase cloud synchronization
- [x] Google Calendar integration
- [x] Installable PWA shell
- [ ] Hardened remote access and server-side authorization
- [ ] Native mobile notifications

## Project structure

- `index.html` — application markup, styles, and client-side logic
- `sw.js` — service-worker cache and update handling
- `manifest.json` — PWA installation metadata
- `firebase.json` — Firebase Hosting configuration
- `.firebaserc` — local Firebase project mapping
- `icon.svg`, `icon-192.png`, `icon-512.png` — app icons
