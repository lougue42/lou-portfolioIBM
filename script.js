function addRecommendation() {
  // Get the text value from the textarea
  let recommendationText = document.getElementById("new_recommendation").value;

  if (recommendationText.trim() === "") {
    alert("Please enter a recommendation message before submitting.");
    return;
  }

  // Create a new div element for the recommendation
  let newRec = document.createElement("div");
  newRec.className = "recommendation";

  // Add the text with quote formatting
  newRec.innerHTML = `<span>&#8220;</span>${recommendationText}<span>&#8221;</span>`;

  // Append it to the all_recommendations container
  document.getElementById("all_recommendations").appendChild(newRec);

  // Clear the textarea
  document.getElementById("new_recommendation").value = "";

  // Show confirmation popup
  showPopup(true);
}

function showPopup(value) {
  if (value) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}
