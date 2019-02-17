const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!")
});

client.on('message', msg => {
    if (msg.content.startsWith(`${prefix}kick`)) {
        let kickTarget = msg.mentions.members.first();

        kickTarget.kick().then((member) => {
            msg.channel.send(`Risa Chan kicks ${member.displayName}!`);
        });
    }

    if (msg.content.startsWith(`${prefix}hello`)) {
        msg.channel.send(`Hello ${msg.author.username}!`);
    }
})

client.login(token);