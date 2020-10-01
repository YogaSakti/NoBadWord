const { create } = require('@open-wa/wa-automate')
const config = require('./config')
const color = require('./utils')
const msgHandler = require('./handler/message')

const start = (client) => {
    console.log('[DEV]', color('xtrvts', 'yellow'))
    console.log('[CLIENT] CLIENT Started!')
    // Force it to keep the current session
    client.onStateChanged((state) => {
        console.log('[Client State]', state)
        if (state === 'CONFLICT' || state === 'UNLAUNCHED') client.forceRefocus()
    })

    // listening on message
    client.onMessage((message) => msgHandler(client, message))

    // listen group invitation
    client.onAddedToGroup(({ groupMetadata: { id }, contact: { name } }) =>
        client.getGroupMembersId(id).then((ids) => console.log('[CLIENT]', color(`Invited to Group. [ ${name} : ${ids.length}]`, 'yellow'))))
}


const options = {
    headless: true,
    executablePath: config.getExecPath(),
    qrRefreshS: 10,
    qrTimeout: 0,
    autoRefresh: true,
    killProcessOnBrowserClose: true,
    cacheEnabled: false,
    chromiumArgs: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--aggressive-cache-discard',
        '--disable-cache',
        '--disable-application-cache',
        '--disable-offline-load-stale-cache',
        '--disk-cache-size=0'
    ]
}

create('xtrvts', options)
    .then((client) => start(client))
    .catch((err) => new Error(err))