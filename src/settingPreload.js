const { contextBridge, ipcRenderer } = require('electron/renderer')
let electronMessageTest = null

ipcRenderer.on('settings-port', e => {
  electronMessageTest = e.ports[0]
})

contextBridge.exposeInMainWorld('electronSettingAPI', {
  pushMessageEvent: (message) => electronMessageTest.postMessage(message),
  onMessagePort: (callback) => {
    const listener = (e) => {
      e.ports[0].onmessage = messageEvent => {
        callback(messageEvent.data)
      }
    }
    ipcRenderer.on('settings-port', listener)
    return () => ipcRenderer.removeListener('settings-port', listener)
  },
})