// Function to apply styles (Bold, Italic, Underline)
function applyStyle(style) {
    const notepad = document.getElementById('notepad');
    if (style === 'bold') {
      notepad.style.fontWeight = notepad.style.fontWeight === 'bold' ? 'normal' : 'bold';
    }
    if (style === 'italic') {
      notepad.style.fontStyle = notepad.style.fontStyle === 'italic' ? 'normal' : 'italic';
    }
    if (style === 'underline') {
      notepad.style.textDecoration = notepad.style.textDecoration === 'underline' ? 'none' : 'underline';
    }
  }
  
  // Function to change font
  function changeFont() {
    const notepad = document.getElementById('notepad');
    const fontSelector = document.getElementById('fontSelector');
    notepad.style.fontFamily = fontSelector.value;
  }
  
  // Function to change font size
  function changeFontSize() {
    const notepad = document.getElementById('notepad');
    const fontSizeSelector = document.getElementById('fontSizeSelector');
    notepad.style.fontSize = `${fontSizeSelector.value}px`;
  }
  
  // Function to save text as a .txt file
  function saveText() {
    const notepad = document.getElementById('notepad');
    const text = notepad.value;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'file.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  