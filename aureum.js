const { version } = require("os")

const Discord = require('discord.js');
const mineflayer = require("mineflayer");
const client = new Discord.Client();
const color = "#RANDOM"

var delayInMilliseconds = 600


let prefix = "!"

let bot = mineflayer.createBot({
    version: "1.12.2",
    host: "localhost",
    username: "ngoff0204@gmail.com",
    password: "TeamNNonTop1!"
})


var bot1 = mineflayer.createBot(bot);

bindEvents(bot1);


var whiteList = [
	"dc596807-4124-4946-a15c-57172943feff", //0b0tguy
	"6e5e01ef-5dd3-4253-a7e0-8b4376855ada", //TransAreObjects
	"7c42a18c-659f-4f49-876e-5c065e50b86d", //06d
	"24c02626-2b9f-410a-9ec8-314de15fd80f", //PixelatedBrayden
	"62576e5a-e291-4073-9646-208c3af79509", //Ethereas
	"a3febb7c-3d1b-47d9-8eb0-1469c171cf06", //chose_007
	"a118f3db-b5fd-461b-a1ae-db6e3decb926", //Amrit1
	"1e30fa10-2dbd-49e5-a39d-6ad316e584d1", //Ansh__
	"8b40b75a-ff5f-4948-9201-a91c55cce54f", //Dexter___
	"968bec49-fefb-46c7-98d0-964f4461a6cd", //ddcc
	"352b823c-b41b-422e-aadd-4e8f2593cfb3", //tntpower10
	"2f8becb8-decd-4c80-acbf-3d3dd2830ae0", //Street_y
	"82d5e11c-8892-4013-92bf-c04756128997", //Pr3roxDLC
	"b6020cd0-3089-4ffd-9533-82f18a0d2096", //FlamingBird101
	"bedb911b-7e84-4034-baf5-885687aff4f8", //owstrev
	"8544954e-f40e-448d-8382-1e22f8423c42", //mellot2004
	"2fa7144b-910c-48a2-a1a5-a76eb6765e3a", //papahappa
	"9e419608-57d0-40bf-a1e2-9706adccde4e", //SniXzy
	"1c3c4c67-92ca-4582-a425-9ffabc1bc36d", //sxyChxis
	"bd4b5b2e-ec6b-441f-b740-01ac7887c173", //ohLanz
	"9f893cf5-c35a-4328-bfad-0fe0ce4315bf", //LordOniox
];



function bindEvents(bot1) {

    
    client.on("ready", async => {

    console.log("Discord Bot online")
})

bot.on("login", async => {
    
    console.log("Minecraft bot logged in")
    bot.setControlState('jump', true)
    
})
bot.on(async => {
console.log(`$$$$$$$$\ $$$$$$$$\  $$$$$$\  $$\      $$\       $$\   $$\ $$\   $$\ 
\__$$  __|$$  _____|$$  __$$\ $$$\    $$$ |      $$$\  $$ |$$$\  $$ |
   $$ |   $$ |      $$ /  $$ |$$$$\  $$$$ |      $$$$\ $$ |$$$$\ $$ |
   $$ |   $$$$$\    $$$$$$$$ |$$\$$\$$ $$ |      $$ $$\$$ |$$ $$\$$ |
   $$ |   $$  __|   $$  __$$ |$$ \$$$  $$ |      $$ \$$$$ |$$ \$$$$ |
   $$ |   $$ |      $$ |  $$ |$$ |\$  /$$ |      $$ |\$$$ |$$ |\$$$ |
   $$ |   $$$$$$$$\ $$ |  $$ |$$ | \_/ $$ |      $$ | \$$ |$$ | \$$ |
   \__|   \________|\__|  \__|\__|     \__|      \__|  \__|\__|  \__|`
)}

bot.on("message", message => {
    let channel = client.channels.cache.get("806897213052682260")
    if (!channel) return;
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message}`)
   channel.send(embed)
})

bot.on('message', msg => {
        var regex = "^([a-zA-Z0-9_]{3,16}) wants to teleport to you\.$";
        var found = msg.toString().match(regex);

        if (found != null) {
            var uuid =  bot.players[found[1]].uuid;
            if (whiteList.includes(uuid)) {
                bot.chat("/tpy " + found[1])
            }else{
				bot.chat("Ur not a NN so Fuck OFF!")
			}
        }
 });


client.on("message", async msg => {
    if (!msg.content.startsWith(prefix)) return
    let args = msg.content.split(" ").slice(1)
    args = msg.content.slice(prefix.length).split(/ +/);
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    command = args.shift().toLowerCase();
if (command == "help") {
    const help = new D.MessageEmbed()
    .setTitle(`Help`)
    .setColor(color)
    .addField(`${prefix}help_NN_bot`, 'Help For Movement')
    .addField(`${prefix}help_discordcmd`, 'SecretMoonLOnlyCmd')
    .setColor(color)
msg.channel.send(help)

} else if (command == "help_mcbot") {
    const help = new Discord.MessageEmbed()
        .setTitle(`Help NN Bot`)
        .setColor(color)
        .addField(`${prefix}help `, 'Giving this messages')
        .addField(`${prefix}online`, 'Showing did ur friend is online')
        .addField(`${prefix}echo`, 'Make the bot to say anything you want ')
        .addField(`${prefix}help_movement`, 'Help For Movement')
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
	bot.chat(toSend)	
    const success = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: ${msg.author.tag} sent \`${toSend}\``)
        .setColor(color)
    msg.channel.send(success)
    



// -------------
// Movement
// -------------
}else if (command  == "forward") {
    bot.setControlState('forward', true)
    const MoForw = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving forward To Stop Do !stop`)
        .setColor(color)
    msg.channel.send(MoForw)
}else if (command  == "backward") {
    bot.setControlState('back', true)
    const MoBackw = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving backward To Stop Do !stop`)
        .setColor(color)
    msg.channel.send(MoBackw)
}else if (command  == "stop") {
    bot.clearControlStates()
    const MoStop = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Stopped!`)
        .setColor(color)
    msg.channel.send(MoStop)

}else if (command == "start_antiafk") {
    bot.setControlState('jump', true)
    bot.setControlState('sneak', true)
    const startantiafk = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Anti-afk Started`)
        .setColor(color)
        msg.channel.send(startantiafk)

}else if (command  == "left") {
    bot.setControlState('left', true)
    const MoLeft = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving left To Stop Do !stop`)
        .setColor(color)
    msg.channel.send(MoLeft)
}else if (command  == "right") {
    bot.setControlState('right', true)
    const MoRight = new Discord.MessageEmbed()
        .setDescription(`:white_check_mark: Im Moving Right To Stop Do !stop`)
        .setColor(color)
    msg.channel.send(MoRight)
    
}
})



client.login("ODA2OTAwMjg0NjAwODc3MTA2.YBwKcw.9mYANQ8mPaR106XRtCGw7_bOzOw")


bot.on('kicked', function(reason) {
    console.log("bot got kicked for" + reason)
    bot1.end()
    setTimeout(function() {
        
        bindEvents(bot1);
    }, delayInMilliseconds);
    })}
