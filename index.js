
const fs = require ('fs');

const qrcode = require ('qrcode-terminal');

const {Client} = require('whatsapp-web.js');

const SESSION_FILE_PATH = "./session.js";

const country_code = "+34"
const number = "635999442"
const msg = "hello hell!";

let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {

sessisonData = require(SESSION_FILE_PATH);

}

const client = new Client({
session: sessionData,

});

client.initializa();

client.on('qr', qr => {

    qrcode.generate(qr, {small: true});
})

client.on('ready', () =>{

console.log('the client is ready');

let chatId = country_code + number + "@c.es";

client.sendMessage(chatId, msg)
                .then(response => {

                    if(response.id.fromMe){CSSCounterStyleRule.log('The message was sent');
                }
                })

})

client.on('authenticated', session => {
     sessionData = session;

     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), err => {

        if(error){
                console.log(err);

        }
     
    })

})

client.on('auth_failure', msg => {

console.error('There was an authentication failure', msg);


})

client.on('message', msg => {

if(msg.body === "hi") {

client.sendMessage(msg.from, "Hi how are things");


}



})