# Discord Ticket Bot

A simple Discord ticket system bot built with Discord.js v14.

*Developed and Designed by -n1uta.*

## Features

- 🎫 Create private support tickets with button clicks
- 🔒 One ticket per user to prevent spam
- ❌ Easy ticket closing with auto-delete
- ⚡ Modern slash commands

## Bot Setup

1. Create bot at [Discord Developer Portal](https://discord.com/developers/applications)
2. Copy bot token and client ID to `.env` file
3. Invite bot with these permissions:
   - Send Messages
   - Use Slash Commands
   - Manage Channels
   - View Channels

## Usage

1. Use `/ticket` command to create ticket panel
2. Users click "🎫 Create Ticket" button
3. Bot creates private channel `ticket-username`
4. Click "❌ Close Ticket" to close

## File Structure

```
discord-ticket-bot/
├── node_modules/         # Dependencies
├── .env                  # Bot token (create this)
├── deploy-commands.js    # Command deployment
├── index.js             # Main bot file
├── package-lock.json    # Dependency lock
└── package.json         # Project dependencies
```

## License

MIT License

**Need help?** Contact me on Discord: **-n1uta**