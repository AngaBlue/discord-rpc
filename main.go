package main

import (
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/altfoxie/drpc"
	dotenv "github.com/joho/godotenv"
)

const (
	EnvApplicationID = "APPLICATION_ID"
)

func main() {
	err := dotenv.Load()
	if err != nil {
		panic("Failed to load .env")
	}
	applicationID := os.Getenv(EnvApplicationID)
	if applicationID == "" {
		panic("APPLICATION_ID is not set")
	}

	// Initialise client and activity base
	client := drpc.New(applicationID)
	activity := &drpc.Activity{
		Details: "🔵 Online",
		Assets: &drpc.Assets{
			LargeText:  "AngaBlue",
			LargeImage: "logo-1080",
		},
		Buttons: []drpc.Button{{
			Label: "🌐 Website",
			URL:   "https://anga.blue",
		}, {
			Label: "🤖 Roblox Items Marketplace",
			URL:   "https://bloxboom.com",
		}},
	}
	setActivity(client, activity, time.Now())

	// Wait until the next clock minute before beginning the ticker
	<-time.After(time.Until(time.Now().Truncate(time.Minute).Add(time.Minute)))
	setActivity(client, activity, time.Now())

	// Update activity every minute
	ticker := time.NewTicker(time.Minute)
	for t := range ticker.C {
		setActivity(client, activity, t)
	}
}

func setActivity(client *drpc.Client, activity *drpc.Activity, t time.Time) {
	// Build state string
	builder := strings.Builder{}
	builder.WriteRune(getClockEmoji(t))
	builder.WriteByte(' ')
	builder.WriteString(t.Format("3:04 pm"))
	builder.WriteByte(' ')
	zone, _ := t.Zone()
	builder.WriteString(strings.ReplaceAll(zone, "_", " "))

	// Update state and set activity
	activity.State = builder.String()
	err := client.SetActivity(*activity)
	if err != nil {
		fmt.Println(err)
	}
}

func getClockEmoji(t time.Time) rune {
	minute := t.Minute()
	hour := t.Hour()

	var index int
	switch {
	case minute >= 15 && minute < 45:
		// Clock on the half hour
		index = 12 + ((hour + 11) % 12)
	case minute >= 45:
		// Clock on the next hour
		index = ((hour+1)%24 + 11) % 12
	default:
		// Clock on the hour
		index = (hour + 11) % 12
	}

	return rune(0x1F550 + index)
}
