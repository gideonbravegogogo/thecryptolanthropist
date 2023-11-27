
  // Get all buttons with the 'menu-button' class
  var buttons = document.querySelectorAll('.menu-button');

  // Calculate the total height of all buttons
  var totalHeight = 0;
  buttons.forEach(function(button) {
    totalHeight += button.offsetHeight;
  });

  function mainMenu (){
    // Open the "game.html" page in the same window
    window.location.href = "game.html";
    
    // Close the current page (sandbox.html)
    window.close();
  }
  function quit (){
    console.log('hi')
    window.close()
  }
  function two (){
    alert("new game")}
  // Calculate the top offset to center the buttons vertically
  var centerOffset = (window.innerHeight - totalHeight) / 2;

  // Loop through the buttons and position them individually
  let i = 0
  buttons.forEach(function(button) {
    button.style.top = centerOffset + "px";
    button.style.left =  "850px";
    centerOffset += button.offsetHeight + 10; // Add 10 for spacing
    i++
  });


  // Function to display the options modal
function showOptionsModal() {
    const modal = document.getElementById('optionsModal');
    modal.style.display = 'block';
  }
  
  // Function to close the options modal
  function closeOptionsModal() {
    const modal = document.getElementById('optionsModal');
    modal.style.display = 'none';
  }
  
  // Function to save hotkey settings
  function saveHotkeys() {
    const keyW = document.getElementById('keyW').value;
    const keyA = document.getElementById('keyA').value;
    const keyS = document.getElementById('keyS').value;
    const keyD = document.getElementById('keyD').value;
    const keyEnter = document.getElementById('keyEnter').value;
  
    // Here, you can implement code to save the hotkey settings (e.g., in local storage)
    // You can update your game to listen for these custom hotkeys.
  
    // After saving, close the modal
    closeOptionsModal();
  }
  