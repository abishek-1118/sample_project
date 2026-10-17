
"use strict";

const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("status");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Check required fields and email format
  if (!form.reportValidity()) {
    return;
  }

  // Read the customer's name
  const name = document.getElementById("name").value.trim();

  // Display confirmation
  statusMessage.style.color = "#00e5ff";
  statusMessage.textContent =
    "Thank you, " + name +
    "! Your BMW showroom enquiry has been validated.";

  // Clear the form
  form.reset();
});

// Clear the confirmation when Reset is clicked
form.addEventListener("reset", function () {
  statusMessage.textContent = "";
});
