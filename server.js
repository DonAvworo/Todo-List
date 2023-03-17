require('dotenv').config();                                 // Load environment variables from .env file     
// const express = require('express');                         // Import the express module
// const app = express();                                      // Create an express application

function generateImage() {                                  // Define the generateImage function      
    const apiKey = process.env.OPENAI_API_KEY;              // Get the OpenAI API key from the .env file
    const apiUrl = process.env.OPENAI_API_URL;              // Get the OpenAI API URL from the .env file
    const inputText = document.getElementById("userInput").value; // Get the value of the input field and store it in a variable called inputText
  
    fetch(apiUrl, {                                         // Make a POST request to the OpenAI API
      method: "POST",                                       // Specify the HTTP method
      headers: {                                            // Specify the HTTP headers 
        "Content-Type": "application/json",                 // Specify the content type of the request body
        "Authorization": `Bearer ${apiKey}`                 // Specify the authorization header
      },
      body: JSON.stringify({                                // Specify the request body
        "model": "image-alpha-001",                         // Specify the model to use
        "prompt": inputText,                                // Specify the prompt text
        "num_images": 1,                                    // Specify the number of images to generate
        "size": "512x512",                                  // Specify the size of the images to generate
        "response_format": "url"                            // Specify the response format
      })
    })
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.data[0].url;                    // Get the image URL from the response
      const imageElement = document.createElement("img");   // Create an image element
      imageElement.src = imageUrl;                          // Set the image element's src attribute to the image URL
      //APPEND THE IMAGE TO THE DIV WITH ID OF "dalle-img"
        let dalleImg = document.getElementById("dalle-img");  // Get the div with id of "dalle-img" and store it in a variable called dalleImg
        dalleImg.appendChild(imageElement);                 // Append the image element to the div with id of "dalle-img"

    //   document.body.appendChild(imageElement);              // Append the image element to the document body
    })
    .catch(error => {                                       // If there is an error, log it to the console
      console.error("Error generating image:", error);      // Log the error to the console
    });
  }
  
  // make the function available to the app.js file
    module.exports = generateImage;
