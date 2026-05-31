<h1 align="center">Discord Rich Presence 💬</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/github/v/tag/AngaBlue/discord-rpc?label=Version" />
  <a href="https://github.com/AngaBlue/discord-rpc/blob/master/LICENSE" target="_blank">
    <img alt="Licence: MIT" src="https://img.shields.io/github/license/AngaBlue/discord-rpc?color=green&label=Licence" />
  </a>
</p>

Create an interactive rich presence application on Discord to show extra information and buttons on your profile.

### 🏠 [Homepage](https://github.com/AngaBlue/discord-rpc#readme)

![Rich Presence Image Preview](https://i.anga.blue/QrX8.png)

## Install
Clone or download this repository and install dependencies.

```sh
go mod tidy
```

## Usage

1. Create a new application on the [Discord Developer Portal](https://discord.com/developers).
2. Fill out the application details and upload an image under Rich Presence with the key `logo-1080`.
3. Create a `.env` file with the keys `APPLICATION_ID`.
4. Modify any string values that you like in `main.go` (fork if you'd like to save your changes through git).
5. Build the application using `go build` and run the generated executable to start the rich presence application.
6. Create a shortcut to `discord-rpc.exe` in your startup folder in order to start the rich presence application when you reboot your computer.  To access your startup folder, press `Win`+`r` and type `shell:startup`.

At any point, you can manually start the rich presence application by double clicking `discord-rpc.exe`.

## Author

👤 **AngaBlue <contact@anga.blue>**

* Website: https://anga.blue
* Github: [@AngaBlue](https://github.com/AngaBlue)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/AngaBlue/discord-rpc/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [AngaBlue <contact@anga.blue>](https://github.com/AngaBlue).<br />
This project is [MIT](https://github.com/AngaBlue/discord-rpc/blob/master/LICENSE) licensed.
