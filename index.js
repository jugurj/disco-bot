const Discord = require('discord.js');
const { prefixes, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!")
});

function isValidPrefix(msg, command) {
    for (var index in prefixes) {
        if (msg.content.startsWith(prefixes[index] + command)) return true;
    } return false;
}

function responseMessage(responseType, targetMember) {
    return `Hello ${targetMember}!`
}

client.on('message', msg => {
    if (isValidPrefix(msg, "kick")) {
        let kickTarget = msg.mentions.members.first();

        kickTarget.kick().then((member) => {
            msg.channel.send(`Risa Chan kicks ${member.displayName}!`);
        });
    }

    if (isValidPrefix(msg, "hello")) {
        msg.channel.send(responseMessage("greeting", msg.author.username));
    }
})

client.login(token);