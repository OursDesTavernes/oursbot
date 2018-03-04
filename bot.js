const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!soif') {
        message.channel.send('tiens, voici une bonne bière! :beer:')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	}

   else if (message.content === '!café') {
        message.channel.send('tiens, voici un bon café! :coffee:')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	}
    else if (message.content === '!super soif de la mort qui tue! TAVERNIER!') {
        message.channel.send('TIENS,VOICI UNE PUTAIN DE TONNE DE LITRES DE BIERE!!!:beers::beers::beers::beers::beers::beers:')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	}
    else if (message.content === '!afkafé') {
        message.channel.send(message.author.toString() + ' est parti se faire un café :coffee:')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	}
    else if (message.content === '!elfes') {
        message.channel.send('les elfes sont une anomalie')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	}
     else if (message.content === '!thé') {
        message.channel.send('ON NE SERT PAS LES NEFLES ICI!')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	}
   else if (message.content === '!chips') {
        message.channel.send('enfonce toi un maïs dans le cul et va jouer dans le micro-ondes')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	}
    else if (message.content === '!Talos') {
        message.channel.send('http://i.imgur.com/c0QTX24.jpg')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	} 
    
});     
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
