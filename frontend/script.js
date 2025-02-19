document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");

    // Handle login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const usernameInput = document.getElementById("username").value;
            localStorage.setItem("username", usernameInput);
            window.location.href = "dashboard.html";
        });
    }

    // Display membership status
    const membershipStatus = document.getElementById("membership-status");
    if (membershipStatus) {
        membershipStatus.textContent = username
            ? `Welcome, ${username}! Your membership is active.`
            : "Please log in.";
    }

    // Fetch tournaments (Mock Data)
    const tournamentList = document.getElementById("tournament-list");
    if (tournamentList) {
        setTimeout(() => {
            tournamentList.innerHTML = `
                <li>Soccer Championship - <button onclick="registerTournament()">Register</button></li>
                <li>Basketball League - <button onclick="registerTournament()">Register</button></li>
            `;
        }, 1000);
    }

    // Handle Booking
    const bookButton = document.getElementById("book-resource");
    if (bookButton) {
        bookButton.addEventListener("click", function () {
            const resource = document.getElementById("resource").value;
            const date = document.getElementById("booking-date").value;
            if (!date) {
                alert("Please select a date.");
                return;
            }
            document.getElementById("booking-status").textContent = `Booking confirmed: ${resource} on ${date}`;
        });
    }

    // Logout
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("username");
            window.location.href = "index.html";
        });
    }
});

function registerTournament() {
    alert("You have successfully registered for the tournament!");
}
