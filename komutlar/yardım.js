const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 
  
  const embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setTitle('TK Bot ')
  .setDescription(`\n**${prefix}sil**\nİstediğiniz miktarda mesaj silersiniz.\n\n**${prefix}avatar**\nAvatar  profilinizi atar.\n\n**${prefix}istatistik**\nBot hakkında bilgi verir.\n\n**${prefix}davet**\nBotun davet linkini atar.\n\n**${prefix}ever-here-engel**\nEveryone Here Engel Sistemini görüntülersiniz.\n\n**${prefix}hata-bildir**\nBotta bulduğunuz hatayı kurucuya bildirirsiniz.\n\n**${prefix}isim-değiştir**\nBelirlediğiniz kullanıcının ismini değiştirirsiniz.\n\n**${prefix}istek-bildir**\nBotta istediğiniz komudu kurucuya bildirirsiniz.\n\n**${prefix}kick**\nKolayca Üye Kicklemeye Yarayan Komuttur\n\n**${prefix}kullanıcıbilgim**\nSizin veya etiketledğiniz kullanıcının bilgilernini gösterir.\n\n**${prefix}ping**\nBotun pingi hakkında bilgi verir.\n\n**${prefix}prefix**\nSunucuza özel prefix ayarlarsınız.\n\n**${prefix}reklam-engel**\nReklam engel sistemini açarsınız.\n\n**${prefix}reklamtaraması**\nSunucunuzda reklam taramasını yaparsınız.\n\n**${prefix}sunucu-bilgi**\nSunucu hakkında bilgi verir\n\n**${prefix}slowmode**\nYavaş mod sistemini çalıştırırsınız.\n\n**Bot Şuan Beta Aşamasındadır Bazı Komutlarında Hata Olabilir Eğerki Hata Görürseniz   *-hata-bildir <Bulduğunuz Hata>* Olarak Bildirin**`)
  
 message.channel.send(embed)
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  permLevel: 0,
  aliases: ['help', 'h', 'y', 'yardım']
}

exports.help = {
  name: 'yardım',
  description: 'TK Bot',
  usage: 'yardım'
}