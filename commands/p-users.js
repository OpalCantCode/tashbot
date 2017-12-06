exports.run = (client, message, args) => {

guild.pruneMembers(12, true)
  .then(pruned => console.log(`That'll get rid of ${pruned} people! Do #pconfirm to continue! :grin:`))
  .catch(console.error)
};