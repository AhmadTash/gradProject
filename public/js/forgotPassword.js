

// Get the "Rating" link element
const ratingLink = document.querySelector('a[href="signIn.html"]');

// Add an event listener to handle click on the "Rating" link
ratingLink.addEventListener('click', function(event) {
  // Prevent the default link behavior
  event.preventDefault();
  
  // Show the modal when the link is clicked
  const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
  contactModal.show();
});

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.form-control');

    inputs.forEach((input, index) => {
        input.addEventListener('input', function(e) {
            if (this.value.length >= this.maxLength) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' || e.keyCode === 8) {
                if (this.value.length === 0 && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });
});