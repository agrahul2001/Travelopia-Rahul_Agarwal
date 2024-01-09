// Function to toggle between showing more and less text
function toggleParagraph() {
  var paragraph = document.getElementById('paragraph');
  var button = document.getElementById('toggleButton');

  // Check if the paragraph is currently showing less text
  var isTruncated = paragraph.textContent.includes('...');

  if (isTruncated) {
      // If currently showing less text, switch to full text
      paragraph.textContent = paragraph.getAttribute('data-full-text');
      button.textContent = 'Show Less ⇧';
      arrowIcon.textContent = 'arrow_upward';
  } else {
      // If currently showing full text, switch to truncated text
      var truncatedText = paragraph.textContent.slice(0, 300) + '...';
      paragraph.textContent = truncatedText;
      button.textContent = 'Show More ⇩';
      arrowIcon.textContent = 'arrow_downward';
  }
}

// Save the full text to a data attribute for easy retrieval
var paragraph = document.getElementById('paragraph');
paragraph.setAttribute('data-full-text', paragraph.textContent);

// Check if the button already exists
var button = document.getElementById('toggleButton');
if (!button) {
  // Create "Show More" button only if it doesn't exist
  button = document.createElement('button');
  button.id = 'toggleButton';
  button.onclick = toggleParagraph;

  // // Create arrow icon
  // var arrowIcon = document.createElement('span');
  // arrowIcon.className = 'material-symbols-outlined';
  // arrowIcon.id = 'arrow-icon';
  // arrowIcon.textContent = 'arrow_downward';

  // // Append arrow icon and button after the paragraph
  // paragraph.insertAdjacentElement('afterend', button);
  // button.appendChild(arrowIcon); // Append arrow icon as a child of the button
}

// Initial setup to show only the first 300 characters
var truncatedText = paragraph.textContent.slice(0, 300) + '...';
paragraph.textContent = truncatedText;