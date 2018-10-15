exports.run = (client, message, args) => {

	let chance = Math.floor(Math.random()*100 + 1);

	if(chance < 5){
		console.log("Loot")
		Loot();
	} else if (chance < 50){
		console.log("Monster")
		Monster();
	} else {
		console.log("Nothing")
		Nothing();
	}

};

function Loot(client, message) {

}

function Monster(client, message) {

}

function Nothing(client, message) {

}

/*const Response{
	"Loot" : ["You've come across some gold, it's {gold} pieces","You managed to trip over a chest, there is {gold} inside the chest",
		"Woah, there is just {gold} laying on the ground, congrats"],
	"Monster" : ["Uh oh, you come across a goblin,","Oh no there's an orc!","Watch out, a walking skeleton,"],
	"Nothing" : ["A quite calm walk in the woods, nothing interesting happens.","You go out at night and manage to see an aurora.","You see an old man, he gives you life advice. You don't care enough to listen."]
}
*/
