const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    if (!coins[message.author.id]) {
        coins[message.author.id] = {
            coins: 0
        };
    }

    let uCoins = coins[message.author.id].coins;

    let coinEmbed = new Discord.RichEmbed()
        .setAuthor("Username", `${message.author.username}`)
        .setColor("RANDOM")
        .addField(":money_with_wings:", uCoins);
    message.channel.send(coinEmbed).then(message => { message.delete(5000) });
}

module.exports.conf = {
    name: "coins",
    description: "This is a coin system"
}