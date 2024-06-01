//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"wKTjzZiKx/BIqmLnfc6jKjgdM38m+Cf8p8hOMaN67mQ="},"public":{"type":"Buffer","data":"iREK+eTGzM6msXq/6itSySilPVT45C/niqimmyJ1sAU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"iIlTfkYnn6vidND4vW0g3hMuicjEMxfk5OtUTwf/rGM="},"public":{"type":"Buffer","data":"lfETXX9QcXELAzRuLw1gDGFfnwoep7KZ+5Ph+juw4Ao="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"YBzMxhMBRm8mg4EzZTyfhg+g628WIYBDTWSpAzwsBms="},"public":{"type":"Buffer","data":"GULB7lz11n7BYrHfauIy4ck1jQgsxd+SJEqaa5prNWw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"gGVghBL4+Ry88RuupAbierylbxsPcg6z7PR8mxFTdH8="},"public":{"type":"Buffer","data":"BZEhBeg22+XMC1NKhnRJqK1/aTeji30tKAHKYwGhdUc="}},"signature":{"type":"Buffer","data":"8fe7XIOXEGI+j/1iUuV5snP857duwc/pqInmeogShsGGwviyVvJqnrRyCWemg+rgg3GOmPGeJAkAj+B7dsMfhw=="},"keyId":1},"registrationId":58,"advSecretKey":"FT3xmLSS+bE0kuCFK2ErYeI5pHwPa0OT6RAHy3Vgrus=","processedHistoryMessages":[{"key":{"remoteJid":"22891386435@s.whatsapp.net","fromMe":true,"id":"CAC834CE116647B58E2EA666206C9A4D"},"messageTimestamp":1717202012},{"key":{"remoteJid":"22891386435@s.whatsapp.net","fromMe":true,"id":"C25258C63F05906A4DE523B8E6F0FD01"},"messageTimestamp":1717202012}],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"oZqW8kZSSb-ofnoYE-OxjQ","phoneId":"cda67831-a18d-4bc6-b119-c5b96098f2d1","identityId":{"type":"Buffer","data":"aPTpTemlefACWMyheCBNq0OXd/U="},"registered":true,"backupToken":{"type":"Buffer","data":"6GZLWoEGeP50+pwgIHoGxMCV7o4="},"registration":{},"pairingCode":"WJPCQP41","me":{"id":"22891386435:9@s.whatsapp.net","lid":"196499484971208:9@lid","name":"嘟戰搯┾榾锔忦潟攫潠嗮潠嶐潠嗮潠栶潠庰潠婐潠戔€潟叼潠氿潠岎潠楌潠嗮潠掟煂欚搯綄鈦┾仼"},"account":{"details":"CPik2P8BENbY6bIGGAEgACgA","accountSignatureKey":"BCiYkIOGtJbPYM+6Ov7GQHiziDlc3lMIqstJwg6QV1E=","accountSignature":"oTGMvsBxJVji7SAuO2Yhq6t0yYTw+u3cp7oz8Ws8HWjUeU1uvg4Bz0weOywdspcLg6VfVq/XZ67c2xnHrzFbCw==","deviceSignature":"75XaICPDzjCcpSukZEWFIkiLQhO4Ual72SGQZJRrVWLq/tl3VuFtC6VKT1JpyvYXrxhk5frUZUndLirEOwGcjQ=="},"signalIdentities":[{"identifier":{"name":"22891386435:9@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQQomJCDhrSWz2DPujr
+xkB4s4g5XN5TCKrLScIOkFdR"}}],"platform":"android","lastAccountSyncTimestamp":1717202010,"myAppStateKeyId":"AAAAAL/O"}'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = '𓆩❦𝕾𝕮𝕻ꕥ𓆪『🪶𝕭Ω𝕿🪽』' //ur bot name
global.ownernumber = '22899869601' //ur owner number
global.ownername = '🦄드림 가이 Xeon' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+916909137213"
global.creator = "916909137213@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["916909137213"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
