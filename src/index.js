import { config } from 'dotenv';
import { Client } from 'discord-rpc';
import setActivity from './setActivity.js';

// Load environment variables from .env file
config();

// Instantiate a new Discord RPC client
const client = new Client({
    transport: 'ipc'
});

let interval;

client.on('ready', () => {
    console.log('Started Rich Presence Application');

    // Clear the interval if it already exists
    if (interval) clearInterval();

    // Set the initial activity
    setActivity(client);

    // Update status every minute
    interval = setInterval(() => setActivity(client), 60_000);
});

client.login({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
});
