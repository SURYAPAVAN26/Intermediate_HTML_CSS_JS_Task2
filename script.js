// Contact Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === ""){
        alert("Please enter your name");
        return;
    }

    if(email === ""){
        alert("Please enter your email");
        return;
    }

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email");
        return;
    }

    if(message === ""){
        alert("Please enter your message");
        return;
    }

    document.getElementById("result").innerHTML = `
        <h3>✅ Form Submitted Successfully</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    document.getElementById("contactForm").reset();

});


// Dynamic To-Do List

function addTask(){

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button onclick="removeTask(this)">
            Delete
        </button>
    `;

    document
    .getElementById("taskList")
    .appendChild(li);

    input.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}