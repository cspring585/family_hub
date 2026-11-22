🏠 Family Hub
Family Hub is a lightweight, gamified chore tracker and family economy system. It is designed to bridge the gap between digital task management and physical rewards, featuring a dual-track currency system for kids and teens.

Currently, this project includes Firebase cloud synchronization, multi-user chore management, customizable themes, and admin security features.

📌 Vision & Roadmap
The ultimate goal of Family Hub is to become a self-hosted "command center" for the modern home.

[x] Phase 1: Standalone Prototype: Single-file HTML/JS app using browser storage.

[x] Firebase Cloud Integration: Real-time database sync using Firebase.

[ ] Phase 2: Local Network Hosting: Transition to a Node.js/SQLite backend for hosting on a Raspberry Pi or Synology NAS, allowing sync across all household devices.

[ ] Phase 3: Secure Remote Access: Cloud accessibility via Docker, secure authentication, and native mobile notifications.

✨ Key Features
💰 The Dual-Track Economy
🪙 Kid Mode: Earn Tokens for physical rewards or big prizes.

⌛ Teen Mode: Earn Minutes for screen time.

🗣️ Adult Mode: Manage the household and approve tasks.

🧹 Smart Chore Logic
Dynamic Value Decay: Chores can be set to "Dynamic," where the point value starts at full value on Day 1 or after skipping, then decays to a lower value if performed daily, encouraging a varied routine.

Streak Rewards: Target goals switched to Target Streaks (Days in a Row) tracking to unlock custom milestone rewards.

Multi-User Assignment: Assign a chore to multiple members simultaneously with independent tracking for each member.

Daily Reset: Teen screen time minutes automatically reset at midnight to start a fresh day.

🎭 Role-Based & UI Experience
Dark & Light Themes: Toggle between Dark Mode and a high-contrast Light Mode featuring a Warm Evergreen and Slate color palette.

Interactive Dashboard: Filter and view chores using interactive member tabs and clear header groupings.

Site-Wide Security & Admin Gate: Features a site-wide entry password gate with optional session remembering, passcode-protected management sections, and live pending approvals badges in the header bar.

Kid Celebrations: High-energy, bouncy, colorful localized overlays when a task is completed.

Teen Feedback: Sleek, sarcastic notifications tailored for teens.

📅 Integrated Calendars
View your family schedules via embedded Google Calendars directly on the dashboard, with a customizable dynamic Family Name header display.

💾 Cloud Sync & Data Portability
Firebase Real-Time Sync: Sync data seamlessly across multiple devices using Firebase cloud integration.

Export/Import & Database Reset: Move family data between devices using JSON backups or use the nuclear function to reset local storage and cloud database data.

🛠️ Installation & Usage
Running Locally
Download the index.html file or open the web app directly in your browser.
