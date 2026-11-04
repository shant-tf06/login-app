document.getElementById("registerForm").addEventListener("submit", async function(event) { 
    event.preventDefault();
    console.log(event.target.children.email.value);
    console.log(event.target.children.password.value);
    console.log(event.target.children.confirmPassword.value);
    
    const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: event.target.children.email.value,
            password: event.target.children.password.value
        })
    });
    const data = await res.json();
    console.log(data);
});