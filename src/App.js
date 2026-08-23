/**
 Program Name: React Tokenizer App
 Author: Lyndsey Clagg
 Course: Operating Systems MWF 3-3:50 pm Spring 2025
 Date: 03-26-25
 
 Program Summary: This React functional component allows the user to input text, tokenize it into words and punctuation, and display the tokens. 
 It uses the useState hook to manage the input text and the tokenized output. The tokenization is done using a regular expression 
 that identifies words and punctuation marks, ignoring spaces. The result is displayed in a comma-separated list.

 Methods:
 - tokenizeInput: This user-defined method processes the input text using a regular expression and updates the tokens state with the tokenized result.
 
 Imports:
 - React: Library to build the component.
 - useState: React hook to manage the component’s state (input text and tokens).

 CSS Styling:
 - Inline styles are used to style the elements, including input, button, and output display.
 */

// Importing React and useState hook from the 'react' package
// React is the library used to build the component, and useState is used for state management.
import React, { useState } from 'react'; 

// Defines the Tokenizer component as a functional component in React
const Tokenizer = () => {

  // Declares the 'inputText' state variable and its setter function 'setInputText'.
  // This state holds the text entered by the user in the input field.
  const [inputText, setInputText] = useState(''); 

  // Declares the 'tokens' state variable and its setter function 'setTokens'.
  // This state holds the array of tokenized words and punctuation.
  const [tokens, setTokens] = useState([]); 

  // User-defined function to process and tokenize the input text
  const tokenizeInput = () => {
    // Regular expression used to match words (\\b\\w+\\b) and punctuation marks ([.,!?]).
    // Spaces are ignored. The match() method returns an array of matching tokens, or an empty array if no match.
    const tokenized = inputText.match(/\b\w+\b|[.,!?]/g) || [];

    // Updates the 'tokens' state with the newly tokenized array of words and punctuation
    setTokens(tokenized); 
  };

  return (
    // Outer div container with flex layout, aligning children elements vertically at the center
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      
      {/* Heading displaying the title of the component */}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Text Tokenizer</h2>
      
      {/* Input field for the user to enter text */}
      <input
        // Specifies that the input is a text field
        type="text" 
        // Binds the input field value to the 'inputText' state variable
        value={inputText} 
        // Updates 'inputText' state when the user types in the field
        onChange={(e) => setInputText(e.target.value)} 
        // Displays a placeholder when the input is empty
        placeholder="Enter text here..." 
        style={{
          // Adds padding inside the input field for better readability
          padding: '10px', 
          // Adds space below the input field
          marginBottom: '10px',
          // Sets the width of the input field
          width: '300px', 
          // Sets the font size for the input text
          fontSize: '16px', 
          // Rounds the corners of the input field
          borderRadius: '4px', 
          // Sets a light border color for the input field
          border: '1px solid #ccc', 
        }}
      />
      
      {/* Button that triggers the tokenization process */}
      <button
        // Calls 'tokenizeInput' when the button is clicked
        onClick={tokenizeInput} 
        style={{
          // Adds padding inside the button for better accessibility
          padding: '10px 20px', 
          // Sets the font size for the button text
          fontSize: '16px', 
          // Changes the cursor to a pointer on hover to indicate clickability
          cursor: 'pointer', 
          // Sets the background color of the button
          backgroundColor: '#4CAF50', 
          // Sets the text color of the button to white
          color: 'white', 
          // Removes the border from the button
          border: 'none', 
          // Rounds the corners of the button
          borderRadius: '4px', 
          // Adds space below the button
          marginBottom: '20px', 
        }}
      >
        {/* Button text */}
        Tokenize 
      </button>

      {/* Displays the tokenized output, or a message if no tokens are generated */}
      <div
        style={{
          // Adds padding inside the display box
          padding: '10px', 
          // Sets a light border color for the display box
          border: '1px solid #ccc', 
          // Rounds the corners of the display box
          borderRadius: '4px', 
          // Sets the width of the display box
          width: '300px', 
          // Ensures the display box has a minimum height of 50px
          minHeight: '50px', 
          // Uses flexbox to layout the content inside the box
          display: 'flex', 
          // Centers the content vertically inside the box
          alignItems: 'center', 
          // Centers the content horizontally inside the box
          justifyContent: 'center', 
        }}
      >
        <strong>Tokens:&nbsp;</strong> 
        {/* Joins the tokens array into a comma-separated string and displays it */}
        {tokens.length > 0 ? tokens.join(', ') : 'No tokens yet'} 
        {/* If tokens are present, they are displayed; otherwise, a default message appears */}
      </div>
    </div>
  );
};

// Exports the Tokenizer component as the default export of this file
export default Tokenizer;
