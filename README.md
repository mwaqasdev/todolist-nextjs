# Todo List Next App

A modern Todo List application built with [Next.js](https://nextjs.org/) and [React](https://react.dev/), styled using [Tailwind CSS](https://tailwindcss.com/). This project demonstrates a simple, client-side todo list with add and delete functionality, leveraging Next.js 15 features and Google Fonts integration.

## Features

- Add tasks with title and description
- Delete tasks from the list
- Responsive UI styled with Tailwind CSS
- Uses Next.js App Router and Google Fonts
- Fast development with Turbopack

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd todolist-next
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the Next.js development server with Turbopack:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Building for Production

To build the app for production:

```sh
npm run build
```

To start the production server:

```sh
npm start
```

## Project Structure

```
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Global styles (Tailwind CSS imported)
│   ├── layout.js           # Root layout with Google Fonts
│   └── page.js             # Main Todo List page
├── public/                 # Static assets (SVGs)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .next/                  # Next.js build output (ignored)
├── .gitignore              # Files and folders to ignore in git
├── jsconfig.json           # JS project configuration (path aliases)
├── next.config.mjs         # Next.js configuration
├── package.json            # Project metadata and scripts
├── postcss.config.mjs      # PostCSS configuration for Tailwind
└── README.md               # Project documentation
```

## Technologies Used

- **Next.js 15** ([next](package.json)): React framework for server-side rendering and static site generation.
- **React 19** ([react](package.json), [react-dom](package.json)): UI library.
- **Tailwind CSS 4** ([tailwindcss](package.json)): Utility-first CSS framework.
- **@tailwindcss/postcss** ([postcss.config.mjs]): Tailwind CSS integration with PostCSS.
- **Google Fonts** ([app/layout.js](app/layout.js)): Geist Sans and Geist Mono.

## Customization

- **Add more features:** You can extend the todo list with edit, complete, or persist tasks using local storage or a backend.
- **Styling:** Modify [app/globals.css](app/globals.css) and Tailwind classes in [app/page.js](app/page.js) for custom styles.
- **Fonts:** Change or add fonts in [app/layout.js](app/layout.js).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

**Author:**  
Muhammad Waqas