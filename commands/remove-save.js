exports.run = (client, message, args) => {

	if(message.author.id != client.config.ownerID) return;

	let cardTD = message.mentions.members.first();

	client.scoreCard.delete(`${cardTD.id}`);

	client.stats.delete(`${cardTD.id}`);

	message.channel.send(`Deleted ${cardTD}`)
};