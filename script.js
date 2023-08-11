const toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Get the sibling element (the toggle content)
    const toggleContent = btn.nextElementSibling;

    // Toggle the active class for the clicked button and content
    btn.classList.toggle('active');
    toggleContent.classList.toggle('active');

    // Hide other open toggle contents
    toggleBtns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove('active');
        otherBtn.nextElementSibling.classList.remove('active');
      }
    });
  });
});
