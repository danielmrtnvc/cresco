# Cresco - 90 Days to Build a Lifestyle

**Cresco** is an innovative web app designed to help users build better habits over the course of 90 days. Through seamless tracking, AI-generated stories, and fantasy-themed scenarios, Cresco motivates users to develop good habits while also addressing bad ones. The goal is to guide users in creating a better lifestyle while keeping them engaged through fun and immersive elements.

This app will be developed as a web application and later wrapped as a Progressive Web App (PWA) to enable easy mobile deployment. The app will track various user activities, progress, and goals over a 90-day period, with the added benefit of fantasy-themed challenges and stories that adapt to the user's progress and achievements.

## **Goal of the Project:**
Cresco aims to create an enjoyable and engaging experience where users can:
- **Track Habits**: Monitor both good and bad habits and track their progress over time.
- **Take Progress Photos**: Document their journey visually by capturing photos that reflect their lifestyle progress.
- **Track Calendar**: Stay organized and on track with their habits and progress using an integrated calendar system.
- **AI-Generated Scenarios & Stories**: Provide immersive, fantasy-themed challenges, where users are guided by AI-generated scenarios that evolve as they progress in their journey.
- **Build World Challenges**: Users face world-building challenges that evolve based on their real-world actions and progress, keeping them motivated and immersed in their goals.

---

## **Features Added So Far:**
- **Habit Tracking**: 
  - Users can create, track, and monitor daily habits.
  - Streaks, progress, and completed days are tracked for each habit.
  
- **Progress Circle**:
  - A visual progress circle representing how much of each habit has been completed.
  
- **Dark Mode**: 
  - A simple dark mode toggle is available to switch between dark and light themes.
  
- **Add New Habit Flow**:
  - Users can add new habits, assign them a frequency, and set a goal for each habit.
  
- **Responsive Web Design**:
  - The app is designed to be fully responsive, ensuring it works seamlessly across different screen sizes.
  
- **Calendar Integration**: 
  - Users can track their progress within a calendar view to see completed and pending tasks.
  
- **Basic User Authentication (in Progress)**: 
  - Users will be able to sign in to save their progress and habits across sessions.
  
---

## **To Do:**
- **Progressive Web App (PWA)**:
  - Package the web app as a PWA for mobile use, making it installable on any device and allowing offline functionality.
  
- **AI-Generated Stories**:
  - Implement AI-driven narratives that respond to users' habits, challenges, and progress. This will introduce dynamic fantasy-themed scenarios that evolve based on the user’s journey.
  
- **World Challenges**:
  - Add AI-generated world-building challenges that relate to the user's progress in real-life habits. These challenges will adapt as users move through their 90-day journey.
  
- **Habit Reminders & Notifications**:
  - Add reminders and notifications to encourage users to stay on track with their habits.
  
- **User Profile & Customization**:
  - Implement user profiles with customizable settings, including preferred fantasy themes, and user-defined habit goals.
  
- **Analytics & Stats**:
  - Provide users with detailed analytics on their habit performance, including streaks, success rates, and progress visualizations.
  
- **Social Sharing**:
  - Allow users to share their achievements and progress photos on social media to inspire others.
  
---
 
## **Tech Stack:**
- **Frontend**:
  - **React** for dynamic UI components.
  - **Tailwind CSS** for styling.
  - **Vite** for fast development build tool.
  - **TypeScript** for type safety and better developer experience.

- **Backend (Planned)**:
  - **Node.js** for server-side logic.
  - **Express.js** for routing and handling requests.
  - **MongoDB** (or another DB) for persistent user data storage.

- **Progressive Web App**:
  - **Service Workers** for offline capabilities.
  - **Workbox** for managing caching and background sync.
  
---

## **How to Run Locally:**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cresco.git
   npm install
   npm run dev
