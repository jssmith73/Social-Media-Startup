// Get the current date
const currentDate = new Date();

// Format the date (e.g., December 18, 2023)
const formattedDate = new Intl.DateTimeFormat('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
}).format(currentDate);

// Display the formatted date
console.log(`Formatted date: ${formattedDate}`);

