const { Client, GatewayIntentBits, DiscordAPIError, userMention } = require("discord.js")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () =>{
    console.log("bot opérationnel");
});

client.login("MTAzNTA4MzA4NjAyODg4MTk4MA.G4bZn_.wfE06w8xyjXa1s8g4INw1lkUkyg9ZT12HWclmc")

client.on("messageCreate", message => {
    console.log(message)
    if(message.content === "/verify"){
        message.channel.send("Please Complete Verification To Get Access To Rest Of The Server!")
        
    }
});




