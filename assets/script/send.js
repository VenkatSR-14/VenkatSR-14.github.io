const form = document.getElementById("form");
const responseTextElement = document.getElementById("message-response");

function setResponseText(text, isError = false) {
    responseTextElement.innerText = text;
    responseTextElement.style.color = isError ? "red" : "green";
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    setResponseText("Please Wait, Sending message...");
    sendMessage();
});

function sendMessage() {
    const email = document.getElementById("Email").value.trim();
    const message = document.getElementById("Message").value.trim();

    // Validate inputs
    if (!email || !message) {
        return setResponseText("Please fill in both fields.", true);
    }

    const payload = {
        Name: "@PORTFOLIO",
        Email: email,
        Request: message
    };

    // Send POST request using Fetch API
    fetch('https://script.google.com/macros/s/AKfycbwcdSGSAsFxJgmD73ofxQkNCHBuMskCB-LR3xyOMoCInXgZ-7rR16Yv0FAYOu9BMpWijA/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload)
    })
        .then((response) => {
            if (response.ok) {
                return response.text(); // Read the plain text response
            } else {
                throw new Error("Failed to send message.");
            }
        })
        .then((text) => {
            setResponseText(text); // Display the response text
        })
        .catch((error) => {
            console.error("Error:", error);
            setResponseText("An error occurred. Please try again.", true);
        });
}
