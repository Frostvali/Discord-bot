// Require the necessary discord.js classes
const  discord  = require('discord.js');
const dotenv = require('dotenv');

const client = new discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] }); 


dotenv.config(); 
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'cute') {
	 	await interaction.reply(`${interaction.user.tag}\nis adowable`);
	} 
}); 
// Login to Discord with your client's token
client.login(process.env.TOKEN); 

