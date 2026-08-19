// Grab HTML elements
const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
const readTime = document.getElementById('read-time');
const textPreview = document.getElementById('text-preview');

// Live Text Analytics and Preview
textInput.addEventListener('input', () => {
    let text = textInput.value;
    
    // Update Character Count
    charCount.textContent = text.length;
    
    // Update Word Count (filtering out empty strings caused by multiple spaces)
    let words = text.split(/\s+/).filter((word) => word.length > 0);
    wordCount.textContent = words.length;
    
    // Update Reading Time (assuming average reading speed of 200 words per minute)
    let timeToRead = (words.length / 200).toFixed(2);
    readTime.textContent = timeToRead;
    
    // Update Preview
    textPreview.textContent = text.length > 0 ? text : "Nothing to preview!";
});

// Convert to Uppercase
document.getElementById('btn-upper').addEventListener('click', () => {
    textInput.value = textInput.value.toUpperCase();
    textInput.dispatchEvent(new Event('input')); // Trigger update
});

// Convert to Lowercase
document.getElementById('btn-lower').addEventListener('click', () => {
    textInput.value = textInput.value.toLowerCase();
    textInput.dispatchEvent(new Event('input'));
});

// Remove Extra Spaces
document.getElementById('btn-spaces').addEventListener('click', () => {
    // Replaces multiple spaces with a single space
    textInput.value = textInput.value.replace(/\s+/g, ' ').trim();
    textInput.dispatchEvent(new Event('input'));
});

// Copy to Clipboard
document.getElementById('btn-copy').addEventListener('click', () => {
    textInput.select();
    navigator.clipboard.writeText(textInput.value);
    alert("Text copied to clipboard!");
});

// Clear Text
document.getElementById('btn-clear').addEventListener('click', () => {
    textInput.value = '';
    textInput.dispatchEvent(new Event('input'));
});