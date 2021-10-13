const prompt = require('prompt-sync')({ sigint: true });
let catchKeepers = 0;
let totalValue = 0;
let time = 6;
let primaryFishDescription = [Smelly, Stupid, Old, Young, Huge];
let secondaryFishDescription = [Red, Blue, Green, Yellow, Rainbow];
let terciaryFishDescription = [Bass, Trout, Snapper, Shark, Turtle];
let randomizer = [];
console.log();
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');
const ready = console.log(prompt('Pretty cold out today. And windy. Pretty clowdy, too. You can catch up to 10 lbs but I would not expect to catch much. Six hours from now (12:00 pm), we will be heading back to shore. Read[y] or [n]ot?'));
//Loop that ends when catchKeepers exceeds 10.
if (ready ==='y'){
    while ((catchKeepers < 10) && time < 12) {
        //Increments time by one hour
        time += 1;
        let blah = console.log(prompt('Time is now ' + time + '.' + 'You have caught [FIX FISH RANDOMIZER] ! Would you like to [k]eep it or [t]hrow it back?'));
}
} elseif (catchKeepers >= 10 || time >=12) {
    
}