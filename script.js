document.getElementById('generate-btn').addEventListener('click', function() {
    // Generate a random color in hexadecimal format
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
    // Ensure the color has 6 characters (including leading zeros if necessary)
    while (color.length < 7) {
      color += '0';
    }
  
    
    document.getElementById('color-display').style.backgroundColor = color;
    document.getElementById('color-code').textContent = color;
  
    
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
   
    if (luminance > 0.5) {
      document.getElementById('color-code').style.color = '#000000';
    } else {
      document.getElementById('color-code').style.color = '#FFFFFF';
    }
  });
  