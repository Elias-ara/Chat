// This file contains the JavaScript code for the chat application.

const nickname = localStorage.getItem("nickname");
console.log("username:", nickname);
if (!nickname) {
  // Se não estiver logado, volta para o login
  window.location.href = "../../Login/index.html";
}

const chatInput = document.getElementById("chat-input");
const chatDisplay = document.getElementById("chat-display");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.textContent = nickname + ": " + message;
    chatDisplay.appendChild(messageElement);
    chatInput.value = "";
    chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to the bottom
  }
}
