exports.run = (client, message, args) => {
	
	if(client.scoreCard.has(`${message.author.id}`)) {
		message.channel.send("You already have a guild card! Do \`,card\` to see it.");
		return;
	};

	client.scoreCard.set(`${message.author.id}`, {
		user: message.author.username,
		guild: message.author.guild.name,
		level: 1,
		experience: 0,
		gold: Math.floor(Math.random() * 500) + 50
	});
	message.channel.send(`Welcome to the guild hall in ${message.guild.name}! Do \`,card\` To see your guild card!\n`);



};