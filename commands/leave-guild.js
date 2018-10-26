
exports.run = (client, message, args) => {
	if(client.scoreCard.has(`${message.author.id}`)) {
		message.channel.send("Testing");
		return;
	};
};
/*	if(client.scoreCard.has(`${message.author.id}`)) {
		message.channel.send("Are you sure you want to leave the guild? (yes/no)");
	} else {
		message.channel.send("You do not belong to this guild, do \`,join-guild\` if you want to join.");
		return;
	}

	let author = `${message.author.id}`;
	const collector = new Discord.MessageCollector(message.channel, message.author.id == author, {time: 30000})
	console.log (collector);
	collector.on('collect', message => {
		if (message.content == "yes"){
			message.channel.send("I guess I will revoke your card.");
			client.scoreCard.delete(`${message.author.id}`);
		} else {
			message.channel.send("Either you didn't say yes or you had second thoughts, run the command again if you still want to.")
		}
	});*/
