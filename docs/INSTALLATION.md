# 🚀 Step-by-Step Installation Guide

## What do you need?

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS version (recommended)
   - Verify installation: open terminal and type `node --version`

2. **Code Editor** (optional but recommended)
   - VS Code: https://code.visualstudio.com/
   - Or any text editor

3. **Terminal/Command Line**
   - Windows: PowerShell or CMD
   - Mac/Linux: Terminal

## Step 1: Organize Files

1. Download all project files
2. Create a folder called `polish-learning-app`
3. Place all downloaded files maintaining the structure:

```
polish-learning-app/
├── docs/
│   └── ADDING_VOCABULARY.md
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── LoadingScreen.tsx
│   │   ├── layout/
│   │   │   └── Layout.tsx
│   │   └── pages/
│   │       ├── CategoryPage.tsx
│   │       ├── HomePage.tsx
│   │       ├── ProgressPage.tsx
│   │       ├── SettingsPage.tsx
│   │       └── StudyPage.tsx
│   ├── data/
│   │   └── vocabulary-people.ts
│   ├── styles/
│   │   └── index.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── database.ts
│   │   ├── gamification.ts
│   │   └── spaced-repetition.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Step 2: Open Terminal in Project Folder

### Windows:
1. Open File Explorer
2. Navigate to the `polish-learning-app` folder
3. Click on the address bar
4. Type `cmd` or `powershell` and press Enter

### Mac/Linux:
1. Open Terminal
2. Navigate to the folder:
   ```bash
   cd path/to/polish-learning-app
   ```

## Step 3: Install Dependencies

In the terminal, run:

```bash
npm install
```

**What does this do?**
- Downloads all necessary libraries (React, TypeScript, etc.)
- May take 2-5 minutes depending on your connection
- You'll see progress in the terminal

**Possible errors:**
- If it says "npm: command not found": Node.js is not installed correctly
- If there are permission errors on Mac/Linux: use `sudo npm install`

## Step 4: Start the Application

Once dependencies are installed, run:

```bash
npm run dev
```

**What will you see?**
```
  VITE v5.0.8  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Step 5: Open in Browser

1. Open your favorite browser (Chrome, Firefox, Safari, Edge)
2. Go to: `http://localhost:5173`
3. You should see the application running! 🎉

## Verification

If everything is correct, you should see:

1. ✅ Initial loading screen
2. ✅ Main page with categories
3. ✅ User statistics (points, level, streak)
4. ✅ "LUDZIE (People)" category with vocabulary

## Useful Commands

### Stop the server
- Press `Ctrl + C` in the terminal

### Restart the server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Clean and reinstall
```bash
# Remove node_modules folder
rm -rf node_modules

# Remove package-lock.json
rm package-lock.json

# Reinstall
npm install
```

## Troubleshooting Common Issues

### Error: "Cannot find module"

**Solution:**
```bash
npm install
```

### Error: "Port 5173 is already in use"

**Solution:**
- Close other instances of the application
- Or change the port in `vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    port: 3000 // Change to another port
  }
})
```

### Page is blank

**Solution:**
1. Open browser DevTools (F12)
2. Check the "Console" tab for errors
3. Verify that all files are in place
4. Reload the page (Ctrl+R or Cmd+R)

### TypeScript errors

**Solution:**
```bash
npm run build
```
This will show all TypeScript errors

### Database doesn't initialize

**Solution:**
1. Open DevTools (F12)
2. Go to Application > Storage > IndexedDB
3. Delete "PolishAppDB"
4. Reload the page

## Development in VS Code

### Recommended Extensions

1. **ESLint** - For code linting
2. **Prettier** - For automatic formatting
3. **TypeScript** - Support for TS
4. **Tailwind CSS IntelliSense** - Tailwind autocomplete

### Useful Shortcuts

- `Ctrl + ` ` - Open integrated terminal
- `Ctrl + P` - Search file
- `F5` - Start debugger
- `Ctrl + Shift + F` - Search entire project

## Next Steps

Once the application is running:

1. 📖 Read the `README.md` to understand the features
2. 🎯 Explore the application by navigating between categories
3. 📝 Read `docs/ADDING_VOCABULARY.md` to add more words
4. 🎨 Customize colors in `tailwind.config.js`
5. 🚀 Share your progress with friends

## Additional Resources

- **React Documentation**: https://react.dev/
- **TypeScript Documentation**: https://www.typescriptlang.org/
- **Tailwind Documentation**: https://tailwindcss.com/
- **Vite Documentation**: https://vitejs.dev/

## Need Help?

If you encounter problems:

1. Review this guide carefully
2. Search for the error on Google
3. Consult the official documentation of the technologies
4. Verify that Node.js is up to date: `node --version`

---

**Enjoy learning Polish! 🇵🇱**
