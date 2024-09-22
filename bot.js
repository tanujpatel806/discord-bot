mkdir discord-bot
cd discord-bot
npm init -y
npm install discord.js dotenv
DISCORD_TOKEN = 'MTI4NzQ1NTk5NjE1OTE5NzMwNw.GMl82r.WYji_1N8adDeKo5RvsavmG6sBF59LCL1hSzxqY'
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login
