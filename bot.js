const config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client({ disableEveryone: true });
const fs = require('fs');
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
bot.commands = new Discord.Collection();

const coins = require("./coins.json");

const load = async () => {
    const cmdFiles = await readdir("./commands/");

cmdFiles.forEach(file => {
     try {
        const f = require(`./commands/${file}`)
        if (file.split(".").slice(-1)[0] !== "js") return;
        // here it dont gonna work because if file dont end with js.
        bot.commands.set(f.conf.name, f)
    } catch (e) {
        console.error(`error in command`, e.stack)
    }
});
    
    const evtFiles = await readdir("./events/");
evtFiles.forEach(file => {
        if (file.split(".").slice(-1)[0] !== "js") return;
        const evtName = file.split(".")[0];
        const event = require(`./events/${file}`);
        bot.on(evtName, event.bind(bot));
        delete require.cache[require.resolve(`./events/${file}`)] 
    });
};




    // bot.on("guildMemberAdd", (member, message) => {
    //     let channel = member.guild.channels.find('name', "welcome-goodbye");
    //     let memberavatar = member.user.iconURL
    //     if (!channel) return;
    //     let embed = new Discord.RichEmbed()
    //         .setColor("RANDOM")
    //         .setThumbnail(memberavatar)
    //         .setTitle(":information_source: | information")
    //         .addField(`:bust_in_silhouette: | Name`, member)
    //         .addField(":microphone2: | Welocme to the server", member)
    //         .addField(":id: | User:", `**[${member.id}]*`)
    //         .addField("you are the member numer", `${member.guild.memberCount}`)
    //         .addField("Name", `<@${member.id}>, true`)
    //         .addField("Joined At", member.joinedAt)
    //         .setFooter(`**${member.guild.name}**`)
    //         .setTimestamp();

    //     channel.sendEmbed(embed)

    // });

    // bot.on("guildMemberRemove", (member, message) => {
    //     let channel = member.guild.channels.find('name', "welcome-goodbye");
    //     let useravatar = member.user.iconURL
    //     if (!channel) return;
    //     let embed = new Discord.RichEmbed()
    //         .setColor("RANDOM")
    //         .setThumbnail(useravatar)
    //         .setTitle(":information_source: | information")
    //         .addField(":bust_in_silhouette: | Name", member)
    //         .addField(":microphone2: | Has Left the server", member)
    //         .addField(":id: | User:", `**[${member.id}]*`)
    //         .addField("bye bye :sob: |", ' We will mis you')
    //         .addField("This server now has", `${member.guild.memberCount} members`)
    //         .addField("Name", `<@${member.id}>`, true)
    //         .setFooter(`**${member.guild.name}**`)
    //         .setTimestamp();

    //     channel.sendEmbed(embed)

    // });

    bot.on('ready', async () => {
        console.log('online motherfucker');
        console.log(bot.commands);
        bot.user.setActivity('UnDeadCraftOfficial | prefix "/"');
    });




    bot.on('message', (message) => {
        if (message.author.bot) { return; }
        if (message.channel.type === 'dm') {
            return;
        }

        let prefix = config.prefix;
        let messageArray = message.content.split(' ');
        let command = messageArray[0];
        let args = messageArray.slice(1);

        let cmd = bot.commands.get(command.slice(prefix.length));
        if (cmd) cmd.run(bot, message, args);

// +==============================================

        if (!coins[message.author.id]) {
            coins[message.author.id] = {
                coins: 0
            };
        }

        let coinAmt = Math.floor(Math.random() * 15) + 1;
        let baseAmt = Math.floor(Math.random() * 15) + 1;
        console.log(`${coinAmt} ; ${baseAmt}`);

        if (coinAmt === baseAmt) {
            coins[message.author.id] = {
                coins: coins[message.author.id].coins + coinAmt
            };
            fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                if (err) console.log(err)
            });
            let coinEmbed = new Discord.RichEmbed()
                .setAuthor(message.author.username)
                .setColor("#0000FF")
                .addField("💸", `${coinAmt} coins added!`);

            message.channel.send(coinEmbed).then(msg => { msg.delete(360000) });
        }
        
        //hello
        if (cmd === `${prefix}hello`) {
            return message.channel.send('Hey!');
        }
    });

 


bot.login(config.token);

load();