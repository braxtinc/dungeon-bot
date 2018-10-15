exports.run = (client, message, args) => {
	message.channel.send(`Here you are \\*hands card\\*:\n` + 
		`\`\`\`\n` +
		`Name : ${client.user.scoreCard.get(message.author.id, "user")} \n` +
		`Guild : ${client.user.scoreCard.get(message.author.id, "guild")} \n` +
		`Level : ${client.user.scoreCard.get(message.author.id, "level")} \t` +
		`Experience : ${client.user.scoreCard.get(message.author.id, "experience")} \n` +
		`Gold : ${client.user.scoreCard.get(message.author.id, "gold")} \n` +
		`\`\`\``
		);
};