const djsbuilder = 
require ('@discordjs/builders');
const djsrest =
require ('@discordjs/rest');
const djsapi =
require ('discord-api-types/v9');
const dotenv = require('dotenv');

dotenv.config();

const commands = [djsbuilder.SlashCommandBuilder(). setName ('ping').setDescription('Replies with pong!'),
    new
djsbuilder.SlashCommandBuilder(). setName ('server').setDescription('Replies with user info!'),
]
    .map(command =>
        command.toJSON());

        const rest = new 
        djsrest