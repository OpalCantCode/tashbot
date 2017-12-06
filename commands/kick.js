exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find("name", "Staff");
  if (!modRole)
    return message.reply("The staff role does not exist");

  if (!message.member.roles.has(modRole.id))
    return message.reply("You're not allowed to touch that!");

  if (message.mentions.users.size === 0) {
    return message.reply("Hey! You didn't say who you wanted me to kick :triumph:");

    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.reply("");

    const kickMember = message.mentions.members.first();

    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`${member.user.username} is # finally gone! :grin:`);
    });
  }
};