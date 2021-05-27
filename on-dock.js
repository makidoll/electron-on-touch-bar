const { app, BrowserWindow } = require("electron");
const path = require("path");

const size = 128;

app.whenReady().then(() => {
	const win = new BrowserWindow({
		frame: false,
		resizable: false,
		titleBarStyle: "hidden",
		width: size,
		height: size,
	});

	// win.loadURL(
	// 	"https://www.shadertoy.com/embed/lsjGRV?gui=false&paused=false&muted=true",
	// );

	// win.loadURL("https://codepen.io/eusonic/full/oktBj");

	// win.loadURL("file://" + path.resolve("youtube.html") + "#NVb5GV6lntU");
	// win.loadURL("file://" + path.resolve("youtube.html") + "#I6LZ1GqSrEE");
	win.loadURL("file://" + path.resolve("youtube.html") + "#QZShA_a-5r8");

	setInterval(async () => {
		const image = await win.webContents.capturePage({
			x: 0,
			y: 0,
			width: size,
			height: size,
		});
		app.dock.setIcon(image);
	}, 1000 / 60);
});
