# **App Name**: EquipView

## Core Features:

- CSV Upload: Allow users to upload a CSV file containing chemical equipment parameters.
- Data Summary API: Provide a Django API endpoint that returns total count, averages, and equipment type distribution.
- Data Visualization: Display charts and tables of the data in both web (React.js + Chart.js) and desktop (PyQt5 + Matplotlib) frontends.
- History Management: Store the last 5 uploaded datasets and their summaries using SQLite.
- PDF Report Generation: Generate a PDF report of the data and summaries.
- Basic Authentication: Implement basic authentication for the web application.

## Style Guidelines:

- Primary color: Deep blue (#3F51B5) to convey professionalism and trustworthiness, nodding to the serious nature of the chemical equipment context.
- Background color: Light gray (#ECEFF1) to ensure a clean and neutral backdrop, creating good readability.
- Accent color: Soft teal (#4DB6AC) to draw attention to interactive elements without overwhelming the user, as an analogous color, with brightness and saturation values adjusted for appropriate contrast.
- Body font: 'Inter', a sans-serif font, is used for both headlines and body text, to provide a neutral and machined look that maintains legibility.
- Use clear and concise icons to represent different equipment types and data parameters.
- Maintain a consistent layout across both web and desktop applications to ensure a seamless user experience.
- Use subtle animations to provide feedback on user interactions and data updates.