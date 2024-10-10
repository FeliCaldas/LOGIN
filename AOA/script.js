document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        
        localStorage.setItem("token", "seu_token_aqui");
        alert(`Welcome back, ${email}!`);
        window.location.href = 'api.html'; 
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

document.getElementById("signUpBtn").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email && password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Sign up successful! You can now log in.");
    } else {
        alert("Please fill in both email and password fields.");
    }
});
