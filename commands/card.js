exports.run = (client, message, args) => {

	if(client.scoreCard.has(message.author.id)){

		message.channel.send(
			"Here you are: \n" +
			`\`\`\`\n` +
			`Name: ${client.scoreCard.get(`${message.author.id}`, "Name")}\n` +
			`Level: ${client.scoreCard.get(`${message.author.id}`, "Level")}\t` +
			`Experience : ${client.scoreCard.get(`${message.author.id}`, "Experience")}\n` +
			`\tGold: ${client.scoreCard.get(`${message.author.id}`, "Gold")}\n\`\`\``
		);

	} else {
		message.channel.send("You seem to not have a card, run \`,get-card\` to get one.");
	}
	
};