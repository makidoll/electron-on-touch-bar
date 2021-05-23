const { app, BrowserWindow, TouchBar } = require("electron");
const { TouchBarButton } = TouchBar;
const path = require("path");

const button = new TouchBarButton({
	label: "",
	backgroundColor: "#000000",
	iconPosition: "overlay",
});

const touchBar = new TouchBar({
	items: [button],
});

const scale = 1.5;
const width = 800 * scale;
const height = 36 * scale;

app.whenReady().then(() => {
	const win = new BrowserWindow({
		frame: false,
		resizable: false,
		titleBarStyle: "hidden",
		width,
		height,
	});

	win.setTouchBar(touchBar);

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
			width,
			height,
		});
		button.icon = image;
	}, 1000 / 60);
});
