# MARZANNA HUNT
A fast-paced survival game built for the browser.

# Describtion
The game takes place aboard a collapsing spaceship, where the main character awakens alone and follows a distress beacon emitted from their partner’s mask. As they move through the failing ship, the player encounters alien and monstrous entities that force difficult moral choices—each decision affecting whether the protagonist survives.

# Directions (LocalHost setup) 
  # Requirements:
    - Node.js 
    - npm
  # Steps:
    1. Clone the repository
    2. run 'cd SparkHacks2026'
    3. run 'npm install'
    4. run 'npm run dev'
    5. open local host link in your browser

# Gameplay
Players progress by reading the on-screen text and making choices when prompted 
(by clicking on them). Each decision influences the outcome of encounters and 
the direction of the story.

# Build with 
  - TypeScript + React + Vite
  - CSS, HTML, JavaScript
  - Node.js
  - JSON (for dialogue and story data)

# Code Structure
/public                - audio assets

/src
  - components         - UI and game components
  - data               - story line
  - engine             - state handling

index.html             - base HTML file 

package-lock.json      - internal dependency info

package.json           - project metadata, dependencies, and scripts

tsconfig.app.json      - TypeScript configuration

tsconfig.json          - App-specific TypeScript config

tsconfig.node.json     - Node-specific TypeScript config

vite.config.ts         - Vite build configuration

## TEAM
  Srinjana Chatterjee(@spaceiscool29) - UI/UX design, Backend & server setup
  
  Ragasri Yegatella(@RagaY05) - Game logic/script, audio
  
  Mika Kharoshka(@mkkhar & @kkhargit) - Game logic/script


# Additional info for developers:

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
