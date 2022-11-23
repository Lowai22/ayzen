const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'help',
  description: 'Voir les commandes disponibles',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`<:aide:1033670396492386375>  Page d'aide`)
      .setColor('#2F3136')
      .setDescription('Voici la liste des commandes disponibles sur le robot')
      .addField('<:ADgifts:1033677033596792922>  Giveaway (8)', '`create` `start` `edit` `end` `list` `pause` `reroll` `resume`')
      .addField('<:__:1017202535292993566>  Autres (3)', '`help` `invite` `ping`')
      .addField(`🔗 Liens:`,`- [Support](https://discord.gg/lighter)\n- [Inviter le bot](https://discord.com/api/oauth2/authorize?client_id=1033439045994414152&permissions=8&scope=bot%20applications.commands)`,true)
      .setTimestamp()
      .setFooter({

        text: `Lighter`,
        iconURL: `https://images-ext-2.discordapp.net/external/1Fg2JsC8GdbdIbzcMxWJ_PLSL8ifno-75txvAS2eSww/https/cdn.discordapp.com/avatars/1033439045994414152/a850fb7b58b39a2f3164931825016483.webp`
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}