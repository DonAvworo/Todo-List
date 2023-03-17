

//add a close button to each list item by using appendChild() and createTextNode() methods //SEE notes.test NOTE - 1 
let closeIcon = document.getElementsByTagName("li");    // Get all the list items in the document and store them in a variable

for (let i = 0; i <closeIcon.length; i++) {             // Loop through the list items and add a close button to each one of them 
    let span = document.createElement("SPAN");          // Create a span element that will contain the close button in each list item 
    let txt = document.createTextNode("\u00D7");        // Create a text node that will contain the close button in each list item 
    span.className = "close";                           // Give the span element a class name of "close" so that it can be styled with CSS
    span.appendChild(txt);                              // Append the text node to the span element. the text node contains the close button
    closeIcon[i].appendChild(span);                     // Append the span element to the list item. The span element contains the close button 
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");   // Get all the close buttons in the document and store them in a variable

for (let i = 0; i < close.length; i++) {                // Loop through the close buttons and add a click event listener to each one of them
    close[i].onclick = function() {                     // When a close button is clicked, do the following 
    let div = this.parentElement;                       // Get the parent element of the close button and store it in a variable called div
    div.style.display = "none";                         // Set the display style of the parent element to "none" so that it is hidden
    }
}

//click on the div element to add a check mark to the list item
let list = document.querySelector('ul');               // Get the unordered list and store it in a variable called list
list.addEventListener('click', function(ev) {          // Add an event listener to the unordered list. When a list item is clicked, do the following
    if (ev.target.tagName === 'LI') {                  // If the target element is a list item, do the following
        ev.target.classList.toggle('checked');         // Toggle the class name of the target element. If the class name is "checked", remove it. If the class name is not "checked", add it
    }                                                  // The class name "checked" is used to add a check mark to the list item and it is a css class name that is defined in the style.css file
}, false);                                             // The false parameter specifies that the event should be executed in the bubbling phase (not the capturing phase) //SEE notes.test NOTE - 2

//================================================================================================================================================================
                //Adding and removing a new list item
//================================================================================================================================================================
// create a new list item when clicking on the "Add" button
let addBtn = document.getElementById("btn");            // Get the add button in the document and store it in a variable called addBtn
addBtn.addEventListener("click", newElement);           // Add an event listener to the add button. When the add button is clicked, call the newElement function

//Get image from dalle-e api and display it on the page

//import api from .env file




function newElement(event) {                            // Define the newElement function 
    // alert("Hello World!");                           // Display an alert message (for testing purposes only)
    
    // const generateImage = require('./server.js');       //import the generateImage function from the server.js file
    // generateImage();                                    //call the generateImage function

    //create a new list item
    let li = document.createElement("li");              // Create a new list item and store it in a variable called li
    let inputValue = document.getElementById("userInput").value; // Get the value of the input field and store it in a variable called inputValue
    let t = document.createTextNode(inputValue);        // Create a text node that contains the value of the input field and store it in a variable called t
    li.appendChild(t);                                  // Append the text node to the list item
    if (inputValue === '') {                            // If the input field is empty, do the following
        alert("Please Enter a Todo Title!");             // Display an alert message
    } else {                                            // If the input field is not empty, do the following
        document.getElementById("todo-list").appendChild(li); // Append the list item to the unordered list
    }
    document.getElementById("userInput").value = "";    // Set the value of the input field to an empty string

    //delete a list item
    let span = document.createElement("SPAN");          // Create a span element that will contain the close button in each list item
    let txt = document.createTextNode("\u00D7");        // Create a text node that will contain the close button in each list item
    span.className = "close";                           // Give the span element a class name of "close" so that it can be styled with CSS
    span.appendChild(txt);                              // Append the text node to the span element. the text node contains the close button
    li.appendChild(span);                               // Append the span element to the list item. The span element contains the close button

    for (let i = 0; i < close.length; i++) {            // Loop through the close buttons and add a click event listener to each one of them
        close[i].onclick = function() {                 // When a close button is clicked, do the following
        let div = this.parentElement;                   // Get the parent element of the close button and store it in a variable called div
        div.style.display = "none";                     // Set the display style of the parent element to "none" so that it is hidden
        }
    }

    //stop the button from submitting the ul element (propagation)
    event.preventDefault();  // woke up this morning and this line of code has been deprecated. I need to find a new way to stop the button from submitting the ul element
    
    //NOTE 
    //to solve the problem of deprecated event in javascript the type attribute in the FORM is changed from submit to button IN THE HTML FILE
    
};

//delete all list items   
let deleteAllList = document.getElementById("delete-all"); // Get the unordered list and store it in a variable called list
deleteAllList.addEventListener("click", deleteAll); // Add an event listener to the delete all button. When the delete all button is clicked, call the deleteAll function

function deleteAll() {                                  // Define the deleteAll function
    // alert ("Clicked");                               // Display an alert message
    let li = document.getElementsByTagName("li");       // Get all the list items in the document and store them in a variable called li
    for (let i = 0; i < li.length; i++) {               // Loop through the list items and add a click event listener to each one of them
        li[i].style.display = "none";                   // Set the display style of the list items to "none" so that they are hidden

    }
};

