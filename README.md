# Crop Manager Client

## Project Overview
Crop Manager Client is a modern React-based web application designed to help farmers and agricultural professionals manage their crop operations efficiently. This frontend application provides a user-friendly interface for monitoring crops, managing agricultural data, and optimizing farming operations.

## Technology Stack
- **Frontend Framework:** React 18.0.0
- **UI Library:** Material-UI (MUI) v5
- **State Management:** Redux with Redux Thunk
- **Routing:** React Router v6
- **API Communication:** Axios
- **Date Handling:** Multiple date libraries support (date-fns, dayjs, luxon, moment)
- **Styling:** Emotion and Styled Components

## Key Features
1. **Responsive Dashboard**
   - Real-time crop monitoring
   - Agricultural data visualization
   - User-friendly interface

2. **Data Management**
   - Crop tracking and management
   - Resource allocation
   - Reporting and analytics

3. **User Interface**
   - Material Design components
   - Data grid for efficient data display
   - Date pickers and advanced form controls

## Project Structure
```
src/
├── actions/      # Redux actions
├── components/   # Reusable UI components
├── constants/    # Application constants
├── reducers/     # Redux reducers
├── screens/      # Main application screens
├── store.js      # Redux store configuration
└── utils.js      # Utility functions
```

## Getting Started

### Prerequisites
- Node.js (Latest LTS version)
- npm or yarn package manager

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Available Scripts
- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from create-react-app

## Development

### State Management
- Uses Redux for global state management
- Implements Redux Thunk for handling asynchronous actions
- Redux DevTools integration for debugging

### UI Components
- Material-UI components for consistent design
- Custom styled components for specific needs
- Responsive layout for all screen sizes

### API Integration
- Axios for HTTP requests
- Proxy middleware for development
- Error handling and loading states

## Production Deployment
- Configured for deployment on Netlify
- Optimized build process
- Environment-specific configurations

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Configured with browserslist for optimal compatibility

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License.
