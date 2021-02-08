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
 

}else if (command == "Start_Spammer") {
	if (Spam > 0){
		const sON = new Discord.MessageEmbed()
    	.setDescription(`:x: IDIOT SPAMMER IS ON ALLREADY`)
    	.setColor(color)
    msg.channel.send(sOn)
	}else{
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

var Spam = 0
const random = Math.floor(Math.random() * Spammer.length);

while(Spam > 0){
	bot.chat(Spammer[random]);
}
String Spammer[] =
	"Team NN Is on Top",
	"Team NN is recruiting bold gang only tho!",
	"Team NN does the funny",
	"Ethereas Is Based",
	"PixelatedBrayden Is Based",
	"Pr3roxDLC Is Based",
	"LordOniox Is Based",
	"TransAreObjects Is Based",
	"Ansh__ Is Based",
	"Dexter___ Is Based",
	"sxyChxis is Based",
	"SniXzy Is Based",
	"0b0tguy Is Based",
	"06d Is Based",
	"papahappa Is Based",
	"Street_y Is Based",
	"tntpower10 Is Based",
	"Team NN Owns me and all",
	"Got banned from the 0b discord? join Team NN",
	"Dont u dare ignore this bot!",
	"I sure hope this works!",
	"sub to Ethereas on ytb",
	"owstrev Is Based"
	};

// Spammer, picks a random sentance from the list and sends it, automaticly you can specify how much time between the messages
