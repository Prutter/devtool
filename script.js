// Define constants
const apiKey = "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"

// Get references to HTML elements
const editorFrame = document.querySelector('.editor-frame');
const outputFrame = document.querySelector('.output-frame');
const convertButton = document.getElementById('convert-button');
const debugButton = document.getElementById('debug-button');
const qualityButton = document.getElementById('quality-button');
const languageSelect = document.getElementById('language-select');
function debugCode() {
    // Get code from the editor frame
    const code = editorFrame.innerText;
  
    // Get the selected programming language
    const selectedLanguage = languageSelect.value;
  
    // Send a POST request to the ChatGPT API for code debugging
    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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' // Replace with your ChatGPT API key
      },
      body: JSON.stringify({
        prompt: `Debug the following code in ${selectedLanguage}: ${code}. What is needed to make it run as it is. Generate that code`,
        max_tokens: 100
      })
    })
    .then(response => response.json())
    .then(data => {
      // Extract the debugged code from the API response
      const debuggedCode = data.choices[0].text.trim();
  
      // Display the debugged code in the output frame
      outputFrame.innerText = debuggedCode;
    })
    .catch(error => {
      console.error('Error:', error);
      outputFrame.innerText = 'An error occurred during code debugging.';
    });
  }
  
function convertCode() {
    // Get code from the editor frame
    const code = editorFrame.innerText;
  
    // Get the selected programming language
    const selectedLanguage = languageSelect.value;
  
    // Send a POST request to the ChatGPT API for code conversion
    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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' // Replace with your ChatGPT API key
      },
      body: JSON.stringify({
        prompt: `Convert the following code to ${selectedLanguage}: ${code}`,
        max_tokens: 100
      })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
      // Extract the converted code from the API response
      const convertedCode = data.choices[0].text.trim();
  
      // Display the converted code in the output frame
      outputFrame.innerText = convertedCode;
    })
    .catch(error => {
      console.error('Error:', error);
      outputFrame.innerText = 'An error occurred during code conversion.';
    });
  }
  
  function checkCodeQuality() {
    // Get code from the editor frame
    const code = editorFrame.innerText;
  
    // Get the selected programming language
    const selectedLanguage = languageSelect.value;
  
    // Send a POST request to the ChatGPT API for code quality checking
    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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' // Replace with your ChatGPT API key
      },
      body: JSON.stringify({
        prompt: `Check the quality of the following code in ${selectedLanguage}: ${code}. tell the required ways to improve it and generate the code as per it`,
        max_tokens: 100
      })
    })
    .then(response => response.json())
    .then(data => {
      // Extract the code quality percentage from the API response
      const codeQualityPercentage = data.choices[0].text.trim();
  
      // Display the code quality percentage in the output frame
      outputFrame.innerText = `Code quality: ${codeQualityPercentage}%`;
    })
    .catch(error => {
      console.error('Error:', error);
      outputFrame.innerText = 'An error occurred during code quality checking.';
    });
  }
  