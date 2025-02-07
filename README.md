# My screen size
This repository provides a React application that displays the user's browser information, including:

- **User Agent**
- **Operating System (OS)**
- **Browser and its version**
- **Window Dimensions (Width and Height)**

The application is built using the following technologies:

- **React** for the user interface.
- **Tailwind CSS** for styling.
- **Vite** for fast development and bundling.

---

## Features

- Detects and displays detailed browser information (User Agent, OS, Browser, Version).
- Dynamically updates the window dimensions as the browser window is resized.
- Styled with Tailwind CSS for a responsive and modern design.

---


## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/narcecl/my-screen-size.git
   cd my-screen-size
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## Usage

The application automatically detects your browser information and updates the window dimensions in real time. Simply open the app and resize the browser window to see the dimensions change dynamically.

---

## File Structure

```plaintext
src/
├── hooks/
│   ├── useBrowser.ts  # Displays browser info (User Agent, OS, Browser, Version).
│   ├── useWindowDimensions.ts  # Displays and tracks window dimensions.
├── App.tsx  # Main component.
├── main.tsx  # Entry point for the React app.
└── styles/
    └── global.css  # Tailwind CSS imports and custom styles.
```

---

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run preview`**: Preview the production build.
- **`npm run lint`**: Run linter to check code quality.

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Author

Built with ❤️ by [Nicolás Arce](https://github.com/narcecl).

