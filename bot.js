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
	member.send(
'Salutation '+ member.toString() +
' et bienvenue sur le serveur discord officiel de Heavy-Craft!\n\n' +

':arrow_right: Si tu es déjà membre :\n' +
'demande à un membre du staff de te donner le rôle que tu possèdes en jeu.\n' +
'(fais la demande directement en jeu si possible)\n\n' +

':arrow_right: Pour nous rejoindre si tu es Naufragé (ici et en jeu) :\n' +
'Merci de prendre connaissance des règles du serveur! :)\n' +
'http://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=3&thread_id=2'+'\n\n'+

'Les enregistrements sur le forum étant actuellement désactivés,\n' +
'les présentations se font sur le salon textuel "Présentations" dans les salons Naufragés.\n' +
'Tu as également accès au "général-naufragé" et au salon vocal "l\'épave" pour toutes questions.\n\n' +

':exclamation:Règles relatives au discord! ::exclamation:\n' +
':no_entry_sign:Pas d\'insultes, de spam et de pub sur les salons!\n' +
':exclamation:Merci d\'utiliser un pseudo ou nick ressemblant à votre pseudo minecraft.\n' +
':exclamation:Merci d\'utiliser un langage correct et d\'éviter le langage SMS! SURTOUT POUR LES PRESENTATIONS!\n' +
':no_entry_sign:Ne pas utiliser les commandes du bot de musique ailleurs que dans #musique !\n' +
':no_entry_sign:Ne pas abuser des commandes "fun" de BotDesTavernes.\n\n' +

':arrow_right:Autres liens utiles!\n' +
'La dynmap, l\'adresse du serveur MC... :\n' +
'http://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=3&thread_id=4'+'\n'+
'Les commandes minecraft :\n' +
'http://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=18&thread_id=9'+'\n' +
'Les commandes des bots discords (lien indisponible pour le moment):'
	
	
	
	);
	//donne le role de Naufragé a un membre quand il rejoint le serveur
	var roleN = member.guild.roles.find('name','Naufragé');
	member.addRole(roleN)	
});

client.on('message', message => 
{
	/*
	if(message.substring(0,4)=='!mdp')	
	{
		if(message.substring(4)==' HeavyCraftQualities')
		{
			message.delete()
			message.channel.send(message.author.toString() + ' :white_check_mark: Mot de passe accepté');		
		}
		else
		{
			message.delete()
			message.channel.send(message.author.toString() + ' :x: Mot de passe refusé');
		}	
	}
	*/
		
	switch (message.content)
	{
		case '!soif' :
		message.delete()
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
		message.channel.send('enfonce toi un maïs dans le c*l et va jouer dans le micro-ondes :corn: :Kappapride:');
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
		message.channel.send('test\n\ntest '+ message.author.toString());
		break;	
		
		case '!testMsg' :
		message.channel.send(

'Salutation '+ message.author.toString() +
' et bienvenue sur le serveur discord officiel de Heavy-Craft!\n\n' +

':arrow_right: Si tu es déjà membre :\n' +
'demande à un membre du staff de te donner le rôle que tu possèdes en jeu.\n' +
'(fais la demande directement en jeu si possible)\n\n' +

':arrow_right: Pour nous rejoindre si tu es Naufragé (ici et en jeu) :\n' +
'Merci de prendre connaissance des règles du serveur! :)\n' +
'http://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=3&thread_id=2'+'\n\n'+

'Les enregistrements sur le forum étant actuellement désactivés,\n' +
'les présentations se font sur le salon textuel "Présentations" dans les salons Naufragés.\n' +
'Tu as également accès au "général-naufragé" et au salon vocal l\'épave pour toutes questions.\n\n' +

':exclamation:Règles relatives au discord! ::exclamation:\n' +
':no_entry_sign:Pas d\'insultes, de spam et de pub sur les salons!\n' +
':exclamation:Merci d\'utiliser un pseudo ou nick ressemblant à votre pseudo minecraft.\n' +
':exclamation:Merci d\'utiliser un langage correct et d\'éviter le langage SMS! SURTOUT POUR LES PRESENTATIONS!\n' +
':no_entry_sign:Ne pas utiliser les commandes du bot de musique ailleur que dans #musique !\n' +
':no_entry_sign:Ne pas abuser des commandes "fun" de BotDesTavernes.\n\n' +

':arrow_right:Autres liens utiles!\n' +
'La dynmap, l\'adresse du serveur MC... :\n' +
'http://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=3&thread_id=4'+'\n'+
'Les commandes minecraft :\n' +
'http://sur-les-ruines-de-heavy-craft.craft.vg/index.php?file=Forum&page=viewtopic&forum_id=18&thread_id=9'+'\n' +
'Les commandes des bots discords (indisponible pour le moment):'
);
		break;
	}   
});     
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);



