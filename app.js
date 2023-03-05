let closeIcon = document.getElementsByTagName("li");   // Get all the list items in the document and store them in a variable
for (let i = 0; i <closeIcon.length; i++) {           // Loop through the list items and add a close button to each one of them 
  let span = document.createElement("SPAN");            // Create a span element that will contain the close button in each list item //SEE NOTE-1 BELOW
  let txt = document.createTextNode("\u00D7");          // Create a text node that will contain the close button in each list item //SEE NOTE-2 BELOW
  span.className = "close";                             // Give the span element a class name of "close" so that it can be styled with CSS
  span.appendChild(txt);                                // Append the text node to the span element. the text node contains the close button
  closeIcon[i].appendChild(span);                      // Append the span element to the list item. The span element contains the close button 
}

let my

//NOTE-1: The span element is created and stored in a variable called span. The span element is then given a class name of "close" so that it can be styled with CSS.
//The span element is then appended to the text node that contains the close button. The span element is then appended to the list item.

//NOTE-2: The text node is created and stored in a variable called txt. The text node contains the close button. The text node is then appended to the span element.

// Path: app.js

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");   // Get all the close buttons in the document and store them in a variable
for (let i = 0; i < close.length; i++) {      // Loop through the close buttons and add a click event listener to each one of them
    close[i].onclick = function() {           // When a close button is clicked, do the following
    let div = this.parentElement;             // Get the parent element of the close button and store it in a variable called div
    div.style.display = "none";               // Set the display style of the parent element to "none" so that it is hidden
    }
}

