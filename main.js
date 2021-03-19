const { app, BrowserWindow } = require('electron');
const path = require('path');

const nativeImage = require('electron').nativeImage;
var image = nativeImage.createFromPath(__dirname + '/public/img/logo.png');
// where public folder on the root dir
image.setTemplateImage(true);

function createWindow() {
  const win = new BrowserWindow({
    width: 250,
    height: 310,
    frame: false,
    resizable: false,
    fullscreenable: false,
    icon: __dirname + '/public/img/logo.png',
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
