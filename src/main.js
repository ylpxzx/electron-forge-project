import { app, BrowserWindow, MessageChannelMain } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';

// Avoid Warning：Electron Security Warning (Insecure Content-Security-Policy) This renderer process has either no Content Security
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

// crerate message channel
const { port1, port2 } = new MessageChannelMain()

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // webContents准备就绪后，使用postMessage向webContents发送一个端口。
  mainWindow.once('ready-to-show', () => {
    mainWindow.webContents.postMessage('main-port', null, [port1])
  })

  mainWindow.webContents.openDevTools();
};

const createSettingsWindow = () => {
  const settingsWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeintegration: true,
      preload: path.join(__dirname, 'settingPreload.js'),
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    const settingUrl = `${MAIN_WINDOW_VITE_DEV_SERVER_URL}/#/settings`;
    settingsWindow.loadURL(settingUrl);
  } else {
    // hash: 'settings', 保证打包好的生产环境下正常跳转
    settingsWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`), { hash: 'settings' });
  }

  settingsWindow.once('ready-to-show', () => {
    settingsWindow.webContents.postMessage('settings-port', null, [port2])
  })

  settingsWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  createSettingsWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
