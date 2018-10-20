function character(name){
this.name = name 
this.race; 
this.trait; 
this.nice; 
this.age;
this.home;
this.hobby;
this.info = getCharacter;
}
function getCharacter(){
return this.name + " " + this.race + " " + this.trait + " " + this.nice + " " + this.age + " " + this.home + this.hobby 
}
//hi

var sarah = new character("sarah")
sarah.race = 'ArgentinianaandPeruvian';
sarah.trait = 'sarcasm';
sarah.nice = false;
sarah.age = 14;
sarah.home = 'harlem';
sarah.hobby = 'swimming';


var wren = new character("wren")
wren.race = 'IrishandPurtorican';
wren.trait = 'silence';
wren.nice = true;
wren.age = 14;
wren.home = 'riverdale';
wren.hobby = unidentified

var dante = new character("dante")
dante.race = Mexican;
dante.trait = gentleman;
dante.nice = true;
dante.age = 16;
dante.home = acatlan;
dante.hobby = basketball

var pau = new character("pau")
pau.race = Mexican;
pau.trait = sassy;
pau.nice = false;
pau.age = 13;
pau.home = acatlan;
pau.hobby = gossip

var jh = new character("jh")
jh.race = Blackandpurtorican;
jh.trait = funny;
jh.nice = true;
jh.age = 14;
jh.home = midtownmannhatan;
jh.hobby = art



console.log(jh.info())
