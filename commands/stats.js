exports.run = (client, message, args) => {
	
	client.stats.ensure(message.author.id, {
		strength: Math.floor(Math.random() * 10) + 1,
		charisma: Math.floor(Math.random() * 10) + 1,
		luck: Math.floor(Math.random() * 10) + 1,
		vitality: Math.floor(Math.random() * 10) + 1
	});

	message.channel.send("Here you are:\n" +

		`\`\`\`` +
		`Strength | ${client.stats.get(message.author.id, "strength")}\n` +
		`Charisma | ${client.stats.get(message.author.id, "charisma")} \n` +
		`Luck \t| ${client.stats.get(message.author.id, "luck")} \n` +
		`Vitality | ${client.stats.get(message.author.id, "vitality")} \n` +
		`\`\`\``
	)

}