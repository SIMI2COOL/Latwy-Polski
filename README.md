# 🇵🇱 Polish Learning App

Progressive web application (PWA) for learning Polish through interactive flashcards, quiz exercises, and gamification.

## 📋 Features

### ✨ Main Features

- **16 Thematic Categories**: From "Ludzie" (People) to "Informacje" (Reference)
- **Multiple Study Modes**:
  - 🃏 Interactive flashcards with flip animation
  - 📝 Quiz exercises with instant verification
  - 🔊 Pronunciation with speech synthesis
  
### 🎮 Gamification

- **Points System**: Earn points for correct answers
- **Levels**: Progress from level 1 to 50
- **Streaks**: Maintain your daily study streak
- **Achievements**: Unlock badges for milestones reached
- **Celebrations**: Visual effects with confetti when leveling up

### 🧠 Spaced Repetition (SRS)

- Implementation of SM-2 (SuperMemo 2) algorithm
- Scheduled reviews based on difficulty of remembering
- Long-term learning optimization

### 💾 Local Storage

- IndexedDB database with Dexie
- Works 100% offline
- Personal data export

### 📱 PWA (Progressive Web App)

- Installable on mobile and desktop devices
- Works without connection
- Service Worker for resource caching

## 🚀 Installation and Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation Steps

1. **Download the complete project**
   
   Download all provided files and place them in a folder called `polish-learning-app`

2. **Install dependencies**

   ```bash
   cd polish-learning-app
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

   Optimized files will be in the `dist/` folder

5. **Preview production build**

   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
polish-learning-app/
├── public/                  # Static files
├── src/
│   ├── components/         
│   │   ├── common/         # Reusable components
│   │   │   └── LoadingScreen.tsx
│   │   ├── layout/         # Layout and navigation
│   │   │   └── Layout.tsx
│   │   └── pages/          # Main pages
│   │       ├── HomePage.tsx
│   │       ├── CategoryPage.tsx
│   │       ├── StudyPage.tsx
│   │       ├── ProgressPage.tsx
│   │       └── SettingsPage.tsx
│   ├── data/               # Vocabulary data
│   │   └── vocabulary-people.ts
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # CSS styles
│   │   └── index.css
│   ├── types/              # TypeScript types
│   │   └── index.ts
│   ├── utils/              # Utilities
│   │   ├── database.ts     # Dexie DB
│   │   ├── gamification.ts # Points system
│   │   └── spaced-repetition.ts # SRS algorithm
│   ├── App.tsx             # Main component
│   └── main.tsx            # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎯 Using the Application

### Start Studying

1. On the main page, you'll see the 16 available categories
2. Select a category (for example, "LUDZIE - People")
3. You can study the entire category or select a specific theme
4. Choose between Flashcards or Quiz mode

### Flashcards Mode

- Click on the card to flip it
- Listen to pronunciation with the audio button
- Navigate with "Next" and "Previous" buttons

### Quiz Mode

- Type the translation of the displayed word
- Press Enter or "Check" to verify
- Receive instant feedback
- Accumulate points for correct answers

### View Your Progress

- Access "Progress" from the menu
- View your level, points, and streak
- Review your unlocked achievements

## 🔧 Configuration

### Available Settings

- **Audio**: Enable/disable sounds and auto-play
- **Daily Goal**: Set word goal per day (5-100)
- **Notifications**: Study reminders
- **Export Data**: Download your progress as JSON
- **Reset Progress**: Delete all data and start over

## 🗂️ Adding More Vocabulary

To add vocabulary from other categories:

1. Create a new file in `src/data/` (e.g., `vocabulary-food.ts`)
2. Follow the same format as `vocabulary-people.ts`
3. Import and execute the seed function in `App.tsx`

Example:

```typescript
export const foodVocabulary: VocabularyWord[] = [
  {
    id: 'food_001',
    polish: 'chleb',
    english: 'bread',
    category: 'food',
    subcategory: 'bakery',
    difficulty: 'beginner',
    tags: ['food', 'bakery'],
  },
  // ... more words
];
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#YOUR_COLOR_HERE',
        // ...
      }
    }
  }
}
```

### Add New Achievements

Edit `src/utils/gamification.ts` and add new achievements in the `updateProgressAfterSession` function

## 🐛 Troubleshooting

### Database doesn't initialize

- Open browser DevTools
- Go to "Application" tab > "IndexedDB"
- Delete the "PolishAppDB" database
- Reload the page

### Words don't show up

- Verify that the vocabulary file is correctly imported
- Check the browser console for errors
- Make sure the seed function runs in `App.tsx`

### TypeScript errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📚 Technologies Used

- **React 18** - UI library
- **TypeScript** - Static typing
- **Vite** - Build tool
- **Tailwind CSS** - Styles
- **Dexie.js** - IndexedDB wrapper
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Canvas Confetti** - Celebration effects

## 🗺️ Roadmap

- [ ] Add complete vocabulary for all 16 categories
- [ ] Implement listening mode (audio → selection)
- [ ] Add image matching exercises
- [ ] Cloud synchronization (optional)
- [ ] Dark mode
- [ ] Detailed statistics by category
- [ ] Weekly challenges
- [ ] Competition with other users

## 📄 License

This project is based on vocabulary from the book "Polish-English Bilingual Visual Dictionary" (Dorling Kindersley, 2008).

The application code is available for educational use.

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Questions or suggestions? Open an issue in the repository.

---

**Good luck with your Polish learning! 🇵🇱📚**
