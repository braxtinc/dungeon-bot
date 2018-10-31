module.exports = (client, member) => {
	console.log(`${member.displayName} (${member.id}) has joined the server ${member.guild}.`);
	member.send(``);


	client.stats.ensure(`${member.id}`, {
		strength: Math.floor(Math.random() * 10) + 1,
		charisma: Math.floor(Math.random() * 10) + 1,
		luck: Math.floor(Math.random() * 10) + 1,
		vitality: Math.floor(Math.random() * 10) + 1
	});
		
	client.charInfo.ensure(member.id, {
		health: 50 + (client.stats.get(member.id, "vitality") * 5),
		stamina: 10 + (client.stats.get(member.id, "vitality") * 3),
		weight: client.stats.get(member.id, "strength") * 2
	});

	client.scoreCard.ensure(`${member.id}`, {
		user: `${member.username}`,
		guild: "",
		level: 1,
		experience: 0,
		gold: Math.floor(Math.random() * 500) + 50
	});

	member.send(`Welcome to the guild ${member}! Do be sure to have a good time and feel free to give feedback, positive or negative.\n` +
		`Head on down to the bot channels and join the guild, it is not *needed*, however you will not be allowed to do any quests.\n\n` +

		`Here are your current stats, for now they're just for show and hopefully you got some good ones, eventually you will` +
		`be able to reroll them to get better stats, but it will cost gold (or money).\n` +
		`\`\`\`` +
		`strength: ${client.stats.get(member.id, "strength")}\n`+
		`Charisma: ${client.stats.get(member.id, "charisma")}\n`+
		`Luck: ${client.stats.get(member.id, "luck")}\n`+
		`Vitality: ${client.stats.get(member.id, "vitality")}`+
		`\`\`\`` +
		`If you need to know which stats do what, just ping \`@braxtin#3963\` or check the trello page.\n\n` +
		`Last but not least, here is your guild card.\n` + 
		`\`\`\`\n` +
		`Name : ${client.scoreCard.get(member.id, "user")} \n` +
		`Guild : ${client.scoreCard.get(member.id, "guild")} \n` +
		`Level : ${client.scoreCard.get(member.id, "level")} \t` +
		`Experience : ${client.scoreCard.get(member.id, "experience")} \n` +
		`Gold : ${client.scoreCard.get(member.id, "gold")} \n` +
		`\`\`\`` +
		`For now the Guild spot is empty, go to a guild that has this bot and do \`,join-guild\`, if you need to show off your card ` +
		`or check it, then run \`,card\``)

};