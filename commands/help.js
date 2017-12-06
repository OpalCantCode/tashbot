exports.run = (client, message, args) => {
const embed = new Discord.RichEmbed()
  .setTitle("**HELP**")
  .setAuthor("")
  .setColor(0x10.00AE86)
  .setDescription("")
  .setFooter("")
  .setImage("")
  .setThumbnail("")
  .setTimestamp()
  .setURL("")
  .addField("")
  .addBlankField(true)
  .addField("boo", true);

  message.channel.send({embed})
};