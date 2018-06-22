module.exports = async (bot) => {
    let channel = member.guild.channels.find('name', "⚡welcome-goodbye⚡");
        let useravatar = member.user.iconURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(useravatar)
            .setTitle(":information_source: | information")
            .addField(":bust_in_silhouette: | Name", member)
            .addField(":microphone2: | Has Left the server", member)
            .addField(":id: | User:", `**[${member.id}]*`)
            .addField("bye bye :sob: |", ' We will mis you')
            .addField("This server now has", `${member.guild.memberCount} members`)
            .addField("Name", `<@${member.id}>`, true)
            .setFooter(`**${member.guild.name}**`)
            .setTimestamp();

        channel.sendEmbed(embed)
}