const calcButton = document.querySelector(".calc-button");

calcButton.addEventListener("click", calculateAge);

function calculateAge() {
  // Fetching values from the HTML input fields
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  // Creating date from the input fields
  const birthDate = new Date(year, month - 1, day);

  // Present date
  const presentDate = new Date();

  // Calculating present date minus the dates from input fields
  const timeCalc = presentDate - birthDate;

  const ageDate = new Date(timeCalc);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  const resultsElements = document.getElementById("result");

  resultsElements.innerHTML = `${years}<span class="colored"> years</span><br>
                             ${months}<span class="colored"> months</span><br>
                             ${days}<span class="colored"> days</span>`;
}
