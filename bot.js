const express = require('express');
require('dotenv').config();
const colors = require("colors");

const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log('\x1b[36m%s\x1b[0m', `|    🔗 Listening to RTX : ${port}`));

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const { ActivityType } = require("discord.js");

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'SHIVA ',
            type: "PLAYING",
            url: "https://www.youtube.com/@winteryt2599"
        }
    });
});
client.on('message', message => {
  if(message.content == "hi") {
    message.channel.send("Hello!");
  } else if (message.content == "Dead") {
    message.channel.send("Thank God! Atleast You are Alive");
  }
});

client.login(process.env.token);
