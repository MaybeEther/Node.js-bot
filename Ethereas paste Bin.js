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
		bot.chat(found[1] + "Ur not a NN so Fuck OFF!")
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

