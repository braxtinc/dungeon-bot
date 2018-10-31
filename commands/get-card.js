exports.run = (client, message, args) => {

	client.scoreCard.set(`${message.author.id}`, {
	
		Name : `${message.author.username}`,
	
		Level : 0,
	
		Experience : 0,
	
		Gold : Math.floor(Math.random()*500 + 50)
	
	});

};