exports.run = (client, message, args) => {

switch(client.scoreCard.has(`${message.author.id}`)){
	case true:

		message.channel.send(`Here you are \\*hands card\\*:\n` + 

			`\`\`\`\n` +

			`Name : ${client.scoreCard.get(message.author.id, "user")} \n` +

			`Guild : ${client.scoreCard.get(message.author.id, "guild")} \n` +

			`Level : ${client.scoreCard.get(message.author.id, "level")} \t` +

			`Experience : ${client.scoreCard.get(message.author.id, "experience")} \n` +

			`Gold : ${client.scoreCard.get(message.author.id, "gold")} \n` +

			`\`\`\``

			);

	break;

	case false:

		message.channel.send("You do not have a guild card, something happened, rejoin the server..")

	break;
}

};