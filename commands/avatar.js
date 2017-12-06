exports.run = (client, message, [mention, ...reason]) => {
    message.channel.send({ embed: new Discord.RichEmbed().setImage(message.author.avatarURL) })};
