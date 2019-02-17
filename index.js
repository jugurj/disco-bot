const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!")
});

client.on('message', msg => {
    console.log(msg.content);
})

client.login(token);