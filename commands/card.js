exports.run = (client, message, args) => {
	message.channel.send(`Here you are \\*hands card\\*:\n` + 
		`\`\`\`\n` +
		`Name : ${client.scoreCard.get(message.author.id, "user")} \n` +
		`Guild : ${client.scoreCard.get(message.author.id, "guild")} \n` +
		`Level : ${client.scoreCard.get(message.author.id, "level")} \t` +
		`Experience : ${client.scoreCard.get(message.author.id, "experience")} \n` +
		`Gold : ${client.scoreCard.get(message.author.id, "gold")} \n` +
		`\`\`\``
		);
};