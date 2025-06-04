<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
# 🚀 Internship Task – ToDo App using React

Your challenge is to build a clean, functional, and responsive **ToDo App** using **React**. This task will showcase your understanding of front-end development, component structure, and user interaction.

---

## 📝 Task Description

Build a ToDo App that allows users to:

- Add tasks
- Mark tasks as completed or not
- Delete tasks

---

## 🎯 Required Features

### 🧾 Core Requirements

- ✅ Add new tasks
- ✅ Display tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks

### ✨ Bonus (Optional)

- 🔄 Filter tasks: All / Active / Completed
- 💾 Persist tasks using `localStorage`
- 📱 Make it mobile responsive
- 🎨 Use modern UI libraries like [ShadCN UI](https://ui.shadcn.com/) for better design

---

## 🛠 Tech Stack Guidelines

- You **must use React**.
- You can use **Vite** (recommended for faster setup).
- You may use **ShadCN UI**, **Tailwind CSS**, or any other modern styling solution.

---

## 🧠 Tips

- Use functional components and hooks (`useState`, `useEffect`, etc.)
- Keep your components modular
- Ensure a smooth and simple user experience

---

## 🔧 Submission Instructions

1. **Fork** this repository.
2. Build your app there using Vite + React or any other stack.
3. Once you're done, **create a Pull Request**.
4. Make sure your app runs correctly and looks good on different screen sizes.
5. HOST YOUR WEBSITE WITH PLATFORMS LIKE [VERCEL](https://vercel.com/).

---

## 💬 Need Help?

If you get stuck:
- Use Google or AI tools like ChatGPT
- Check out [Vite Docs](https://vitejs.dev/guide/)
- Explore [ShadCN UI](https://ui.shadcn.com/docs/installation)
- Get in touch with your team lead or team mates for support.

---

## 🙌 Good Luck & Happy Coding!
>>>>>>> 48bebe7b7ffc66749de8452c5c80aa519b29f058
