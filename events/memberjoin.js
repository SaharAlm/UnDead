module.exports = async (bot) => {

  let channel = member.guild.channels.find('name', "⚡welcome-goodbye⚡");
        let memberavatar = member.user.iconURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(memberavatar)
            .setTitle(":information_source: | information")
            .addField(`:bust_in_silhouette: | Name`, member)
            .addField(":microphone2: | Welocme to the server", member)
            .addField(":id: | User:", `**[${member.id}]*`)
            .addField("you are the member numer", `${member.guild.memberCount}`)
            .addField("Name", `<@${member.id}>, true`)
            .addField("Joined At", member.joinedAt)
            .setFooter(`**${member.guild.name}**`)
            .setTimestamp();

           channel.sendEmbed(embed)
}