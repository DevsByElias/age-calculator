const calcButton = document.querySelector(".calc-button");

calcButton.addEventListener("click", calculateAge);

function calculateAge() {
  // Fetching values from the html input fields
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  // Creating date from the input fields
  const birthDate = new Date(year, month - 1, day);

  // present date
  const presentDate = new Date();

  // calculating presentdate minus the dates from input fields
  const timeCalc = presentDate - birthDate;

  const ageDate = new Date(timeCalc);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDay() - 1;

  const resultsElements = document.getElementById("result");
  //cannot use " ", Template literals ' '
  resultsElements.innerHTML = `<span class="colored">${years}</span> years<br>
                             <span class="colored">${months}</span> months<br>
                             <span class="colored">${days}</span> days`;
}
