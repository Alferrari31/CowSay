var cowsay = require("cowsay");
const {name, campus } = require("./information")
console.log(cowsay.say({
	text : `Hello I'm ${name}, from ${campus} campus`,
	e : "oO",
	T : "U "
}));
