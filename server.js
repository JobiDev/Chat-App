const config ={
    "admin-password": "freaky",
    "admin-prefix": { text:"[dev] ", style:"color:red;" }
}

const filter = [
    { regex: /^[a@][s\$][s\$]$/, category: "Profanity" },
    { regex: /[a@][s\$][s\$]h[o0][l1][e3][s\$]?/i, category: "Profanity" },
    { regex: /b[a@][s\$][t\+][a@]rd/i, category: "Profanity" },
    { regex: /b[e3][a@][s\$][t\+][i1][a@]?[l1]([i1][t\+]y)?/i, category: "Profanity" },
    { regex: /b[e3][a@][s\$][t\+][i1][l1][i1][t\+]y/i, category: "Profanity" },
    { regex: /b[e3][s\$][t\+][i1][a@][l1]([i1][t\+]y)?/i, category: "Profanity" },
    { regex: /b[i1][t\+]ch[s\$]?/i, category: "Profanity" },
    { regex: /b[i1][t\+]ch[e3]r[s\$]?/i, category: "Profanity" },
    { regex: /b[i1][t\+]ch[e3][s\$]/i, category: "Profanity" },
    { regex: /b[i1][t\+]ch[i1]ng?/i, category: "Profanity" },
    { regex: /b[l1][o0]wj[o0]b[s\$]?/i, category: "Profanity" },
    { regex: /c[l1][i1][t\+]/i, category: "Sexual Content" },
    { regex: /^(c|k|ck|q)[o0](c|k|ck|q)[s\$]?$/i, category: "Profanity" },
    { regex: /(c|k|ck|q)[o0](c|k|ck|q)[s\$]u/i, category: "Profanity" },
    { regex: /(c|k|ck|q)[o0](c|k|ck|q)[s\$]u(c|k|ck|q)[e3]d/i, category: "Profanity" },
    { regex: /(c|k|ck|q)[o0](c|k|ck|q)[s\$]u(c|k|ck|q)[e3]r/i, category: "Profanity" },
    { regex: /(c|k|ck|q)[o0](c|k|ck|q)[s\$]u(c|k|ck|q)[i1]ng/i, category: "Profanity" },
    { regex: /(c|k|ck|q)[o0](c|k|ck|q)[s\$]u(c|k|ck|q)[s\$]/i, category: "Profanity" },
    { regex: /^cum[s\$]?$/i, category: "Sexual Content" },
    { regex: /cumm??[e3]r/i, category: "Sexual Content" },
    { regex: /cumm?[i1]ngcock/i, category: "Sexual Content" },
    { regex: /(c|k|ck|q)um[s\$]h[o0][t\+]/i, category: "Sexual Content" },
    { regex: /(c|k|ck|q)un[i1][l1][i1]ngu[s\$]/i, category: "Sexual Content" },
    { regex: /(c|k|ck|q)un[i1][l1][l1][i1]ngu[s\$]/i, category: "Sexual Content" },
    { regex: /(c|k|ck|q)unn[i1][l1][i1]ngu[s\$]/i, category: "Sexual Content" },
    { regex: /(c|k|ck|q)un[t\+][s\$]?/i, category: "Profanity" },
    { regex: /(c|k|ck|q)un[t\+][l1][i1](c|k|ck|q)/i, category: "Profanity" },
    { regex: /(c|k|ck|q)un[t\+][l1][i1](c|k|ck|q)[e3]r/i, category: "Profanity" },
    { regex: /(c|k|ck|q)un[t\+][l1][i1](c|k|ck|q)[i1]ng/i, category: "Profanity" },
    { regex: /cyb[e3]r(ph|f)u(c|k|ck|q)/i, category: "Profanity" },
    { regex: /d[a@]mn/i, category: "Profanity" },
    { regex: /d[i1]ck/i, category: "Profanity" },
    { regex: /d[i1][l1]d[o0]/i, category: "Sexual Content" },
    { regex: /d[i1][l1]d[o0][s\$]/i, category: "Sexual Content" },
    { regex: /d[i1]n(c|k|ck|q)/i, category: "Profanity" },
    { regex: /d[i1]n(c|k|ck|q)[s\$]/i, category: "Profanity" },
    { regex: /[e3]j[a@]cu[l1]/i, category: "Sexual Content" },
    { regex: /(ph|f)[a@]g[s\$]?/i, category: "LGBTQ" },
    { regex: /(ph|f)[a@]gg[i1]ng/i, category: "LGBTQ" },
    { regex: /(ph|f)[a@]gg?[o0][t\+][s\$]?/i, category: "LGBTQ" },
    { regex: /(ph|f)[a@]gg[s\$]/i, category: "LGBTQ" },
    { regex: /(ph|f)[e3][l1][l1]?[a@][t\+][i1][o0]/i, category: "Sexual Content" },
    { regex: /(ph|f)u(c|k|ck|q)/i, category: "Profanity" },
    { regex: /(ph|f)u(c|k|ck|q)[s\$]?/i, category: "Profanity" },
    { regex: /g[a@]ngb[a@]ng[s\$]?/i, category: "Sexual Content" },
    { regex: /g[a@]ngb[a@]ng[e3]d/i, category: "Sexual Content" },
    { regex: /g[a@]y/i, category: "LGBTQ" },
    { regex: /h[o0]m?m[o0]/i, category: "LGBTQ" },
    { regex: /h[o0]rny/i, category: "Sexual Content" },
    { regex: /j[a@](c|k|ck|q)\-?[o0](ph|f)(ph|f)?/i, category: "Sexual Content" },
    { regex: /j[e3]rk\-?[o0](ph|f)(ph|f)?/i, category: "Sexual Content" },
    { regex: /j[i1][s\$z][s\$z]?m?/i, category: "Sexual Content" },
    { regex: /[ck][o0]ndum[s\$]?/i, category: "Sexual Content" },
    { regex: /mast(e|ur)b(8|ait|ate)/i, category: "Sexual Content" },
    { regex: /n+[i1]+[gq]+[e3]*r+[s\$]*/i, category: "Race/Ethnicity" },
    { regex: /[o0]rg[a@][s\$][i1]m[s\$]?/i, category: "Sexual Content" },
    { regex: /[o0]rg[a@][s\$]m[s\$]?/i, category: "Sexual Content" },
    { regex: /p[e3]nn?[i1][s\$]/i, category: "Sexual Content" },
    { regex: /p[i1][s\$][s\$]/i, category: "Profanity" },
    { regex: /p[i1][s\$][s\$][o0](ph|f)(ph|f)/i, category: "Profanity" },
    { regex: /p[o0]rn/i, category: "Sexual Content" },
    { regex: /p[o0]rn[o0][s\$]?/i, category: "Sexual Content" },
    { regex: /p[o0]rn[o0]gr[a@]phy/i, category: "Sexual Content" },
    { regex: /pr[i1]ck/i, category: "Profanity" },
];

let admins = []; //List of ids who are admins
let users = {}; //List of every user currently on the site

const port = 8000;

const express = require('express');
const app = express();

const http = require('http')
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

const path = require('path');

const publicDir = path.join(__dirname,'/public');

io.on('connection',(socket)=>{
    
    // handle connect and disconnect

    users[socket.id] = {
        username: `Unnamed#${Math.round(Math.random()*10000)}`,
        isadmin: false
    };

    io.emit('user-count',io.engine.clientsCount);
    io.emit('broadcast-system-message',{ icon:"person.svg", message:`${users[socket.id].username} Has joined.` });
    socket.emit('update-user-data',users[socket.id]);

    socket.on('disconnect', () => {

        io.emit('broadcast-system-message',{ icon:"person.svg", message:`${users[socket.id].username} Has left.` });

        // pretty much just update all of the values and clear other ones.

        io.emit('user-count',io.engine.clientsCount) // Update user count

        if (admins.includes(socket.id)) { // remove admin from a user once they've left
            admins = admins.filter(id => id !== socket.id);
        }
        try{ // delete the user data of the socket.id (The user)
            delete users[socket.id];
        } catch(err){
            console.error(err)
        }
    });
    // handle connect and disconnect

    socket.on('admin-login',(data)=>{ // handle making a user admin 

        let password; //define at larger scope

        try{
            password = data.password;
        } catch(err){
            console.log(`${socket.id} tried logging into admin console but didn't put a password in!`)
        }

        if (password == config['admin-password']){
            
            if (!(admins.includes(socket.id))){
                socket.emit('admin-login','Successfully logged into admin');
                admins.push(socket.id)
                users[socket.id].isadmin = true;
            }

        } else{
            socket.emit('admin-login','Failed to log in.');
        }

    })

    socket.on('update-username',(username)=>{
        io.emit('broadcast-system-message',{ icon:"edit.svg", message:`${users[socket.id].username}'s new nickname is '${username}'` })
        users[socket.id].username = username.substring(0,16);
        socket.emit('update-user-data',users[socket.id]);
    })

    socket.on('handle-message',(data)=>{
        
        let content;

        try{
            content = {
                id: socket.id,
                message: data.message,
                timestamp: data.timestamp
            }
            content.message = content.message.substring(0,200)
        } catch(err){
            console.error(err)
        }

        let displayname = users[content.id].username;
        
        if (users[content.id].isadmin){
            io.emit('broadcast-message',{ message:content.message, username:displayname, timestamp:data.timestamp, prefix:config['admin-prefix'] });
            return
        }

        filter.forEach((word) => {
            if (word.regex.test(content.message)) {
                content.message = content.message.replace(word.regex, `[filtered]`);
            }
        });        
        
        io.emit('broadcast-message',{ message:content.message, username:displayname, timestamp:data.timestamp });

    })
})

app.use(express.static(publicDir))

app.use('/',(req,res)=>{
    res.sendFile(path.join(publicDir,"chat.html"))
})

server.listen(port, '0.0.0.0', ()=>{
    console.log("Listening on:")
    console.log(`    http://localhost:${port}`)
})