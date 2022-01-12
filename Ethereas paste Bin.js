bot.on(async => {
console.log(`

 /$$$$$$$$                                      /$$   /$$ /$$   /$$
|__  $$__/                                     | $$$ | $$| $$$ | $$
   | $$  /$$$$$$   /$$$$$$  /$$$$$$/$$$$       | $$$$| $$| $$$$| $$
   | $$ /$$__  $$ |____  $$| $$_  $$_  $$      | $$ $$ $$| $$ $$ $$
   | $$| $$$$$$$$  /$$$$$$$| $$ \  $$ \  $$      | $$  $$$$| $$  $$$$
   | $$| $$_____/ /$$__  $$| $$ | $$ | $$      | $$\  $$$$|  $$\  $$$
   | $$|  $$$$$$$|  $$$$$$$| $$ | $$ | $$      | $$ \  $$$|  $$ \  $$
   |__/ \_______/ \_______/|__/ |__/ |__/        |__/  \ __/|__/  \__/                                                                                                                            
 `)

// Once the bot is fully online it displays a Team NN in acii art to the console


------------------------------------------------------------------------------------------------------------



bot.on('message', msg => {
        var regex = "^([a-zA-Z0-9_]{3,16}) wants to teleport to you\.$";
        var found = msg.toString().match(regex);

        if (found != null) {
            var uuid =  bot.players[found[1]].uuid;
            if (whiteList.includes(uuid)) {
                bot.chat("/tpy " + found[1])
                console.log(found[1] + " Has TPed to me!")
            }else{
		bot.chat(found[1] + "Ur not a NN so politly go away!")
			}
        }
 });

//updated tp so the bot logs into the console the name of people who tp to it

------------------------------------------------------------------------------------------------------------

}else if (command == "start_antiafk") {
    bot.setControlState('jump', true)
    bot.setControlState('sneak', true)
    for (int i = 0; i < 5;  i++) {
    	bot setControlState('foward', true)
    }
    
    
 // updated anti afk start command which adds walking to the anti afk-ing
 
 ------------------------------------------------------------------------------------------------------------

bot.on("login", async => {
    console.log("Minecraft bot logged in");
    bot.setControlState('jump', true);
    	for (int i = 0; i < 7;  i++) {
    		bot setControlState('foward', true);
    	}
})

// added more things to the start up like walking  


 ------------------------------------------------------------------------------------------------------------

} else if (command  == "echo") {
    let toSend = args.join(" ")
    if (!toSend) return msg.reply("Specify a message to echo")
	bot.chat(msg.author.tag + " >> " + toSend)	
    const success = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: ${msg.author.tag} sent \`${toSend}\``)
        .setColor(color)
    msg.channel.send(success)
    
// updated the echo command, added a autor  tag to the in game chat, example: "Ethereas >> Team NN On Top"

 ------------------------------------------------------------------------------------------------------------
//______________
//Spamer variables
var Spam = 0;
var D = 1;  
//_______________
	
	

//spammer lists-
const Spammer = [
    "filler",
    "yes",
    "filler1"
];
const Spammer2 = [
  "1test",
  "2test",
  "3test"
];
//-------------
	
//-------------
//Spammer ----
//-------------

}else if (command == "Start_Spammer") {
	if (Spam > 0){
		const sON = new Discord.MessageEmbed()
    	.setDescription(`:x: IDIOT SPAMMER IS ON ALLREADY`)
    	.setColor(color)
    msg.channel.send(sOn)
	}else{
        var X = Spammer2;
		Spam++
		const spami = new Discord.MessageEmbed()
    	.setDescription(`:white_check_mark: Time To Spam!`)
    	.setColor(color)
    msg.channel.send(spami)
	}
}else if (command == "Start_Spammer2") {
    if (Spam > 0){
        const sON = new Discord.MessageEmbed()
        .setDescription(`:x: IDIOT SPAMMER IS ON ALLREADY`)
        .setColor(color)
    msg.channel.send(sOn)
    }else{
        var X = Spammer;
        Spam++
        const spami = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Time To Spam!`)
        .setColor(color)
    msg.channel.send(spami)
    }
}else if (command == "Stop_Spammer")
	if (Spam <= 0){
		const sOFF = new Discord.MessageEmbed()
    	.setDescription(`:x: Spammer isnt even on bro`)
    	.setColor(color)
    msg.channel.send(sOFF)
	}else{
		Spam--
		const antismap = new Discord.MessageEmbed()
		.setDescription(`:white_check_mark: ok no more spam :(`)
		.setColor(color)
	msg.channel.send(antismap)
	}
})

if(Spam > 0){
    Loop();
}
function Loop() {       
  setTimeout(function() {  
    const random = Math.floor(Math.random() * X.length);
    bot.chat(X[random]);
    D++;          
    if (D < 10) {    
      Loop();        
    }                       
  }, 300);
}

---------------------------------------------------------------------------------------------------------------------------------------------------------------
// full untested Ethereas bot v2
	
	
const { version } = require("os")

const Discord = require('discord.js');              //sets requirements being discord and mineflayer, discord for the exterior chat aspect and mineflayer for the in game.
const mineflayer = require("mineflayer");
const client = new Discord.Client();
const color = "#RANDOM"
var delayInMilliseconds = 600

//______________________________________            // just some variables will be used later.
//Spamer variables
var Spam = 0;
var D = 1;  
//_____________________________________


let prefix = "!"                                    // sets the prefix so the exterior bot knows when its being talked to
let bot = mineflayer.createBot({                    // this next bit just difffines the game version so the bot knows what it should start with 
    version: "1.12.2",
    host: "shield.0b0t.org",                        // then it also tells the bot what server it should be connecting to and with what account username and password
    username: "ngoff0204@gmail.com",
    password: "TeamNNonTop1!"
})


var bot1 = mineflayer.createBot(bot);

bindEvents(bot1);


var whiteList = [                                   // the whitelist for the automatic tp function, its a list of user UUIDs
	"dc596807-4124-4946-a15c-57172943feff", 
	"6e5e01ef-5dd3-4253-a7e0-8b4376855ada", 
	"7c42a18c-659f-4f49-876e-5c065e50b86d",          
	"24c02626-2b9f-410a-9ec8-314de15fd80f", 
	"62576e5a-e291-4073-9646-208c3af79509",       
	"a3febb7c-3d1b-47d9-8eb0-1469c171cf06", 	
	"a118f3db-b5fd-461b-a1ae-db6e3decb926",
	"1e30fa10-2dbd-49e5-a39d-6ad316e584d1", 	
	"8b40b75a-ff5f-4948-9201-a91c55cce54f", 
	"968bec49-fefb-46c7-98d0-964f4461a6cd", 
	"352b823c-b41b-422e-aadd-4e8f2593cfb3",        
	"2f8becb8-decd-4c80-acbf-3d3dd2830ae0",	
	"82d5e11c-8892-4013-92bf-c04756128997",
	"b6020cd0-3089-4ffd-9533-82f18a0d2096",    
	"bedb911b-7e84-4034-baf5-885687aff4f8",        
	"8544954e-f40e-448d-8382-1e22f8423c42", 		
	"2fa7144b-910c-48a2-a1a5-a76eb6765e3a", 
	"9e419608-57d0-40bf-a1e2-9706adccde4e", 
	"1c3c4c67-92ca-4582-a425-9ffabc1bc36d", 
	"bd4b5b2e-ec6b-441f-b740-01ac7887c173", 
	"9f893cf5-c35a-4328-bfad-0fe0ce4315bf", 									
];

//spammer lists___________                          // these two lists are the source of the spammer(promo)
const Spammer = [
   "Sub To Ethereas",
   "Sub to PixelatedBrayden",
   "Sub to 06d",
   "Ethereas on top",
   "LordOniox on top",
   "06dware ca is too fast for anyone",
   "DM 06d for 06dware (its worth it)",
   "plz 0bOp unban all those who have been banned",
   "thunderC*** hehehehe",
   "oh you hate thundercloud? so does Team NN",
   "freelees is sus!",
   "Pixel is funny monkey",
   "Pixella is interesting",
   "Man where are all the kind and polite ladies at?",
   "What do you mean illegal items arnt allowed on an anarchy server?",
   "boj is a silly man",
   "COPE",
   "Dumb monkey moment",
   "0bOp needs more therapy!",
   "add this message to the bot spammer! -Pixie",
   "tomboys are underrated",
   "sub to lifeofcookie",
   "french people are not my favorite"


];
const Spammer2 = [                                  // (team NN)
    "Team NN Is the Best",
    "Team NN on top",
    "Team NN Owns me and all",
    "Team NN to andromeda ",
    "NNs on top",
    "Imps stay scared",
    "NN own 0b0t(not rlly Op does)",
    "oh ur not in team NN? go away",
    "join team NN so you can get some wonderful women",
    "Join Team NN for the price of 5 dollors (or ur cords)",
    "NN PvPers are unmatched",
    "How does it feel to know u cant join team NN?"

];
//------------------------

function bindEvents(bot1) {

    
    client.on("ready", async => {
    console.log("Discord Bot online")
})                                                  // this logs the console "Discord Bot Online!" once the discord bot has been turned on and the connection established

bot.on("login", async => {
    console.log("Minecraft bot logged in")          // same as the discord but for the in game bot, it also sets the bot to start jumping and sneaking in game, like and automated bot / anti afk
    bot.setControlState('jump', true)
  	bot.setControlState('sneak', true)
    	for (int i = 0; i < 5;  i++) {
    		bot setControlState('foward', true)
    	}
    
})

bot.on(async => {
console.log(`
 /$$$$$$$$                                      /$$   /$$ /$$   /$$
|__  $$__/                                     | $$$ | $$| $$$ | $$
   | $$  /$$$$$$   /$$$$$$  /$$$$$$/$$$$       | $$$$| $$| $$$$| $$
   | $$ /$$__  $$ |____  $$| $$_  $$_  $$      | $$ $$ $$| $$ $$ $$
   | $$| $$$$$$$$  /$$$$$$$| $$ \  $$ \  $$      | $$  $$$$| $$  $$$$
   | $$| $$_____/ /$$__  $$| $$ | $$ | $$      | $$\  $$$$|  $$\  $$$
   | $$|  $$$$$$$|  $$$$$$$| $$ | $$ | $$      | $$ \  $$$|  $$ \  $$
   |__/ \_______/ \_______/|__/ |__/ |__/        |__/  \ __/|__/  \__/                                                                                                                            
 `)}                                                                            // the final log to the console, serves no purpose other then it looks nice and is ment to signel the bot is fully operational. 

bot.on("message", message => {
    let channel = client.channels.cache.get("806897213052682260")               //tells the bridge aspect of the bot exactly what channel it should be sening the in game messages 
    if (!channel) return;
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message}`)                                                     // sends the game chat into the chat logs 
})

bot.on('message', msg => {
        var regex = "^([a-zA-Z0-9_]{3,16}) wants to teleport to you\.$";        // takes the normal tp request that will apear in game chat (example "John Doe wants to teleport to you"
        var found = msg.toString().match(regex);

        if (found != null) {
            var uuid =  bot.players[found[1]].uuid;                             //the next few parts are the bot checking if the person who wants to tp to the bot is on the whitelist
            if (whiteList.includes(uuid)) {
                bot.chat("/tpy " + found[1])                                    // once the bot has decided if the person is on the whitelist it will accept their tp request
                console.log(found[1] + " Has TPed to me!")
            }else{
		bot.chat(found[1] + "Ur not a NN so F*ck OFF!")                         // if the bot has determened you are not on the whitelist it will say in game "John Doe Ur not a NN so F*ck off"
			}
        }
 });


client.on("message", async msg => {                                         // this bit is the complex way of the bot sensing that its being talked to with the prefix then takeing the command and removing the prefix and making it all lowercase
    if (!msg.content.startsWith(prefix)) return
    let args = msg.content.split(" ").slice(1)
    args = msg.content.slice(prefix.length).split(/ +/);
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    command = args.shift().toLowerCase();
if (command == "help") {                                                    // The first three commands are just help commands devided into three first one is just the help of help commands, the second is about commands that work in the chat and the third is for movment commands
    const help = new D.MessageEmbed()
    .setTitle(`Help`)
    .setColor(color)
    .addField(`${prefix}help_movement`, 'Help For Movement')
    .addField(`${prefix}help_consol_log`, 'Shows the consoles log(WIP)')
    .addFeild(`${prefix}help_nn`, 'Help with common discord commands')
    .setColor(color)
msg.channel.send(help)

} else if (command == "help_nn") {
    const help = new Discord.MessageEmbed()
        .setTitle(`Help NN Bot`)
        .setColor(color)
        .addField(`${prefix}help_nn `, 'Giving this messages')
        .addField(`${prefix}echo`, 'Make the bot to say anything you want ')
        .addField(`${prefix}start_spammer`, 'Turns on the promotional spammer')
        .addField(`${prefix}start_spammer2`, 'Turns on the Team NN spammer')
        .addField(`${prefix}stop_spammer`, 'Turns off any of the spammers')
        .addField(`${prefix}start_antiafk`, 'Turns on Anti-afk')
        .addfeild(`${prefix}set_spam_time_`, 'add a number at the end to Specify how many hours the bot should run spam for (1-6)')
        .setColor(color)
    msg.channel.send(help)
} else if (command == "help_movement") {
    const Phelp = new Discord.MessageEmbed()
        .setTitle(`Help NN_Bot Movement`)
        .setColor(color)
        .addField(`${prefix}forward `, 'Make The Bot Move Forward ')
        .addField(`${prefix}backward`, 'Make The Bot Move Backward`')
        .addField(`${prefix}left`, 'Make The Bot Move Left')
        .addField(`${prefix}right`, 'Make The Bot Move Right')
        .addField(`${prefix}stop`, 'Make The Bot Stop Moving')
        .setColor(color)
    msg.channel.send(Phelp)

} else if (command  == "echo") {
    let toSend = args.join(" ")
    if (!toSend) return msg.reply("Specify a message to echo")
	bot.chat(msg.author.tag + " >> " + toSend)	
    const success = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: ${msg.author.tag} sent \`${toSend}\``)
        .setColor(color)
    msg.channel.send(success)
// -------------
// Movement
// -------------
}else if (command  == "forward") {                                             //tells the bot to move in game 
    bot.setControlState('forward', true)
    const MoForw = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving forward To Stop Do !stop`)
        .setColor(color)
    msg.channel.send(MoForw)
}else if (command  == "backward") {                                             //tells the bot to move in game
    bot.setControlState('back', true)
    const MoBackw = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving backward To Stop Do !stop`)
        .setColor(color)
    msg.channel.send(MoBackw)
}else if (command  == "stop") {                                              // tells the bot to stop all its contole states (like walking and jumping)
    bot.clearControlStates()
    const MoStop = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Stopped!`)
        .setColor(color)
    msg.channel.send(MoStop)

}else if (command == "start_antiafk") {
    bot.setControlState('jump', true)                                        //tells the bot to start its anti afk (jumping and sneaking)
    bot.setControlState('sneak', true)
    for (int i = 0; i < 5;  i++) {
    	bot setControlState('foward', true)
    }
    const startantiafk = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Anti-afk Started`)
        .setColor(color)
        msg.channel.send(startantiafk)

}else if (command  == "left") {                                             //tells the bot to move in game to the left 
    bot.setControlState('left', true)
    const MoLeft = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving left To Stop Do !stop`)
        .setColor(color)
    msg.channel.send(MoLeft)
}else if (command  == "right") {                                             //tells the bot to move in game to the right
    bot.setControlState('right', true)
    const MoRight = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving Right To Stop Do !stop`)
        .setColor(color)
    msg.channel.send(MoRight)
//----------
//Spammer -
//----------

}else if (command == "start_spammer") {                                     // this spamer section just has 2 starts and a stop command it also checks if the bot is aready spamming or isnt spamming when trying to start and stop respectivly.
	if (Spam > 0){
		const sON = new Discord.MessageEmbed()
    	.setDescription(`:x: IDIOT SPAMMER IS ON ALLREADY`)
    	.setColor(color)
    msg.channel.send(sOn)
	}else{
        var X = Spammer2;
		Spam++
		const spami = new Discord.MessageEmbed()
    	.setDescription(`:white_check_mark: Time To Spam!`)
    	.setColor(color)
    msg.channel.send(spami)
	}
}else if (command == "start_spammer2") {                                        // starts the spammer using the second spam list wont trigger the lock if spammer is already on 
    if (Spam > 0){
        const sON = new Discord.MessageEmbed()
        .setDescription(`:x: IDIOT SPAMMER IS ON ALLREADY`)
        .setColor(color)
    msg.channel.send(sOn)
    }else{
        var X = Spammer;
        Spam++
        const spami = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Time To Spam!`)
        .setColor(color)
    msg.channel.send(spami)
    }
}else if (command == "stop_spammer") {                                              // stops the spammer and if the spammer isnt on it wont do anything
	if (Spam <= 0){
		const sOFF = new Discord.MessageEmbed()
    	.setDescription(`:x: Spammer isnt even on bro`)
    	.setColor(color)
    msg.channel.send(sOFF)
	}else{
		Spam--
		const antismap = new Discord.MessageEmbed()
		.setDescription(`:white_check_mark: ok no more spam :(`)
		.setColor(color)
	msg.channel.send(antismap)
	}
}else if (command == "set_spam_time_1") {
    var Y = 360;
}else if (command == "set_spam_time_2") {
    var Y = 720;
}else if (command == "set_spam_time_3") {
    var Y = 1080;
}else if (command == "set_spam_time_4") {
    var Y = 1440;
}else if (command == "set_spam_time_5") {
    var Y = 1800;
}else if (command == "set_spam_time_6") {
    var Y = 2160;
}



if(Spam > 0){                                                                       // the spammer lock, depending on if the spammer is on or off it will start the spamm event
    Loop();
}
function Loop() {                                                                   // the spam timed loop, picks a random number 
  setTimeout(function() {  
    const random = Math.floor(Math.random() * X.length);
    bot.chat(X[random]);
    D++;          
    if (D < Y) {    
      Loop();        
    }                       
  }, 10000);
}
  

client.login("ODA2OTAwMjg0NjAwODc3MTA2.YBwKcw.9mYANQ8mPaR106XRtCGw7_bOzOw")                     // the bots token used for the bot to login to the bot own account


    bot.on('kicked', function(reason) {
        console.log("bot got kicked for" + reason)                                              // logs kicks into the consol and then attempts to try to reconect.
        console.log("reconnect attempt in 10 sec")
        process.exit(0)
        
        
    })












