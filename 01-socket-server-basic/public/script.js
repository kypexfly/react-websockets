const socket = io("http://localhost:3000");

const form = document.querySelector("#form");
const listMessage = document.querySelector("#list-message");
const inputMessage = document.querySelector("#input-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newMessage = inputMessage.value;
  socket.emit("message-to-server", {
    message: newMessage,
  });
});

socket.on("message-to-client", (data) => {
  listMessage.innerHTML += `<li>${data.message}</li>`;
});
