## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Setting Up the Project](#setting-up-the-project)
4. [Running the Application](#running-the-application)
5. [Project Structure](#project-structure)
6. [Key Features](#key-features)
7. [Troubleshooting](#troubleshooting)
8. [Conclusion](#conclusion)

## Project Overview

This project is a React Native application designed to provide a seamless user experience across both iOS and Android devices. The app includes a Home Screen that plays a video in landscape mode and features a secure user authentication system.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

1. **Node.js**: This is the JavaScript runtime needed to run the project.
2. **React Native CLI**: A command-line interface for React Native projects.
3. **Xcode** (for macOS users): Required to run the application on iOS simulators or devices.
4. **Android Studio**: Required to run the application on Android emulators or devices.

## Setting Up the Project

Follow these steps to set up the project on your machine:

1. **Clone the Repository**:

   - Download or clone the project repository to your local machine using the following command:
     ```bash
     git clone https://github.com/your-repo/react-native-app.git
     ```
   - Navigate into the project directory:
     ```bash
     cd react-native-app
     ```

2. **Install Dependencies**:
   - Install the required dependencies using `npm` or `yarn`:
     ```bash
     npm install
     ```
     or
     ```bash
     yarn install
     ```

## Running the Application

Once the setup is complete, you can run the application on either an iOS or Android device/emulator.

### For iOS:

1. **Start the Metro Bundler**:

   - This tool handles the bundling of JavaScript code.
   - Run the following command in your project directory:
     ```bash
     npx react-native start
     ```

2. **Run the iOS App**:
   - Open a new terminal window and run:
     ```bash
     npx react-native run-ios
     ```
   - This command builds and launches the app on the iOS simulator.

### For Android:

1. **Start the Metro Bundler**:

   - Run the following command in your project directory:
     ```bash
     npx react-native start
     ```

2. **Run the Android App**:
   - Open a new terminal window and run:
     ```bash
     npx react-native run-android
     ```
   - This command builds and launches the app on the Android emulator.

## Project Structure

Here is a brief overview of the project structure:

- **/screens**: Contains all the screen components like HomeScreen and LoginScreen.
- **/components**: Reusable components used across the application.
- **/services**: Contains service files, such as the authentication service for login.
- **/assets**: Holds static assets like images and videos.
- **App.tsx**: The entry point of the application, where the navigation logic is handled.

## Key Features

- **HomeScreen**: Displays a video that plays automatically in landscape mode.
- **User Authentication**: Users can log in using their email and password, with support for biometric authentication as well.

## Troubleshooting

If you encounter any issues, here are some common solutions:

1. **Metro Bundler Issues**:

   - If the bundler crashes or fails to start, try clearing the cache:
     ```bash
     npx react-native start --reset-cache
     ```

2. **Build Failures**:

   - Ensure that all dependencies are installed correctly and that your development environment is set up according to React Native's official documentation.

3. **Simulator/Emulator Issues**:
   - Ensure that your simulator or emulator is running before you execute the `run-ios` or `run-android` commands.

## Conclusion

Thank you for using this React Native application. If you have any questions or need further assistance, feel free to reach out. Happy coding!
