// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron/renderer')

let electronMessage = null

ipcRenderer.on('main-port', e => {
  electronMessage = e.ports[0]
})

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  setTitle: (title) => ipcRenderer.send('set-title', title),
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', (_event, value) => callback(value)),
  pushMessageEvent: (message) => electronMessage.postMessage(message),
  onMessagePort: (callback) => {
    const listener = (e) => {
      e.ports[0].onmessage = messageEvent => {
        callback(messageEvent.data)
      }
    }
    ipcRenderer.on('main-port', listener)
    return () => ipcRenderer.removeListener('main-port', listener)
  },
})
