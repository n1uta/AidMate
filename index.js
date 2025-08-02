const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

// Data storage for ticket system
const tickets = new Map();

client.once('ready', () => {
    console.log(`Bot logged in as ${client.user.tag}!`);
});

// Ticket creation command
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ticket') {
        const embed = new EmbedBuilder()
            .setTitle('🎫 Ticket System')
            .setDescription('Click the button below to get support.')
            .setColor('#0099ff')
            .setTimestamp();

        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('create_ticket')
                    .setLabel('🎫 Create Ticket')
                    .setStyle(ButtonStyle.Primary)
            );

        await interaction.reply({ embeds: [embed], components: [button] });
    }
});

// Ticket button click
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'create_ticket') {
        const userId = interaction.user.id;
        
        // Check if user already has an open ticket
        if (tickets.has(userId)) {
            return interaction.reply({ 
                content: '❌ You already have an open ticket!', 
                ephemeral: true 
            });
        }

        // Create ticket channel
        const channel = await interaction.guild.channels.create({
            name: `ticket-${interaction.user.username}`,
            type: 0, // Text channel
            parent: interaction.channel.parent, // Same category
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel]
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
                }
            ]
        });

        // Save ticket
        tickets.set(userId, channel.id);

        const ticketEmbed = new EmbedBuilder()
            .setTitle('🎟️ Ticket Created')
            .setDescription(`Hello ${interaction.user}! Our support team will help you as soon as possible.`)
            .setColor('#00ff00')
            .setTimestamp();

        const closeButton = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('close_ticket')
                    .setLabel('❌ Close Ticket')
                    .setStyle(ButtonStyle.Danger)
            );

        await channel.send({ embeds: [ticketEmbed], components: [closeButton] });
        await interaction.reply({ 
            content: `✅ Ticket created: ${channel}`, 
            ephemeral: true 
        });
    }

    if (interaction.customId === 'close_ticket') {
        const channel = interaction.channel;
        
        // Close ticket
        for (const [userId, channelId] of tickets.entries()) {
            if (channelId === channel.id) {
                tickets.delete(userId);
                break;
            }
        }

        await interaction.reply('🔒 Ticket will be closed in 5 seconds...');
        
        setTimeout(async () => {
            try {
                await channel.delete();
            } catch (error) {
                console.error('Error while deleting channel:', error);
            }
        }, 5000);
    }
});

// Register slash commands
client.on('ready', async () => {
    try {
        await client.application.commands.set([
            {
                name: 'ticket',
                description: 'Creates the ticket system panel'
            }
        ]);
        console.log('Slash commands registered!');
    } catch (error) {
        console.error('Error while registering commands:', error);
    }
});

client.login(process.env.TOKEN);