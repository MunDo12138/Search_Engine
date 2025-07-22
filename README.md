# Google Clone

A modern search engine interface built with React that mimics Google's functionality and design. Features include web search, image search, video search, and news results with a clean, responsive UI.

## Features

- **Web Search**: Search the web with real-time results
- **Image Search**: Browse images with grid layout
- **Video Search**: Watch and discover videos
- **News Search**: Stay updated with latest news
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Debounced Search**: Optimized search with debouncing for better performance

## Tech Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.11.0
- **Styling**: Tailwind CSS 3.3.2
- **State Management**: React Context API
- **Video Player**: React Player 2.12.0
- **Loading Animations**: React Loader Spinner 5.3.4
- **Search Optimization**: use-debounce 9.0.4

## Project Structure

```
src/
├── components/
│   ├── Footer.jsx          # Footer component
│   ├── Links.jsx           # Navigation links
│   ├── Loading.jsx         # Loading spinner component
│   ├── Navbar.jsx          # Navigation bar with theme toggle
│   ├── Results.jsx         # Search results display
│   ├── Routes.jsx          # Application routing
│   ├── Search.jsx          # Search input component
│   └── index.js            # Component exports
├── contexts/
│   └── ResultContextProvider.js  # Global state management
├── App.jsx                 # Main application component
├── Global.css              # Global styles
└── index.js                # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd google_clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` (if available)
   - Add your API key to `.env`:
```
REACT_APP_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Features Overview

### Search Functionality
- Real-time search with debouncing
- Multiple search categories (Web, Images, Videos, News)
- Responsive search results layout

### Theme Support
- Light and dark theme toggle
- Persistent theme preference
- Tailwind CSS dark mode implementation

### Performance Optimizations
- Debounced search queries
- Lazy loading of results
- Optimized re-renders with React Context

## Screenshots

### Today News
![image](https://github.com/MunDo12138/Search_Engine/assets/66548936/b0951263-548b-4ce1-a1a7-0751401e8093)

### Search Results
![image](https://github.com/MunDo12138/Search_Engine/assets/66548936/95f069c0-b713-4d99-9adb-4e645779e5b3)

### Images
![image](https://github.com/MunDo12138/Search_Engine/assets/66548936/f0420de2-7836-4408-a941-d894600df6e9)

### Videos
![image](https://github.com/MunDo12138/Search_Engine/assets/66548936/070b4120-798b-4adc-86b7-339759a835d1)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Google's search interface
- Built with Create React App
- Styled with Tailwind CSS
