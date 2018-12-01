const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('simple','Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

/*
bot.on('message', function(message){
    if(message.content == 'add')
    {
        message.channel.sendMessage('Adding Salt!');
    }
});
*/

bot.on('ready',function(){
    console.log("Ready for action Chris!");
})

bot.login(process.env.BOT_TOKEN);
