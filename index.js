//Base bot discord :
const Discord = require('discord.js');

const client = new Discord.Client();

//Variables :

var prefix = "~";

//Login + connexion du bot :
client.login(process.env.TOKEN);

client.on("ready", () => {
	console.log("Connexion en cours ...");
    	setInterval(function() {

        	var statut = [
          	`~help for help`, 
          	`♡ơཞıąŋɛ ɠąƖąҳყცơɬ♡ By FilEeaZaiR`,
          	`${client.users.size} users`];
    
        	var random = Math.floor(Math.random()*(statut.length));
    
        	client.user.setPresence({ 
            		game: { 
            		name: statut[random],
            		type: 0
          		}
        	});
      }, 30000); 
});

client.on("guildMemberAdd", member => {

    const bvn = member.guild.channels.find(m => m.name === "welcome");

    if(!bvn) return;

    var role = member.guild.roles.find(r => r.name === "ŋơų۷ɛąų ƈơơƙıɛƙąῳąıı🌈");
    member.addRole(role).catch(console.error);

});

client.on("guildMemberAdd", member => {

    const logs = member.guild.channels.find(m => m.id === "554716123698954262");
    if (!logs) return;

    logs.send({
        embed: {
            color: 0xFE6F01,
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            title: "Arrivée d'un nouvel utilisateur",
            fields: [
            {
                name: "Un nouvel utilisateur vient d'arriver",
                value: `Il s'agit de [${member.user.tag}]`,
                inline: true
            },
            {
                name: `Nombre de CookieKawaii après l'arrivée de __${member.user.tag}__`,
                value: member.guild.memberCount,
                inline: false
            }],
            timestamp: new Date(),
            footer: {
                text: `ID : ${member.user.id} | FilEeaZaiR#1258`,
            }
        }
    });
});

client.on("guildMemberRemove", member => {

    const logs = member.guild.channels.find(m => m.id === "554716123698954262");
    if (!logs) return;
	
    logs.send({embed: {
            color: 0xFE6F01,
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            title: "Départ d'un utilisateur",
	    image: {
		    url: "http://www.lesaffaires.com/uploads/images/normal/578f645f2123b12d0257dfa1fbdb8fff.jpg"
	    },
	    thumbnail: {
                        url: member.user.displayAvatarURL
            },
            fields: [
            {
                name: "Un utilisateur vient de partir",
                value: `Il s'agit de [${member.user.tag}]`,
                inline: true
            },
            {
                name: `Nombre de CookieKawaii après le départ de __${member.user.tag}__`,
                value: member.guild.memberCount,
                inline: false
            }],
            timestamp: new Date(),
            footer: {
                text: `ID : ${member.user.id} | FilEeaZaiR#1258`,
            }
        }
    });

});

client.on(`message`, message =>{

    if(message.content === prefix + "réseaux" || message.content === prefix + "reseaux") {
        console.log(`Un utilisateur viens de faire la commande "réseaux" !`)
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                title: ":robot: Voici mes réseaux sociaux",
                thumbnail: {
                            url: message.author.displayAvatarURL
                },
                fields: [
                {
                    name: "YouTube :",
                    value: "`•Øríãnë GãlåxÿGãchå•`",
                    inline: true
                },
                {
                    name: "Instagrame :",
                    value: "`oriane_création`",
                    inline: true
                },
                {
                    name: "Discord :",
                    value: "`♡Oriane_Création♡#2277`",
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    text: `♡ơཞıąŋɛ ɠąƖąҳყცơɬ♡ | FilEeaZaiR#1258`,
                }
            }
        });
    }
    });
