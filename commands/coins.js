const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    //!coins
    if (!coins[message.author.id]) {
        coins[message.author.id] = {
            coins: 0
        };
    }

    let uCoins = coins[message.author.id].coins;


    let coinEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username, `${message.author.avatarURL}`)
        .setColor("#00FF00")
        .addField("💸", uCoins + " Coins in the bank");

    message.channel.send(coinEmbed)

}

module.exports.conf = {
    name: "bank"
}