exports.run = (client, message, args) => {
	
	client.charInfo.ensure(message.author.id, {
		maxHealth: 50 + (client.stats.get(message.author.id, "vitality") * 5),
		health: 50 + (client.stats.get(message.author.id, "vitality") * 5),
		maxStamina: 10 + (client.stats.get(message.author.id, "vitality") * 3),
		stamina: 10 + (client.stats.get(message.author.id, "vitality") * 3),
		maxWeight: client.stats.get(message.author.id, "strength") * 2,
		weight: 0
	});

	message.channel.send("Here you are: \n" +
		`\`\`\`` +
		`Health: ${client.charInfo.get(message.author.id, "health")}/${client.charInfo.get(message.author.id, "maxHealth")}\n` +
		`Stamina: ${client.charInfo.get(message.author.id, "stamina")}/${client.charInfo.get(message.author.id, "maxStamina")}\n` +
		`Weight: ${client.charInfo.get(message.author.id, "weight")}/${client.charInfo.get(message.author.id, "maxWeight")}\n` +
		`\`\`\``
	)

}