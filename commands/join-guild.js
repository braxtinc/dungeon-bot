exports.run = (client, message, args) => {

	client.scoreCard.set(`${message.author.id}`, {
		guild: message.guild.name,
	});

	message.channel.send(`Welcome to the guild hall in ${message.guild.name}! Do \`,card\` To see your guild card!\n`);

};