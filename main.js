/*
====[ ENGLISH ]====
Well This Time It's A New Bot
Made By Turbo And Amru
Don't Recode This Bot
If You What To Make A Bot
Contact https://wa.me/916380260672
This Is A Wa Bot
Don't Sell This Sc
This Is Complety Free
*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./database/lib/functions')
const { color } = require('./database/lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))
battery = 'Loading...'
session = setting.session


require('./Turbo.js')
nocache('./Turbo.js', module => console.log(`${module} telah di update!`))

const starts = async (Turbo = new WAConnection()) => {
    Turbo.logger.level = 'warn'
    Turbo.version = [2, 2142, 12]
    Turbo.browserDescription = [ 'Turbo Mods', 'Chrome', '3.0' ]
    Turbo.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code in only 20 seconds !!'))
    })

    fs.existsSync(`./${session}.json`) && Turbo.loadAuthInfo(`./${session}.json`)
    Turbo.on('connecting', () => {
        start('2', 'Loading ...')
    })
    Turbo.on('open', () => {
        success('2', 'Connected ✓')
    })
    await Turbo.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${session}.json`, JSON.stringify(Turbo.base64EncodedAuthInfo(), null, '\t'))

    Turbo.on('chat-update', async (message) => {
        require('./Turbo.js')(Turbo, message, _welkom)
    })
    Turbo.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		battery = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Battery : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Turbo.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})
Turbo.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await Turbo.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await Turbo.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_group = await Turbo.getProfilePicture(anu.jid)
      } catch (e) {
        pp_group =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      buffer = await getBuffer(pp_user)
      if (!isWelkom) return
      if (anu.action == 'add' && !mem.includes(Turbo.user.jid)) {
      const mdata = await Turbo.groupMetadata(anu.jid)
      const memeg = mdata.participants.length
      const thu = await Turbo.getStatus(anu.participants[0], MessageType.text)
      const num = anu.participants[0]
      const bosco1 = await Turbo.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
      let v = Turbo.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = v.vname || v.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      teks = `𝙃𝙚𝙡𝙡𝙤 𝙗𝙧𝙤 *@${num.split('@')[0]}*
𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙜𝙧𝙤𝙪𝙥 *${mdata.subject}*

𝙃𝙤𝙥𝙚 𝙮𝙤𝙪 𝙡𝙞𝙠𝙚 𝙞𝙩
𝙉𝙚𝙫𝙚𝙧 𝙢𝙖𝙠𝙚 𝙖 𝙛𝙪𝙨𝙨
𝘼𝙣𝙙 𝙙𝙤𝙣'𝙩 𝙛𝙤𝙧𝙜𝙚𝙩 𝙩𝙤 𝙧𝙚𝙖𝙙 𝙩𝙝𝙚 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣`
      welcomeBut = [{buttonId:`#menu`,buttonText:{displayText:'menu'},type:1}, {buttonId:`#infogroup`,buttonText:{displayText:'infogroup'},type:1}]
      welcomeButt = { contentText: `${teks}`, footerText: `𝙅𝙤𝙞𝙣 𝙈𝙚𝙨𝙨𝙖𝙜𝙚`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
      Turbo.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
      if (anu.action == 'remove' && !mem.includes(Turbo.user.jid)) {
      const mdata = await Turbo.groupMetadata(anu.jid)
      const num = anu.participants[0]
      const bosco3 = await Turbo.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
      let w = Turbo.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = w.vname || w.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      memeg = mdata.participants.length
      out = `𝙂𝙤𝙤𝙙𝙗𝙮𝙚 @${num.split('@')[0]}\n𝙈𝙚𝙣𝙩𝙖𝙡𝙡𝙮 𝙨𝙖𝙛𝙚 ?`
      goodbyeBut = [{buttonId:`#menu`,buttonText:{displayText:'menu'},type:1}, {buttonId:`#infogroup`,buttonText:{displayText:'infogroup'}, type:1}]
      goodbyeButt = { contentText: `${out}`, footerText: `𝙇𝙚𝙖𝙫𝙚 𝙈𝙚𝙨𝙨𝙖𝙜𝙚`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
      Turbo.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * param {string} module Module name or path
 * param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
