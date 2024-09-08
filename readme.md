
# Style Showcase Generator

This project is a web application that generates custom website style showcases based on user input. It uses AI to create unique designs tailored to specific themes and background styles.

## Features

- Generate custom website styles based on user-defined themes
- Choose from three background styles: Detailed/CSS Animated, Gradient, or Plain
- Preview generated showcases in real-time
- View and copy the generated HTML and CSS code
- Responsive design using Tailwind CSS

## Technologies Used

- HTML5
- JavaScript (ES6+)
- Tailwind CSS
- Google's Generative AI (via @langchain/google-genai)
- Markdown-it for rendering Markdown

## Setup and Usage

1. Clone the repository to your local machine.
2. Ensure you have Node.js installed.
3. Install the required dependencies:
   
   npm install
   
4. Set up your Google API key in a `.env` file:
   
   GOOGLE_API_KEY=your_api_key_here
   
5. Run the application:
   
   npm run dev
   
6. Open your browser and navigate to `http://localhost:3000` (or the port specified by your development server).

## How to Use

1. Choose a background style from the dropdown menu.
2. Enter a style theme in the input field (e.g., "retro", "futuristic", "minimalist").
3. Click the "Generate Showcase" button.
4. View the generated showcase in the preview tab.
5. Switch to the code tab to see the HTML and CSS code.
6. Use the "Copy Code" button to copy the generated code to your clipboard.

## Project Structure

- `index.html`: The main HTML file containing the structure of the web application.
- `main.js`: The JavaScript file handling user interactions, API calls, and showcase generation.
- `style.css`: Additional styles for the application (imported in `main.js`).

## Notes

- This application requires a valid Google API key to function properly.
- The generated showcases are created using AI and may require further customization for production use.
