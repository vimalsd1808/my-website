// Sample user data (for demonstration purposes)
const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "faculty", password: "faculty123", role: "faculty" },
    { username: "student", password: "student123", role: "student" },
];

// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Find the user in the array
    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        // Redirect based on role
        switch (user.role) {
            case "admin":
                window.location.href = "admin.html";
                break;
            case "faculty":
                window.location.href = "faculty.html";
                break;
            case "student":
                window.location.href = "student.html";
                break;
            default:
                alert("Invalid role!");
        }
    } else {
        alert("Invalid username or password!");
    }
}

// Attach event listener to the form
document.getElementById("loginForm").addEventListener("submit", handleLogin);