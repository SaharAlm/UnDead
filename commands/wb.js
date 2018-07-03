const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.channel.send("http://undeadnetwork.my-free.website/minecraft")
}   

module.exports.conf = {
    name: "wb",
    description: "The Website!"
}