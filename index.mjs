import { config } from "dotenv";
import { Client } from "discord-rpc";

config();

const client = new Client({
    transport: "ipc",
});

client.on("ready", () => {
    console.log("Started Rich Presence Application");

    client.request("SET_ACTIVITY", {
        pid: process.pid,
        activity: {
            details: "🔵 Online",
            assets: {
                large_image: "angablue",
                large_text: "AngaBlue",
            },
            buttons: [
                { label: "🌐 Website", url: "https://anga.blue" },
            ],
        },
    });
});

client.login({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});
