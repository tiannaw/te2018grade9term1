const READLINE = require("readline-sync");

console.log(`*******************************************

	WELCOME TO THE PARENT BOT

********************************************`);

let hw = READLINE.question("Did you do your homework? yes/no: ");


if(hw == "yes" || hw == "yes") {
	console.log("You better have");

}
if( hw == "no" || hw == "n"){
	console.log("Wake up early and do your hw");
	console.log("make sure you have your hw completed before school");
   }
else {
	let talkback = READLINE.question("You've got to do well in school if you want to get ahead in life. Go do your hw! ");
	if(talkback == "whatever" || talkback == "I don't care") {
		console.log("Then you can't commit to your activities. Go finish that homework.");

	}

}

let science = READLINE.question("What is your science grade?");

if(science >=  90){
	console.log("I thought it would be a 99");
	let grade = READLINE.question("Are you failing science? yes/no: ");
	 if ( grade == "yes" || grade == "y"){
	 	console.log("you should get extra help");
	 	console.log("I will talk to the teacher");
	 }
}

let bath = READLINE.question("Did you take a shower? ");
if(bath == "no") {
	console.log("Go.");
}
else {
	console.log("Good.");
}

let food = READLINE.question("Did you eat when you got home? ");
if(food == "yes") {
	console.log("Good");
}
else {
	console.log("Eating well is really important to your health. Go have a healthy snack at least.");
}

console.log(`
**************************************************

`);
console.log("Thanks for using The Parent Bot. Good bye for now!");
console.log(`
**************************************************

`);