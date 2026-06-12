const { app, BrowserWindow, Menu, screen } = require('electron');
const path = require('path');

const WINDOW_WIDTH = 380;
const WINDOW_HEIGHT = 720;
const WINDOW_MARGIN = 12;

let mainWindow = null;

function getWindowBounds() {
  const { workArea } = screen.getPrimaryDisplay();
  const width = Math.min(WINDOW_WIDTH, workArea.width);
  const height = Math.min(WINDOW_HEIGHT, workArea.height);

  return {
    width,
    height,
    x: workArea.x + workArea.width - width - WINDOW_MARGIN,
    y: workArea.y + workArea.height - height,
  };
}

function createWindow() {
  mainWindow = new BrowserWindow({
    ...getWindowBounds(),
    frame: false,
    transparent: true,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    show: false,
    skipTaskbar: true,
    alwaysOnTop: true,
    backgroundColor: '#00000000',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  mainWindow.setAlwaysOnTop(true);
  mainWindow.loadFile(path.join(__dirname, '2D_desktop_GF_ver2.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) event.preventDefault();
  });
}

app.whenReady().then(() => {
  app.setAppUserModelId('com.desktoprenai.revolution2d');
  Menu.setApplicationMenu(null);
  createWindow();

  screen.on('display-metrics-changed', () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.setBounds(getWindowBounds());
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
