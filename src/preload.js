// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  setTitle: (title) => ipcRenderer.send('set-title', title),
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', (_event, value) => callback(value)),
})