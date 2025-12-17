# Bedankt Elfriede - Interactive Wizard Application

## Overview

This is a simple web-based interactive "wizard" flow application designed as a personalized experience for Elfriede. The application guides the user through a series of steps including video viewing, quiz questions, and celebratory messages - likely created as a retirement gift or celebration.

The application is built as a single-page web app with a Flask backend serving static files. It features a playful, colorful design with floating animated elements and a cheerful aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Single Page Application (SPA)**: The entire experience runs in a single HTML page with JavaScript handling all navigation and state
- **Step-based Wizard Pattern**: Content is organized as an array of "steps" that the user progresses through sequentially
- **Step Types**:
  - `start`: Welcome screen with a button to begin
  - `video`: Video playback with a "next" button that activates after viewing
  - `quiz`: Multiple choice questions with correct/incorrect feedback and sound effects
  - `text`: Informational content with a continue button
- **Dynamic Rendering**: The `renderStep()` function reads the current step from the array and injects appropriate HTML into the `content-area` div
- **State Management**: Simple variable `currentStep` tracks progress through the wizard

### Styling Approach
- **Tailwind CSS**: Used via CDN for utility-first styling
- **Custom CSS (styles.css)**: Contains animations (floating balls, pulse effects) and component-specific styles
- **Visual Theme**: Playful, celebratory design with gradient buttons, floating colored balls, and confetti effects

### Backend Architecture
- **Flask**: Minimal Python server that serves static files
- **Static File Serving**: All routes serve files from the current directory
- **No Database**: This is a purely static application with no server-side state

### Third-Party Libraries
- **Tailwind CSS (CDN)**: Utility CSS framework
- **Canvas Confetti**: JavaScript library for confetti animations (celebration effects)

## External Dependencies

### CDN-loaded Libraries
- **Tailwind CSS**: `https://cdn.tailwindcss.com` - CSS utility framework
- **Canvas Confetti**: `https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0` - Celebratory animation effects

### Python Dependencies
- **Flask**: Web framework for serving the static application

### Media Assets (Expected)
- Video files (e.g., `testvideo_mp4.mp4`) - User-provided content
- Audio files for quiz feedback (`goed.mp3`, `fout.mp3`) - Correct/incorrect sounds
- Image files for message steps - User-provided content

### Development Notes
- The Flask server runs on port 5000
- All static files are served from the project root directory
- The application is designed for mobile-first viewing (max-width container, touch-friendly buttons)