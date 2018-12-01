const Commando = require('discord.js-commando');

var total = 0;

class SaltCounterCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'salt',
            group: 'simple',
            memberName: 'salt',
            description: 'Simple counter users can use when salt occurs during a game.'
        });
    }

    async run(message, args)
    {
        total ++;
        message.channel.sendMessage("Salt Count: " +total); 
        message.channel.sendMessage("Thats a lot of salt!");
    }
}

module.exports = SaltCounterCommand;