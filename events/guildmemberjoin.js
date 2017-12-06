exports.run = (client, message) => {
client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find('name', 'bots-and-spam');

  if (!channel) return;

  channel.send(`Welcome to the server, ${member}`);
})}