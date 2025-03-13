// auth.js

// Function to sign up a new user
function signUp(firstName, lastName, email, password, confirmPassword) {
  // Validate password match
  if (password !== confirmPassword) {
    return { success: false, message: "Passwords do not match!" };
  }

  // Create user object
  const user = {
    firstName,
    lastName,
    email,
    password,
  };

  // Retrieve users from local storage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the email is already registered
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return { success: false, message: "Email already registered!" };
  }

  // Add new user to the array
  users.push(user);

  // Save updated users array to local storage
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true, message: "Sign-up successful!" };
}

// Function to log in a user
function login(email, password) {
  // Retrieve users from local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find the user with the matching email
  const user = users.find((u) => u.email === email);

  // Validate user credentials
  if (!user) {
    return { success: false, message: "User not found. Please sign up." };
  } else if (user.password !== password) {
    return { success: false, message: "Incorrect password. Please try again." };
  } else {
    // Successful login
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return { success: true, message: "Login successful!" };
  }
}

// Export the functions
export { signUp, login };
