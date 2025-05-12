const base = 0xdd50;

/**
 * Updates your Discord activity status.
 * @param {import('discord-rpc').Client} client
 */
export default function setActivity(client) {
	// Get the current time
	const date = new Date();
	const hour = date.getHours() % 12 || 12;
	const minute = date.getMinutes();

	// Find the correct clock face emoji for the current time
	let index = 0;
	if (minute > 15 && minute < 45) {
		// Half Hour
		index = 12 + ((hour + 11) % 12);
	} else {
		// Hour, rounded to nearest
		index = (hour + Math.round(minute / 60) - 1) % 12;
	}
	const clock = `\uD83D${String.fromCharCode(base + index)}`;

	// Find and normalise the current timezone name
	const city = Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g, ' ');

	// Update the activity status to show on Discord
	client.setActivity({
		details: '🔵 Online',
		state: `${clock} ${hour}:${minute < 10 ? '0' : ''}${minute} ${date.getHours() >= 12 ? 'pm' : 'am'} ${city}`,
		assets: {
			large_image: 'logo-1080',
			large_text: 'AngaBlue'
		},
		buttons: [
			{ label: '🌐 Website', url: 'https://anga.blue' },
			{ label: '🤖 Roblox Items Marketplace', url: 'https://bloxboom.com' }
		]
	});
}
