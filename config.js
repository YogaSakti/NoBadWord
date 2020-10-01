const fs = require('fs')

const getExecPath = () => {
    const chromePath = {
        win32: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Windows 32 bit
        win64: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', // Windows 64 bit
        linuxChrome: '/usr/bin/google-chrome-stable', // Linux - Chrome
        linuxChromium: '/usr/bin/chromium-browser', // Linux - Chromium
        darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' // MacOS
    }

    let execPath
    if (fs.existsSync(chromePath.win32)) {
        execPath = chromePath.win32
    } else if (fs.existsSync(chromePath.win64)) {
        execPath = chromePath.win64
    } else if (fs.existsSync(chromePath.linuxChrome)) {
        execPath = chromePath.linuxChrome
    } else if (fs.existsSync(chromePath.linuxChromium)) {
        execPath = chromePath.linuxChromium
    } else if (process.platform === 'darwin') {
        execPath = chromePath.darwin
    } else {
        console.error(new Error('Google Chrome Is Not Installed'))
        return process.exit(1)
    }

    return execPath
}

module.exports = {
    getExecPath
}