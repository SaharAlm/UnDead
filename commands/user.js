const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription("UnDead official Bot!")
    .setColor("#00ccff")
    .setThumbnail(message.author.avatarURL)
    .addField("Joined At", message.guild.joinedAt)
    .addField("Created At", message.guild.createdAt)
    .setFooter(message.guild.name, "Hope you have fun!")
    .setTimestamp()


    message.channel.send(embed);
}

module.exports.conf = {
    name: "user",
    description: "This is a UnDeadCraft official bot "
}