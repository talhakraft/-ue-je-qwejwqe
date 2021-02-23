const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("TK Bot")
.setDescription("**Botun Davet Linki :** [Davet Et](https://discord.com/oauth2/authorize?client_id=794955008222953512&scope=bot&permissions=2147483647)\n**Botun Destek Sunucusu :** [Katıl](https://discord.gg/r4KYzjWpua)")
.setColor("GREEN")
//lrowsxrd
return message.channel.send(kinda)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};