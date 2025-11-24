document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.querySelector("form");
    const mobileNumber = document.getElementById("mobile"); 
    const password = document.getElementById("password");

    
    if (!loginForm) {
        console.error("Login form not found on the page.");
        return;
    }

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

       
        if (!mobileNumber.value || !password.value) {
            alert("Please enter both your mobile number and password.");
            return;
        }

        const loginData = {
            mobileNumber: mobileNumber.value,
            password: password.value,
        };

        try {
            
            const res = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            
            const result = await res.json();

            if (!res.ok) {
                
                alert(result.message || "Login failed. Please check your credentials.");
                return;
            }
            alert("Login successful!");
            
            window.location.href = "ls.html";

        } catch (error) {
            
            console.error("Error connecting to the backend:", error);
            alert("Error connecting to the backend. Please try again later.");
        }
    });
});