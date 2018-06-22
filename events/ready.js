const Discord = require("discord.js");

module.exports = async (bot) => {
        bot.commands = new Discord.Collection();

        console.log('online motherfucker');
        console.log(bot.commands);
        bot.user.setActivity('UnDeadCraftOfficial | prefix "/"');
}