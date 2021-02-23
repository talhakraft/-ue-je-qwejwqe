const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
process.setMaxListeners(0);
require("moment-duration-format");

exports.run = async (bot, message, args) => {

   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
  //TK Bot
  .setColor('BLACK')
  .setFooter('TK Bot', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", "<@733092915924041788>")
  .addField("» **Geliştirici ** ","<@733092915924041788>")
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=794955008222953512&scope=bot&permissions=2147483647)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/r4KYzjWpua)", )
  .addField("**» Youtube Kanalı**", " [Youtube Kanalımıza Abone Ol](https://www.youtube.com/channel/UCcPfuWjuF8eMPfHD23t1ciQ)", )

 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-bilgi","botbilgi","i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "bot bilgilerini vermektedir.",
  usage: "istatistik"
};
