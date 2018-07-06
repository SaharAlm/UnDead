const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.channel.send("**Our website** - https://bit.ly/2KHDuez");
}   

module.exports.conf = {
    name: "web",
    description: "The Website!"
}
