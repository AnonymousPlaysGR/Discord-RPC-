const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('Check my SocialMedia')
        .setName('AnonymousPlaysGR')
        .setDetails('Sub and Follow')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1140101823227773040/1170861379243229204/standard_1.gif?ex=6563cf22&is=65515a22&hm=e62006cdd6be1a6aae605af92aad6d888ead234e92b60e9f5303392ec3fd148b&')
        .setAssetsLargeText('Visit this')
        .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1101758417720328203.webp?size=96&quality=lossless')
        .setAssetsSmallText('Verified')
        .addButton('Yt Channel', 'https://youtube.com/@apgr.?si=xBtSILEeDMCy7gpG')
        .addButton('Twitter (X) ', 'https://x.com/FortniteAPGR?t=UNLPVDaBXk7Ehx4ycyHFow&s=09');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);












