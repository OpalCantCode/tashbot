exports.run = (client, message, args) => {

guild.pruneMembers(12)
  .then(pruned => console.log(`I just pruned ${pruned} people!`))
  .catch(console.error);

  if (!message.member.roles.has(modRole.id))
    return message.reply("You're not allowed to touch that!")}