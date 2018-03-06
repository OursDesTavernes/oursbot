const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => 
{
	console.log('I am ready!');
});

//quand un nouveau membre rejoint le serveur...
client.on('guildMemberAdd', member => 
{
	//message de bienvenue
	member.send('Bienvenue sur le serveur de Heavy-Craft');
	//donne le role de Naufragé a un membre quand il rejoint le serveur
	var roleN = member.guild.roles.find('name','Naufragé');
	member.addRole(roleN)	
});

client.on('message', message => 
{	
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
			
		case '!ronde' :
		message.channel.send('Chevels est partie faire sa ronde');
		break;
		
		case '!dynmap' :
		message.channel.send('http://51.254.170.142:8130/');
		break;
			
		case '!hems' :
		message.channel.send('http://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=2&thread_id=2530');
		break;

		//test message carriage return  \n
		case '!test' :
		message.channel.send('test\n\ntest '+member.toString());
		break;	
		
		case '!testMsg' :
		message.channel.send('a'
		//'Salutation '+ member.toString() +' et bienvenue sur le serveur discord officiel de Heavy-Craft!\n\nSi tu es déjà membre :\ndemmande à un membre du staff de te donner le role que tu possède en jeu.\n(fais la demmande directement en jeu si possible)\n\nPour nous rejoindre si tu est Naufragé (ici et en jeu) :\nMerci de prendre connaissance des règles du serveur! :)\nhttp://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=3&thread_id=2\n\nLes enregistrements sur le forum étant actuellement désactivés,\nles présentations se font sur le salon textuel "Présentations" dans les salons Naufragés.\nTu as également accès au "général-naufragé" et au salon vocal l\'épave pour toutes questions.\n\nRègles relatives au discord! :\nPas d\'insultes, de spam et de pub sur les salons!\nMerci d\'utiliser un pseudo ou nick ressemblant à votre pseudo minecraft.\nNe pas utiliser les commandes du bot de musique ailleur que dans #musique !\nNe pas abuser des commandes "fun" de BotDesTavernes.\n\nAutres liens utiles!\nLa dynmap, l\'adresse du serveur MC... :\nhttp://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=3&thread_id=4\nLes commandes minecraft :\nhttp://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=18&thread_id=9\nLes commandes des bots discords (indisponnible pour le moment):'

		/*'Salutation '+ message.author.toString() +' 'et bienvenue sur le serveur discord officiel de Heavy-Craft!

Si tu es déjà membre :
demmande à un membre du staff de te donner le role que tu possède en jeu.
(fais la demmande directement en jeu si possible)

Pour nous rejoindre si tu est Naufragé (ici et en jeu) :
Merci de prendre connaissance des règles du serveur! :)  
//lien regles

Les enregistrements sur le forum étant actuellement désactivés,
les présentations se font sur le salon textuel "Présentations" dans les salons Naufragés.
Tu as également accès au "général-naufragé" et au salon vocal l\'épave pour toutes questions.

Règles relatives au discord! :
Pas d\'insultes, de spam et de pub sur les salons!
Merci d\'utiliser un pseudo ou nick ressemblant à votre pseudo minecraft.
Ne pas utiliser les commandes du bot de musique ailleur que dans #musique !
Ne pas abuser des commandes "fun" de BotDesTavernes.

Autres liens utiles!
La dynmap, l\'adresse du serveur MC... :
http://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=3&thread_id=4
Les commandes minecraft :
http://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=18&thread_id=9
Les commandes des bots discords (indisponnible pour le moment):'*/
);
		break;
	}   
});     
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


//'Salutation '+ member.toString() +' et bienvenue sur le serveur discord officiel de Heavy-Craft!\n\nSi tu es déjà membre :\ndemmande à un membre du staff de te donner le role que tu possède en jeu.\n(fais la demmande directement en jeu si possible)\n\nPour nous rejoindre si tu est Naufragé (ici et en jeu) :\nMerci de prendre connaissance des règles du serveur! :)\nhttp://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=3&thread_id=2\n\nLes enregistrements sur le forum étant actuellement désactivés,\nles présentations se font sur le salon textuel "Présentations" dans les salons Naufragés.\nTu as également accès au "général-naufragé" et au salon vocal l\'épave pour toutes questions.\n\nRègles relatives au discord! :\nPas d\'insultes, de spam et de pub sur les salons!\nMerci d\'utiliser un pseudo ou nick ressemblant à votre pseudo minecraft.\nNe pas utiliser les commandes du bot de musique ailleur que dans #musique !\nNe pas abuser des commandes "fun" de BotDesTavernes.\n\nAutres liens utiles!\nLa dynmap, l\'adresse du serveur MC... :\nhttp://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=3&thread_id=4\nLes commandes minecraft :\nhttp://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=18&thread_id=9\nLes commandes des bots discords (indisponnible pour le moment):'



