const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    /*if (message.content === '!soif') {
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
        message.channel.send('enfonce toi un maïs dans le c*l et va jouer dans le micro-ondes :corn:')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	}
    else if (message.content === '!talos') {
        message.channel.send('http://i.imgur.com/c0QTX24.jpg')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	} 
    else if (message.content === '!dwarf') {
        message.channel.send('nains > elfes')
    	//message.reply('tiens, voici une bonne bière! :beer:');
  	}*/ 
	switch (message.content)
	{
		case '!soif' :
		message.channel.send('tiens, voici une bonne bière! :beer:');
		break;

		case '!café' :
		message.channel.send('tiens, voici un bon café! :coffee:');
		break;
		
		case '!super soif de la mort qui tue! TAVERNIER!' :
		message.channel.send('TIENS,VOICI UNE PUTAIN DE TONNE DE LITRES DE BIERE!!!:beers::beers::beers::beers::beers::beers:');
		break;
		
		case '!afkafé' :
		message.channel.send(message.author.toString() + ' est parti se faire un café :coffee:');
		break;
		
		case '!elfes' :
		message.channel.send('les elfes sont une anomalie');
		break;
		
		case '!thé' :
		message.channel.send('ON NE SERT PAS LES NEFLES ICI!');
		break;
		
		case '!chips' :
		message.channel.send('enfonce toi un maïs dans le c*l et va jouer dans le micro-ondes :corn:');
		break;
		
		case '!talos' :
		message.channel.send('http://i.imgur.com/c0QTX24.jpg');
		break;
		
		case '!dwarf' :
		message.channel.send('nains > elfes');
		break;
			
		case '!empire' :
		message.channel.send('GLOIRE AUX SOMBRAGES!');
		break;
			
		case '!sombrage' :
		message.channel.send('MORT AUX IMPERIAUX!');
		break;
			
		case '!pin-up' :
		message.channel.send('https://image.noelshack.com/fichiers/2018/09/7/1520187043-pin-up.png');
		break;
			
		case '!items uniques' :
		message.channel.send('FAITES PAS CHIER ILS SONT SUR LA MAP!');
		break;
		
		case '!dynmap' :
		message.channel.send('http://51.254.170.142:8130/');
		break;
	}   
});     
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
