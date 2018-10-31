exports.run = (client, message, args) => {
	message.channel.send({embed: {
	    color: 3447003,
        
        author: {
            name: message.author.username,
            icon_url: message.author.avatarURL
        },
        
        title: "Here is your character sheet",

        fields: [{
            name: "Main Info",
            value: `Health: ${client.charInfo.get(message.author.id, "health")}/${client.charInfo.get(message.author.id, "maxHealth")}\n` +
        `Stamina: ${client.charInfo.get(message.author.id, "stamina")}/${client.charInfo.get(message.author.id, "maxStamina")}\n` +
        `Weight: ${client.charInfo.get(message.author.id, "weight")}/${client.charInfo.get(message.author.id, "maxWeight")}\n`
          },
          {
            name: "Statistics",
            value: `__Strength | ${client.stats.get(message.author.id, "strength")}__\n` +
        `__Charisma | ${client.stats.get(message.author.id, "charisma")}__ \n` +
        `__Luck \t| ${client.stats.get(message.author.id, "luck")}__ \n` +
        `__Vitality | ${client.stats.get(message.author.id, "vitality")}__ \n`
          },
          {
            name: "Card",
            value: `Level: ${client.scoreCard.get(`${message.author.id}`, "Level")}\n` +
            `Experience : ${client.scoreCard.get(`${message.author.id}`, "Experience")}\n` +
            `\tGold: ${client.scoreCard.get(`${message.author.id}`, "Gold")}\n`
          }
        ],

	}});
}