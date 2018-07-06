
const Discord = require('discord.js');

module.exports.run = async (bot, message, args, err) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatrURL)
    .setColor("RANDOM")
    .addField("/ip", 'This is ip command!')
    .addField("/web", 'To get the website link!')
    .addField("/bank", 'To see how much coins you have in the bank')
    .addField("/user", 'This is the user info');
     message.channel.send(embed);
    
}

module.exports.conf = {
    name: "help",
    description: "this is shitty help coommand!"

}
