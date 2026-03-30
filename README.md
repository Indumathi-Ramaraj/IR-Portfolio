# Indumathi Ramaraj Portfolio

A modern, responsive personal portfolio built with React and Vite. It features a sleek dark mode UI with glassmorphism design principles, responsive layouts, and a fully functional contact form powered by a Node.js/Express backend.

## Features

- **Modern UI/UX**: Dark mode aesthetic with glass-like responsive cards, smooth animations, and gradient text.
- **Dynamic Content**: Data-driven components for Projects, Skills, and Experience.
- **Contact Form**: Integrated functional contact form that sends messages directly to email via Nodemailer.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.

## Tech Stack

### Frontend
- [React 18](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- Vanilla CSS (Glassmorphism & Flexbox/Grid)
- [Lucide React](https://lucide.dev/) for icons

### Backend
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/) (Email transport)
- [CORS](https://www.npmjs.com/package/cors) & [Dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository (or extract the project files):**
   ```bash
   git clone <repository-url>
   cd indumathi-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add the following configuration for the backend to handle contact form submissions:

   ```env
   # Server Port
   PORT=3001

   # Contact Form Email Configuration (Gmail)
   GMAIL_USER=your_gmail_address@gmail.com
   GMAIL_APP_PASSWORD=your_gmail_app_password
   CONTACT_TO_EMAIL=where_to_receive_emails@gmail.com
   ```

4. **Run the Application:**
   This project uses `concurrently` to run both the Vite frontend development server and the Express backend server with a single command:
   ```bash
   npm run dev:all
   ```

   Alternatively, you can run them separately in different terminal windows:
   - Frontend: `npm run dev`
   - Backend: `npm run server`

5. **View the site:**
   Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```text
indumathi-portfolio/
├── public/                 # Static assets
├── server/
│   └── index.js            # Express backend for contact form email handling
├── src/
│   ├── assets/             # Images and fonts
│   ├── components/         # React application components
│   ├── data/               # Portfolio content data (skills, projects, experience)
│   ├── index.css           # Global CSS variables and utility classes
│   ├── App.jsx             # Main application entry component
│   └── main.jsx            # React rendering entry
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## Developer

**Indumathi Ramaraj**
- Full Stack Developer & React.js Technical Trainer
- Email: induammu223@gmail.com
- Location: Coimbatore, India
