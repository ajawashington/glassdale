// ? Goal: Add “Associate Alibis” button to every Criminal Card
// When Button is clicked, display the known associates and their alibis for that specific criminal somewhere on DOM

// TODO: PART 1 - Make Button - Dispatch Custom Event
// Create a ShowAssociates Button component that returns some button HTML representation
// Add ShowAssociates button to Criminal Card - (needs import)
// Use the Criminal’s ID in the ID property of the button - (component will most likely take in a criminal object or ID as an argument)
// Need event listener to hear the click - so you need a reference to the Event Hub
// AddEventListener to Event Hub that listens for that specific button click
// Check event for id to match part of the string - (associates--1 or something like that)
// Dispatch Custom Event named something like "showAssociates" and pass Id of Criminal in the detail object

// TODO: PART 2 - Listen for Custom Event and Display Associates on DOM
// Which Component Needs to Listen for the "showAssociates" event?
// ** New AssociatesModalComponent
// Create ModalComponent that takes in a Criminal object and returns some HTML representation of a criminal’s associates
// Add EventListener to Event Hub that listens for "showAssociates" event
// TEST - need event listener on DOM >> Where? Button Component
// Needs a place to go in the DOM - add Modal Container to index.html
// Get the Criminal ID from the detail
// Find the criminal from the array of criminals (>> import useCriminals)
// Call the ModalComponent function and pass in the criminal as an argument and store HTML string in a variable
// Add the resulting HTML to the DOM
// ADD MODAL CSS
// Import modal.css to main.css


// TODO: PART 3 - REFACTOR HTML/CSS
// Add Nav Component to HTML
// Import Google Font
// Add Body, Nav, Main, and Filter Style



// MODAL.CSS

// .modal--parent {
//     position: fixed;
//     background-color: rgba(0, 0, 0, 0.521);
//     z-index: 999;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
// }

// .modal--content {
//     background-color: rgb(175, 184, 216);
//     border: 1px solid black;
//     width: 80%;
//     max-width: 700px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     padding: 1em;
//     box-shadow: 0px 0px 10px 0px black;
//     transform: translate(-50%, -50%);
//     text-align: center;
// }

// .associate__container {
//     display: flex;
//     flex-wrap: wrap;
//     border: 1px solid gray;
//     background-color: rgb(255, 255, 255);
//     padding: .5em;
//     margin: .5em;
//     text-align: left;
// }

// .associate__name {
//     flex-basis: 30%;
//     font-weight: bold;
//     padding: .5em;
// }

// .associate__alibi {
//     padding: .5em;
// }


// MAIN.CSS
// @import "./modal.css";
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;900&display=swap');
// body {
//   font-family: 'Roboto', sans-serif;
//   margin: 0;
//   padding: 0;
// }

// nav {
//   color: white;
//   background-color: #313153;
//   padding: .5em;
//   font-size: 2em;
//   font-weight: bold;
// }

// main {
//   background-color: #f1f1f1;
// }
