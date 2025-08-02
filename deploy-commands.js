const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: 'ticket',
        description: 'Creates the ticket system panel.'
    }
];

const REST = new REST ({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Slash commands are being saving...');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );

        console.log('Slash commands successfully saved!');
    } catch (error) {
        console.error(error);
    }
})();