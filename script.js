document.addEventListener("DOMContentLoaded", () => {

    const createAcctForm = document.querySelector("form")
    const firstName = document.getElementById("one")
    const lastName = document.getElementById("two")
    const otherName = document.getElementById("three")
    const mobileNumber = document.getElementById("four")
    const password = document.getElementById("five")
    
    createAcctForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        //basic validation
        if (!firstName.value || !lastName.value || !otherName.value || !mobileNumber.value || !password.value){
            alert("please fill out all fields");
            return;
        }

        const userdata = {
            firstName: firstName.value,
            lastName : lastName.value,
            password : password.value,
            mobileNumber: mobileNumber.value,
            otherName : otherName.value,
        };

        try {
            const res = await fetch("http://localhost:3000/api/create-account", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userdata),
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.message || "sign up failed");
                return;
            }

            alert("Account created successfully");
            window.location.href = "login.html";
        } catch (error) {
            console.error(error);
            alert("Error connecting to the backend");
        }
    });
});
