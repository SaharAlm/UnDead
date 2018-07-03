module.exports.run = async (bot, message, args, con) => {


    let target = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
    
        con.query(`SELECT * FROM xp WHERE id + '${message.author.id}'`, function (err, rows) {
           if (err) throw err;

            if(!rows[0]) return message.channel.send("This user dont have XP on record.")

            let xp = rows[0].xp;
            message.channel.send(xp)
    });    
}

module.exports.conf = {
    name: "xp",
    description: "This is an xp system."
}