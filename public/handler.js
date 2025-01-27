const messageContainer = document.getElementById('message-container');

// | MESSAGE FORMAT |
/*
<div class="message">
   <h3>Guest#a3spl<span style="font-size: 12px; margin: 3px; font-weight: normal;">5:37pm</span></h3>
   <div class="message-text">
      <p>damn bro this chat app mid asf 😭🙏</p>
   </div>
</div>
*/

function createMessage(displayname,message,tstamp,prefix){
    let messageDiv = document.createElement('div');
    messageDiv.setAttribute('class','message');

    //holder div
    let nameHolder = document.createElement('h3');

    //prefix
    if (prefix !== undefined){
        let prefixElem = document.createElement('span');
        prefixElem.textContent = prefix.text;
        prefixElem.style = prefix.style;
        nameHolder.appendChild(prefixElem);
    }   

    //username
    let username = document.createElement('span');

    username.textContent = displayname;

    //timestamp
    let timestamp = document.createElement('span');

    timestamp.textContent = tstamp;
    timestamp.style = "font-size: 12px; margin: 3px; font-weight: normal;"

    username.appendChild(timestamp);
    //

    //message
    let content = document.createElement('div');
    content.setAttribute('class','message-text');

    let message_content = document.createElement('p');

    message_content.textContent = message;
    
    content.appendChild(message_content);
    //

    nameHolder.appendChild(username);

    messageDiv.appendChild(nameHolder);
    messageDiv.appendChild(content);

    messageContainer.appendChild(messageDiv);

    requestAnimationFrame(()=>{
        messageContainer.scrollTop = messageContainer.scrollHeight;
    })
}

function createSystemMessage(icon,message){
    let messageDiv = document.createElement('div');
    messageDiv.setAttribute('class','message');
    messageDiv.style = "display: flex; align-items: center;"

    let iconElem = document.createElement('img');
    iconElem.style = "height: 18px; width: 18px; fill: #B5BAC1;"
    iconElem.src = "images/" + icon;

    //message
    let content = document.createElement('div');
    content.setAttribute('class','message-text');

    let message_content = document.createElement('p');
    message_content.style = "color: #B5BAC1;"

    message_content.textContent = message;
    
    content.appendChild(message_content);
    //

    messageDiv.appendChild(iconElem);
    messageDiv.appendChild(content);

    messageContainer.appendChild(messageDiv);

    requestAnimationFrame(()=>{
        messageContainer.scrollTop = messageContainer.scrollHeight;
    })
}