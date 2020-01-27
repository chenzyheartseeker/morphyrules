const Discord = require ('discord.js');
const client = new Discord.Client();
const config = require('./Config.json');

var GphpApiClient = require('giphy-js-sdk-core');
giphy = GphpApiClient("mIJN03OvXYK4dUTB8Mz9SJn0oaDJFuTz");

client.once('ready', () => {
    console.log('Hazir!')
});

var prefix = config.prefix;


client.on('message', message =>{

    if(message.content.startsWith(`${prefix}yargı`)) {
        var mesaj = message.toString();
    var arr = mesaj.split(" ");
        var reason = arr[2];
        var usy = message.mentions.members.first();
        var usyy = message.mentions.users.first();
        if(message.member.hasPermission('KICK_MEMBERS', 'BAN_MEMBERS')){
        let memy = message.mentions.members.first();
        usyy.send(`${message.guild.name} adlı sunucudan ${message.member.user.tag} tarafından ${reason} sebebiyle banlandınız.`).then(a => { memy.ban().then( a => {
            const exampleEmbed = new Discord.RichEmbed()
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setDescription(`${message.member}, ${usy} üyesini ${reason} sebebiyle banladı.`)
                .setAuthor(message.member.displayName, message.member.user.avatarURL, '')
                .setImage('https://cdn.discordapp.com/attachments/671048817541382184/671134776719048764/anigif_sub-buzz-426-1576530056-5.gif')
            message.channel.send(exampleEmbed);

        })
        })
        }else{
            message.channel.send('Gücün yetmez aslan parçası!');
        }
    }
});

client.login(config.token);
