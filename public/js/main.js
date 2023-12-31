const socket = io();
const chatForm = document.getElementById('chat-form');

//Get user and room info from URL
const {room} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

const username = window.localStorage.getItem("id");


//Join a Chatroom
socket.emit('joinRoom', { username, room});


//Listen for the event and Get the room and users from server
socket.on('roomUsers', (({room, users}) => {
    //Updating the room name on the sidebar
    document.querySelector('#room-name').textContent = room;

    //Updating the users list on the sidebar
    const usersList = document.querySelector('#users');
    usersList.innerHTML = users.map(user => `<li><i class="fas fa-user"></i>Crowser-${user.username.substring(0,8)}</li>`).join('');
}));

//Getting the message from the back-end
socket.on('message', message => {
    console.log(message);
    outputMessages(message);
});

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = e.target.elements.msg;

    //Send message to server
    socket.emit('chatMessage', msg.value);
    msg.value = '';
    msg.focus();
});

function outputMessages (msg) {
    const messageContainer = document.querySelector('.chat-messages');

    var html = '';
    html += '<div class="message">';
    html += '<p class="meta">' + msg.username + ' <span>' + msg.time +'</span></p>';
    html += '<p class="text">' + msg.text +'</p>';
    html += '</div>';

    messageContainer.insertAdjacentHTML('beforeend', html);

    document.querySelector('.message:last-child').scrollIntoView({
        behavior: 'smooth'
    });
}

//arnav1