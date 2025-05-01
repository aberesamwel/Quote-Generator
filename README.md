Quote Generator Website

This project implements a simple website that generates quotes based on the user's selected mood.  The website consists of three pages: a home page, a login page, and a dashboard.

Features

 Mood-Based Quotes:  The core functionality is the generation of quotes based on four moods: happy, sad, motivational, and inspirational.  A JavaScript function (generateQuote) randomly selects a quote from a pre-defined array for the chosen mood.
 Intuitive Interface: The website uses a clean and simple design, making it easy for users to navigate and select their desired mood.  The dashboard presents the quote selection in a visually appealing manner using flexbox.
 Multiple Pages:  The website includes a home page, a login page (currently functional but without backend authentication), and a dashboard page displaying the quote.  Navigation between these pages is implemented using standard HTML links.
 
#Setup/Insatallation Requirements

.To access the website,follow these simple steps

1.Ensure you have an internet browser installed (e.g.Google Chrome)

2.open your browser

3.Enter the following URL in the address bar

   https://github.com/aberesamwel/Quote-Generator

4.Hit Enter and enjoy the site!
Files

 index.html (Home Page): The main landing page, welcoming users to the quote generator.  The main content is currently commented out, but it's designed to mirror the functionality of the dashboard page.
 login.html (Login Page): A simple login form.  Currently, this form submits to the dashboard page without any actual authentication mechanism.  This would need a backend implementation for secure login functionality.
 dashboard.html (Dashboard Page):  Displays the quote selection buttons and the generated quote.  Uses flexbox for layout.
 styles.css (Stylesheet): Contains all the CSS styling for the website.  Includes styles for the header, navigation, main content area, footer, buttons, and quote display.
 src/script.js (JavaScript): Contains the JavaScript code for generating quotes based on the selected mood.  Includes the quotes object containing the quote arrays for each mood.

#Technology Stack

 HTML:  Used for structuring the website content.
 CSS:  Used for styling the website.
 JavaScript:  Used for the core quote generation logic.

To Run the Project

1.  Clone the repository.
2.  Open index.html, login.html, or dashboard.html in your web browser.

Future Improvements

 Backend Integration: Implement a backend system (e.g., using Node.js, Python/Flask, etc.) for secure user authentication and potentially database storage of quotes.
 More Quotes: Expand the quotes object with a wider variety of quotes for each mood.
 User Accounts: Allow users to create accounts, save their favorite quotes, and potentially contribute their own quotes.
 Advanced Search:  Implement a search functionality to allow users to search for quotes containing specific keywords.
 Styling Enhancements: Further refine the CSS styling to improve the visual appeal and responsiveness of the website.

This README provides a comprehensive overview of the project's structure, functionality, and potential areas for future development.  The current implementation provides a basic, functional quote generator, but with significant potential for expansion and improvement.