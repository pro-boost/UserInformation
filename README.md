# React Project Template

This is a React project template with ESLint, Prettier, and Vite configured. You can use this template to quickly set up a new React project with best practices in mind.

## Features

- **React**: The latest version of React.
- **Vite**: Fast and modern build tool for React projects.
- **ESLint**: A static code analysis tool for identifying and fixing problems in your JavaScript code.
- **Prettier**: A code formatter to enforce a consistent style.
- **GitHub Pages**: Simple deployment configuration to deploy your project easily.

## How to Use This Template

### 1. **Create a New Repository Using This Template**

- Go to the [template repository](https://github.com/pro-boost/template).
- Click the **"Use this template"** button.
- Select **"Create new repository"**.
- Choose **"Include all branches"**.
- Name your repository and click **Create Repository**.
- Copy the HTTPS URL of the new repository.

### 2. **Clone the New Repository Locally**

Once the new repository is created, clone it to your local machine:

1. Open your terminal (or Git Bash).
2. Run the following command, replacing `your-username` and `my-new-project` with the correct values:

   ```bash
   git clone https://github.com/your-username/my-new-project.git

   ```

3. Navigate to the project folder:

   ```bash
   cd my-new-project
   ```

### 3. **Install Dependencies**

Run the following command to install the required dependencies:

```bash
npm install

```

### 4. **Start the Development Server**

To start the development server and see your project in action, run:

```bash
npm run dev
```

### 5. **Run Linting and Formatting**

To ensure your code is following the defined style and to fix issues, you can use the following commands:

**Linting** (runs ESLint):

```bash
npm run lint
```

**Formatting** (runs Prettier):

```bash
npm run format
```

### 6. **Deploy to GitHub Pages**

If you want to deploy your app to GitHub Pages, use the following steps:

1. Run the build script:

   ```bash
   npm run build
   ```

Deploy the dist folder to GitHub Pages:

```bash

npm run deploy
```

Your site will be deployed to https://your-username.github.io/my-new-project.
