# GEMINI.md

## Project Overview

This project is a Chrome extension named "Autofill Jobs" built with Vue.js. Its purpose is to automate and streamline the process of filling out job applications on various platforms like Workday, Greenhouse, Lever, and Dover. The extension aims to replicate the ease-of-use of LinkedIn's "Easy Apply" feature for other job application platforms.

The frontend is built using Vue.js, with a user interface that allows users to input and store their personal, professional, and educational information. This data is then used to automatically fill in the corresponding fields on job application forms. The extension utilizes `chrome.storage.sync` for most data and `chrome.storage.local` for larger files like resumes.

## Building and Running

To build and run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/andrewmillercode/Autofill-Jobs.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Autofill-Jobs
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Build the extension:**
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the built extension files.

5.  **Load the extension in Chrome:**
    *   Open Chrome and navigate to `chrome://extensions`.
    *   Enable "Developer mode".
    *   Click on "Load unpacked" and select the `dist` directory.

### Development Scripts

-   `npm run dev`: Starts the Vite development server.
-   `npm run watch`: Watches for changes in the `vue_src` directory and rebuilds the extension.
-   `npm run build`: Builds the extension for production.
-   `npm run preview`: Previews the production build.

## Development Conventions

The project follows standard Vue.js development conventions. The source code is located in the `src` directory, with components in `src/components` and the main application logic in `src/main.js` and `src/App.vue`. The project uses Vite for its build tooling, and the configuration is in `vite.config.js`.

The code is organized into single-file components (`.vue` files), which encapsulate the template, script, and style for each component. The project also uses composables for managing state and logic for features like privacy, skills, and work experience.
