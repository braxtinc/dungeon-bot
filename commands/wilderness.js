exports.run = (client, message, args) => {
	var chance = Math.floor(Math.random()*100 + 1);

	switch(true){
		case (chance <= 70):
			message.channel.send("You seemed to have found nothing, try again and hopefully your luck will add up.")
			break;
		case (chance > 70):
			
			var chance = Math.floor(Math.random()*10 + 1)

			message.channel.send(`You found ${chance} gold! It's not much but you're only in the woods.`)
			
			client.scoreCard.math(message.author.id, "+", chance, "Gold")

			break;
		default:

			break;
	}

};