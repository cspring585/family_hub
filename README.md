🏠 Family Hub
Family Hub is a lightweight, gamified chore tracker and family economy system. It is designed to bridge the gap between digital task management and physical rewards, featuring a dual-track currency system for kids and teens.

Currently, this project is in Phase 1: Standalone Web App, running entirely in the browser using localStorage.

🚀 Vision & Roadmap
The ultimate goal of Family Hub is to become a self-hosted "command center" for the modern home.

[x] Phase 1: Standalone Prototype – Single-file HTML/JS app using browser storage.

[ ] Phase 2: Local Network Hosting – Transition to a Node.js/SQLite backend for hosting on a Raspberry Pi or Synology NAS, allowing sync across all household devices.

[ ] Phase 3: Secure Remote Access – Cloud accessibility via Docker, secure authentication, and native mobile notifications.

✨ Key Features
💰 The Dual-Track Economy
🧒 Kid Mode: Earn Tokens for physical rewards or big prizes.

📱 Teen Mode: Earn Minutes for screen time.

🛡️ Adult Mode: Manage the household and approve tasks.

🧹 Smart Chore Logic
Dynamic Value Decay: Chores can be set to "Dynamic," where the point value is high if skipped but "decays" to a lower value if performed daily, encouraging a varied routine.

Milestone Goals: Set specific repetition goals (e.g., "Do dishes 10 times") to unlock a custom Big Prize.

Daily Reset: Teen screen time minutes automatically reset at midnight to start a fresh day.

🎭 Role-Based Experience
Kid Celebrations: High-energy, bouncy, colorful localized overlays when a task is completed.

Teen Feedback: Sleek, sarcastic notifications because... well, teens.

Admin Lock: Secure the management sections behind a passcode.

📅 Integrated Calendars
View your family schedules via embedded Google Calendars directly on the dashboard.

📥 Data Portability
Export/Import: Easily move your family data between devices using JSON backups. No cloud account required.

🛠️ Installation & Usage
Running Locally
Since Phase 1 is a standalone app, no installation is required:

Download the index.html file.

Open it in any modern web browser (Chrome, Safari, Firefox).

📱 Installing as a Web App (PWA)
Family Hub is a Progressive Web App. You can install it on your mobile device for a full-screen, app-like experience:

iOS: Open in Safari -> Tap Share -> Add to Home Screen.

Android: Open in Chrome -> Tap Three Dots -> Install App.

⚙️ Configuration
Default Admin Passcode: 1234 (Changeable in the <script> section of the code).

Storage: All data is saved to your browser's localStorage. Clearing your browser cache will delete your data—please use the Export Data feature regularly!

🏗️ Technical Stack
Frontend: Vanilla JavaScript, HTML5, CSS3.

Logic: Role-based conditional rendering and local data persistence.

Manifest: Embedded JSON Data URI for PWA support.

🤝 Contributing
This project is currently in early development. If you have ideas for the Raspberry Pi/NAS implementation (Phase 2), feel free to open an issue or a pull request!

Pro-Tip for GitHub:
When you upload this to your repository, make sure to:

Name the file README.md.

Upload your index.html.

(Optional) Take a screenshot of your dashboard and add it to the README using ![Dashboard](link-to-your-image.png) to make it look even better!
