const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const embed = new Discord.RichEmbed()
bot.login(process.env.BOT_TOKEN)

bot.on("ready", () => {
    console.log("Der VerniktMC.tk Bot ist jetzt Online!")

	    bot.user.setStatus("dnd")

    setInterval(function() {

  
  
        let status = [`| !server`, `| auf GiantMC`, `| ${bot.users.size} Usern Zu!`, `| ${bot.guilds.size} Server`, `| !help`];
        let chosen = status[Math.floor(Math.random() * status.length)];
      
        bot.user.setActivity(chosen, {type: "PLAYING"});
      
      
      
    }, 2000);

})

bot.on("message", message => {
  var prefix = '!'
  var bungeecmd = 'b.'
  var server = 's!'
  var help = '-'
  var vipcmd = 'v!'
  var servcmd = ','
  if(message.content.toLowerCase() === `${prefix}ping`) {
    message.delete();
    message.channel.sendMessage('Dein Ping betraegt: `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
  }
  if(message.content.startsWith(`${prefix}create-server`)) {
    message.member.send('https://youtu.be/b5pvEa6VGQQ')
  }
  if(message.content.startsWith(`${prefix}setidle`)) {
    message.delete();
    message.member.send('Setze mich auf **Idle**')
    bot.user.setStatus("idle")
  }
  if(message.content.startsWith(`${prefix}help`)) {
    message.member.send('Hello ${member}')
  }
  if(message.content.startsWith(`${server}dm`)) {
    message.channel.send('!create-server\n-help')
  }
  if(message.content.startsWith(`${prefix}serverip`)) {
    message.delete();
    message.channel.send("CalledReverseMC.zapto.org")
  }
  if(message.content.startsWith(`${bungeecmd}bungee`)) {
    message.delete();
    message.member.send("The Latest **BungeeCord.jar**\nLink » https://ci.md-5.net/job/BungeeCord/lastSuccessfulBuild/artifact/bootstrap/target/BungeeCord.jar\n:wink:")
  }
  if(message.content.startsWith(`${help}help`)) {
    message.channel.send('```!serverip\n!create-server\nv!vip```')
  }
  if(message.content.startsWith(`${prefix}server`)) {
    message.member.send('http://DarkWolfMC.de/forum/ und https://metrolabs.net')
  }
  if(message.content.startsWith(`${prefix}teamspeak`)) {
    message.author.send('https://entengames.net\nKrass Designte Website :boom:')
  }
  if(message.content.startsWith(`${vipcmd}vip`)) {
    message.delete();
    message.member.send("Hey Wie geht es dir ?")
  }
  if(message.content.startsWith(`${prefix}web-info`)) {
    message.delete();
    message.member.send('https://metrolabs.net/darkwolfmc/')
    message.member.send('https://forum.gommehd.net')
  }
  if(message.content.startsWith(`${prefix}clearmsg`)) {
    message.delete();
    message.channel.send('`ClearMSG:` is **Cooming**')
    }
  if(message.content.startsWith(`${prefix}register`)) {
    message.delete();
    message.member.send('Your `registration` has been put on the waiting list!\nPlease contact the bot owner: <@!324922638411628554> via DM / PM\nif it does not happen :wink:\nHave Fun and test your Ping with: `!ping`')
  }
})
