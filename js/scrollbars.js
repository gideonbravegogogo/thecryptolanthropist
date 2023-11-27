
    // Get the content element
    const content = document.getElementById('content');

    // Set initial scroll position
    let scrollPosition = 0;

    // Add a mouse wheel event listener to handle scrolling
    content.addEventListener('wheel', (event) => {
      // Adjust the scroll position based on the mouse wheel delta
      scrollPosition -= event.deltaY;

      // Ensure the scroll position stays within bounds
      scrollPosition = Math.max(0, scrollPosition);
      
      // Update the content's scroll position
      content.style.transform = `translateY(-${scrollPosition}px)`;
    });