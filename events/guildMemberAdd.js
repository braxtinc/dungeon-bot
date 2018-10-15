module.exports = (client, member) => {
	console.log(`${member.displayName} (${member.id}) has joined the server ${member.guild}.`);
	member.send(`Welcome to the guild ${member}! Do be sure to have a good time and feel free to give feedback, positive or negative.\n\n ` +
		`Head on down to the bot channels and grab your guild card, as well feel free to find a party to play with`);

	client.user.stats.set(`${member.id}`, {
		strength: Math.floor(Math.random() * 10) + 1,
		charisma: Math.floor(Math.random() * 10) + 1,
		luck: Math.floor(Math.random() * 10) + 1,
		vitality: Math.floor(Math.random() * 10) + 1
	});

	member.send(`Here are your current stats, for now they're just for show and hopefully you got some good ones, eventually you will` +
		`be able to reroll them to get better stats, but it will cost gold (or money).\n` +
		`\`\`\`` +
		`strength: ${client.user.stats.get(member.id, "strength")}`+
		`Charisma: ${client.user.stats.get(member.id, "charisma")}`+
		`Luck: ${client.user.stats.get(member.id, "luck")}`+
		`Vitality: ${client.user.stats.get(member.id, "vitality")}`+
		`\`\`\`` +
		`If you need to know which stats do what, just ping \`@braxtin#3963\``);
};