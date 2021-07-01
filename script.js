const PORT = process.env.PORT || 5000;
const socket = io(`http://localhost:${PORT}`);

socket.on('chat-message', data => {
    console.log(data);
})