

const clickableDiv = document.querySelectorAll('.clickable-div')

function clickOnDiv(){
  clickableDiv.forEach(e => {
    e.addEventListener("click", () => {
      const radioBtn = e.querySelector(".radioBtn");
      radioBtn.checked = true;
    })
  })
}

clickOnDiv();

      // JavaScript to dynamically display information based on radio button selection
      const Service = document.getElementById('Service');
      const radioButtons = document.querySelectorAll('input[name="options"]');

      radioButtons.forEach(button => {
          button.addEventListener('change', () => {
              Service.innerHTML = `You selected: ${button.value}`;
              // You can add logic here to fetch and display specific information based on the selection
          });
      });

