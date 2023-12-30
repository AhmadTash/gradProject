// Get the "Rating" link element
const ratingLink = document.querySelector('a[href="signIn.html"]');

// Add an event listener to handle click on the "Rating" link
ratingLink.addEventListener('click', function(event) {
  // Prevent the default link behavior
  event.preventDefault();
  
  // Show the modal when the link is clicked
  const ratingModal = new bootstrap.Modal(document.getElementById('ratingModal'));
  ratingModal.show();
});




// Get the "Contact Company" link element
const contactLink = document.querySelector('a[href="m"]'); // Replace '#' with the appropriate href value

// Add an event listener to handle click on the "Contact Company" link
contactLink.addEventListener('click', function(event) {
  // Prevent the default link behavior
  event.preventDefault();
  
  // Show the contact modal when the link is clicked
  const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
  contactModal.show();
});


  





