const socket = io();

// actual socket stuff
socket.on('user-count',(amount)=>{
    document.getElementById('online-user-count').textContent = amount;
})

socket.on('admin-login',(data)=>{
    window.alert(data);
})

socket.on('broadcast-system-message',(data)=>{
    systemmsg = {
        icon: data.icon,
        message: data.message
    }

    createSystemMessage(systemmsg.icon,systemmsg.message);
})

socket.on('broadcast-message',(data)=>{

    content = {
        username: data.username,
        message: data.message,
        timestamp: data.timestamp,
        prefix: data.prefix
    }

    createMessage(content.username,content.message,content.timestamp,content.prefix)

})

socket.on('update-user-data',(userdata)=>{
    document.getElementById('settings-username').placeholder = userdata.username
})

//functions that send reqs via socket
function updateUsername(){
    if (document.getElementById('settings-username').value.trim() !== ""){
        socket.emit('update-username',document.getElementById('settings-username').value);
        document.getElementById('settings-username').value = "";
    }
}

function adminLogin(){
    if (document.getElementById('settings-admin-login').value.trim() !== ""){
        socket.emit('admin-login',{password:document.getElementById('settings-admin-login').value});
        document.getElementById('settings-admin-login').value = "";
    }
}

// input handling
const inputBox = document.getElementById('message-box')

window.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        // Check if input box is not empty (ignoring all whitespace)
        if (inputBox.value.trim() !== "") {

            let date = new Date;

            socket.emit('handle-message',{ // server will handle all da msgs, just send id msg timestamp. (this is all done to prevent sending id lol)
                message:inputBox.value,
                timestamp:date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }).toLowerCase().replace(' ', '')
            })
        }

        inputBox.value = "";
    }
});