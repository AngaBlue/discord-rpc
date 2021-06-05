/* eslint-disable import/extensions */
import { config } from "dotenv";
import { Client } from "discord-rpc";
import setActivity from "./setActivity.js";

config();

const client = new Client({
    transport: "ipc",
});

let interval;

client.on("ready", () => {
    console.log("Started Rich Presence Application");
    if (interval) clearInterval();
    setActivity(client);
    // Update status every minute
    interval = setInterval(() => setActivity(client), 60000);
});

client.login({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});
