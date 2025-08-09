







// Get the form elements
const form = document.getElementById('login');
const nameInput = document.getElementById('Uname');
const passwordInput = document.getElementById('Pass');
const emailInput = document.getElementById('Email');
const phoneInput = document.getElementById('PhoneNum');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
  // Prevent the default form submission
  e.preventDefault();

  // Validate the name
  const nameRegex = /^[a-zA-Z ]{3,30}$/;
  if (!nameRegex.test(nameInput.value)) {
    alert("Invalid name. Please enter a name with only letters and spaces (3-30 characters).");
    return;
  }

  // Validate the password
  if (passwordInput.value !== "abc123") {
    alert("Invalid password. Please enter the correct password.");
    return;
  }

  // Validate the email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Invalid email. Please enter a valid email address.");
    return;
  }

  // Validate the phone number
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    alert("Invalid phone number. Please enter a 10-digit phone number.");
    return;
  }

  // If all validations pass, allow form submission
  form.submit();
});












//Get the icon and dropdown menu elements
const icon = document.getElementById('la-folie-icon');
const dropdownMenu = document.getElementById('la-folie-dropdown');

// Add an event listener to the icon
icon.addEventListener('click', () => {
  // Toggle the dropdown menu visibility
  dropdownMenu.style.display = dropdownMenu.style.display === 'block'? 'none' : 'block';
});
