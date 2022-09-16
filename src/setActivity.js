const base = 0xdd50;

export default function setActivity(client) {
    const date = new Date();
    const hour = date.getHours() % 12 || 12;
    const minute = date.getMinutes();
    // Create Clock Face
    let index = 0;
    if (minute > 15 && minute < 45) {
        // Half Hour
        index = 12 + ((hour + 11) % 12);
    } else {
        // Hour, rounded to nearest
        index = (hour + Math.round(minute / 60) - 1) % 12;
    }
    const clock = `\uD83D${String.fromCharCode(base + index)}`;
    const city = Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g, ' ');

    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: '🔵 Online',
            state: `${clock} ${hour}:${minute < 10 ? '0' : ''}${minute} ${date.getHours() >= 12 ? 'pm' : 'am'} ${city}`,
            assets: {
                large_image: 'logo-1080',
                large_text: 'AngaBlue'
            },
            buttons: [
                { label: '🌐 Website', url: 'https://anga.blue' },
                { label: '👾 Free Rocket League Items', url: 'https://rl.supply/ref/anga' }
            ]
        }
    });
}
