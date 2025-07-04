const socket = io();
const editor = document.getElementById("editor");

// Emit changes as the user types
editor.addEventListener("input", () => {
  const content = editor.value;
  socket.emit("document change", content);
});

// Receive changes from server
socket.on("document change", (data) => {
  // Avoid self-triggering loop
  if (editor.value !== data) {
    editor.value = data;
  }
});
