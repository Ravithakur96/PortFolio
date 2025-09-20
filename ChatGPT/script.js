document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput !== "") {
        addMessage("user", userInput);
        document.getElementById("user-input").value = ""; // Clear input field
        showTypingIndicator(true);
        setTimeout(() => {
            const aiResponse = generateResponse(userInput);
            addMessage("ai", aiResponse);
            showTypingIndicator(false);
        }, 1500); // Simulate AI response delay
    }
});

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("send-btn").click();
    }
});

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("chat-box").innerHTML = ""; // Clear the chat box
    document.getElementById("user-input").value = ""; // Clear input field
});

function addMessage(sender, text) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("ai-message");
    }

    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

function generateResponse(input) {
    // Simulate AI response with random selection of predefined responses
    const responses = [
        "Hello there! How can I assist you today?",
        "I'm here to help, just ask away!",
        "Could you clarify what you mean by that?",
        "That sounds interesting. Tell me more!",
        "Let me think about that for a moment..."
    ];

    // Return a random response from the list
    return responses[Math.floor(Math.random() * responses.length)];
}

function showTypingIndicator(show) {
    const typingIndicator = document.getElementById("typing-indicator");
    if (show) {
        typingIndicator.style.display = "block";
    } else {
        typingIndicator.style.display = "none";
    }
}
