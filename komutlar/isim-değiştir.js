const discord = require('discord.js')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`Bu Komutu Kullanabilmek İçin **Kullanıcı Adlarını Yönet** Yetkisine Sahip Olmalısın.`);
  
let kinsta = message.mentions.members.first()
if (!kinsta) return message.channel.send(`Yanlış Kullanım Örnek Kullanım: **-isim-değiştir** **<İsmi Değiştirilicek Kullanıcı Adı> <İstediğiniz İsim>**`)

let isim = args.slice(1).join(' ')
if (!kinsta) return message.channel.send(`Değiştirilicek ismi girin Örnek Kullanım: **-isim-değiştir** **<İsmi Değiştirilicek Kullanıcı Adı>** **<İstediğiniz İsim>**`)

kinsta.setNickname(isim)
message.channel.send(`${kinsta} Adlı Kullanıcının Yeni İsmi **${isim}\** Olarak Ayarlandı!`)
}
//lrowsxrd
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['isim', 'i-değiştir', 'isimdeğiştir', 'değiştir-isim'],
  permlevel: 0
}
exports.help = {
  name: 'isim-değiştir',
  usage: ' isim değiştir',
  description: 'isim-değiştir'
}
