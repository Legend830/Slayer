/*

====[ ENGLISH ]====

Well This Time It's A New Bot
Made By Turbo And Amru
Don't Recode This Bot
If You What To Make A Bot
Contact https://wa.me/916380260672
This Is A wa Bot
Don't Sell This Sc
This Is Complety Free
*/


const
{
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const skh = require('skh-api')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { color, bgcolor } = require('./database/lib/color')
const { fetchJosn, kyun, fetchText } = require('./database/lib/fetcher')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./database/lib/functions')
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))

//━━━━[ Setting ]━━━━//

owner = setting.OwnerNumber
owner2 = `${owner}@s.whatsapp.net`
botname = setting.BotName
ownername = setting.OwnerName
const fakeimage = fs.readFileSync('./database/image/thumb.jpg')
const thumb = fs.readFileSync('./database/image/thumb.jpg')
const menuvid = fs.readFileSync('./database/image/menu.mp4')

//━━━━[ Database ]━━━━//

const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))

//━━━━[ Time ]━━━━//

let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })


const time2 = moment().tz("Asia/kolkata").format("HH:mm:ss");
if (time2 < "24:59:00") {
  var sayingtime = "𝐺𝑜𝑜𝑑 𝑁𝑖𝑔𝒉𝑡🌃";
}
if (time2 < "19:00:00") {
  var sayingtime = "𝐺𝑜𝑜𝑑 𝐸𝑣𝑒𝑛𝑖𝑛𝑔🌞";
}
if (time2 < "18:00:00") {
  var sayingtime = "𝐺𝑜𝑜𝑑 𝐴𝑓𝑡𝑒𝑟𝑛𝑜𝑜𝑛🌄";
}
if (time2 < "15:00:00") {
  var sayingtime = "𝐺𝑜𝑜𝑑 𝐴𝑓𝑡𝑒𝑟𝑛𝑜𝑜𝑛☀️";
}
if (time2 < "11:00:00") {
  var sayingtime = "𝐺𝑜𝑜𝑑 𝑀𝑜𝑟𝑛𝑖𝑛𝑔🌅";
}
if (time2 < "05:00:00") {
  var sayingtime = "𝐺𝑜𝑜𝑑 𝑁𝑖𝑔𝒉𝑡🌃";
}

//━━━━[ Module Exports ]━━━━//

module.exports = Turbo = async (Turbo, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Turbo.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `916380260672@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Turbo.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await Turbo.chats.all()
		const groupMetadata = isGroup ? await Turbo.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Turbo.user.jid : Turbo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Turbo.user.name : conts.notify || conts.vname || conts.name || '-'
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		
//━━━━[ Mess And Others ]━━━━//

		mess = {
		wait: 'Processing Please Wait',
		eror: 'Sorry An Error Cccurred !!',
		success: 'Success',
		error: {
		stick: 'Sorry It`s Not A Sticker !!',
		Iv: 'Invalid Link !!'
		},
		only: {
		group: 'Group Special Features !!',
		owner: 'Owner`s Special Features !!',
		admin: 'Admin Special Features !!',
		Badmin: 'Please Make Bot Admin First !!'
		}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Turbo.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Turbo.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Turbo.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Turbo.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			Turbo.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const runtime = function (seconds) {
		seconds = Number(seconds);
		var d = Math.floor(seconds / (3600 * 24));
		var h = Math.floor((seconds % (3600 * 24)) / 3600);
		var m = Math.floor((seconds % 3600) / 60);
		var s = Math.floor(seconds % 60);
		var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
		var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
		var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
		var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
		return dDisplay + hDisplay + mDisplay + sDisplay;
		};
		
//━━━━[ Button ]━━━━//

		const sendButton = async (from, context, fortext, but, mek) => {
		buttonMessages = {
		contentText: context,
		footerText: fortext,
		buttons: but,
		headerType: 1
		}
		Turbo.sendMessage(from, buttonMessages, buttonsMessage, {
		quoted: ftrol
		})
		}
		const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        Turbo.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
		jadinya = await Turbo.prepareMessage(from, img, image)
		buttonMessagesI = {
		imageMessage: jadinya.message.imageMessage,
		contentText: context,
		footerText: fortext,
		buttons: but,
		headerType: 4
		}
		Turbo.sendMessage(from, buttonMessagesI, buttonsMessage, {
		quoted: ftrol,
		contexInfo: ftrol
		})
        }
        const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
        kma = vid1
        mhan = await Turbo.prepareMessage(from, kma, video)
        const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5
        }
        Turbo.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━[ Gathering Fake ]━━━━//

        const fakeitem = (teks) => { Turbo.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./database/image/thumb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${sayingtime} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
		const ftrol = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		orderMessage: {
		itemCount : 123,
		status: 1,
		surface : 1,
		message: `${sayingtime} ${pushname}`, 
		orderTitle: `${sayingtime} ${pushname}`,
		thumbnail: thumb, //Gambarnye
		sellerJid: '0@s.whatsapp.net' 
		}
		}
		}
		const ftok = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
		"productMessage": {
		"product": {
		"productImage":{
		"mimetype": "image/jpeg",
		"jpegThumbnail": thumb //The picture
		},
		"title": `${sayingtime} ${pushname}`, //Kasih namalu 
		"description": `${botname}`, 
		"currencyCode": "USD",
		"priceAmount1000": "555555555555555",
		"retailerId": `${sayingtime} ${pushname}`,
		"productImageCount": 1
		},
		"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
		}
		const floc = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		liveLocationMessage: {
		caption: `${sayingtime} ${pushname}`,
		jpegThumbnail: thumb
		}
		}
		}
		const fdoc = {
		key : {
		participant : '0@s.whatsapp.net'
		},
		message: {
		documentMessage: {
		title: `${sayingtime} ${pushname}`, 
		jpegThumbnail: thumb
		}
		}
		}
		const fvid = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"videoMessage": { 
		"title": `${sayingtime} ${pushname}`,
		"h": `${sayingtime} ${pushname}`,
		'duration': '99999', 
		'caption': `${sayingtime} ${pushname}`,
		'jpegThumbnail': thumb
		}
		}
		}
		const fgi = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"videoMessage": { 
		"title": `${sayingtime} ${pushname}`,
		"h": `${sayingtime} ${pushname}`,
		'duration': '99999', 
		'gifPlayback': 'true', 
		'caption': `${sayingtime} ${pushname}`,
		'jpegThumbnail': thumb
		}
		}
		}
		const fvoc = {
		key: { 
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
		},
		message: { 
		"audioMessage": {
		"mimetype":"audio/ogg; codecs=opus",
		"seconds": "99999",
		"ptt": "true"
		}
		} 
		}
		const fonceimg = {
		key: {
		fromMe: false,
		participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {}) },
		message: {
		imageMessage: {
		viewOnce: true
		},
		},
		};
		const foncevid = { 
		key: {fromMe: false, remoteJid: "6281315995629@g.us", participant: '0@s.whatsapp.net'}, 
		message: { 
		videoMessage: { 
		viewOnce: true
		},
		},
		};
        
//━━━━[ Storage ]━━━━//

        const hideTag = async function(from, text){
        let anu = await Turbo.groupMetadata(from)
        let members = anu.participants
        let ane = []
        for (let i of members){
        ane.push(i.jid)
        }
        Turbo.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./database/image/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
        }
        const sendStickerFromUrl = async(to, url) => {
		var names = Date.now() / 10000;
		var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
		};
		download(url, './stik' + names + '.png', async function () {
		console.log('selesai');
		let filess = './stik' + names + '.png'
		let asw = './stik' + names + '.webp'
		exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
		let media = fs.readFileSync(asw)
		Turbo.sendMessage(to, media, MessageType.sticker,{quoted:mek})
		fs.unlinkSync(filess)
		fs.unlinkSync(asw)
		});
		});
		}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
		if(mids.length > 0){
		text = normalizeMention(to, text, mids)
		}
		const fn = Date.now() / 10000;
		const filename = fn.toString()
		let mime = ""
		var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
		mime = res.headers['content-type']
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
		};
		download(url, filename, async function () {
		console.log('done');
		let media = fs.readFileSync(filename)
		let type = mime.split("/")[0]+"Message"
		if(mime === "image/gif"){
		type = MessageType.video
		mime = Mimetype.gif
		}
		if(mime.split("/")[0] === "audio"){
		mime = Mimetype.mp4Audio
		}
		Turbo.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
		fs.unlinkSync(filename)
		});
		}   
		if (budy.includes("https://chat.whatsapp.com/")) {
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(` *「 GROUP LINK DETECTOR 」*\nYou sent the group chat link, sorry you were kicked from the group`)
		setTimeout(() => {
		Turbo.groupRemove(from, [kic]).catch((e) => { reply(`BOTS MUST BE ADMIN`) })
		}, 0)
		}
		if (budy.length > 3500) {
		if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return
		reply('Mark read\n'.repeat(300))
		reply(`*「 VIRTEX DETECTOR 」*\n\nYou sent a virtex, sorry you were kicked from the group`)
		console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
		Turbo.groupRemove(from, [sender])
		}
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(senderr.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(senderr.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//━━━━[ All Feature ]━━━━//

case 'menu':
case 'help':
Turbo.updatePresence(from, Presence.recording)
stst = await Turbo.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? 'Not Found' : stst.status
timestampe = speed();
latensie = speed() - timestampe
menu =`Hi ${pushname} ${sayingtime}


╭─⬣ 「 TODAY 」 ⬣
│🔖 ${date}
│🔖 ${waktu}
│🔖 ${sayingtime}
└⬣

╭─⬣ 「 INFO BOT 」 ⬣
│🔖 Bot Name : ${botname}
│🔖 Owner Name : ${ownername}
│🔖 Owner Number : @${owner2.split("@")[0]}
│🔖 Battery : ${battery}_
│🔖 Runtime : ${runtime(process.uptime())}
│🔖 Speed : ${latensie.toFixed(4)} second
└⬣

╭─⬣ 「 INFO USER 」 ⬣
│🔖 User Name : ${pushname}
│🔖 Bio : ${stst}_
│🔖 User Number : @${senderr.split("@")[0]}
└⬣`

let footerText = `*_© ${ownername} || 2022_*`
let buttons = [{buttonId: `${prefix}allmenu`, buttonText: { displayText: '𝘼𝙇𝙇𝙈𝙀𝙉𝙐' }, type: 1 },{buttonId: `${prefix}owner`, buttonText: { displayText: '𝙊𝙒𝙉𝙀𝙍' }, type: 1 }]
let vidmenu = await Turbo.prepareMessage('0@c.us', menuvid, video, { thumbnail: fakeimage })
const buttonMessages = {
videoMessage: vidmenu.message.videoMessage,
contentText: menu,
footerText: footerText,
buttons: buttons,
headerType: 5
}
Turbo.sendMessage(from, buttonMessages, MessageType.buttonsMessage, { quoted: ftok, contextInfo: { mentionedJid: [senderr,owner2]}})
break
case 'allmenu':
menu =`Hi ${pushname} @${senderr.split("@")[0]} ${sayingtime}


╭─❒ *⌜ INFO MENU ⌟* ❒
├ ㋡ ${prefix}runtime
├ ㋡ ${prefix}speed
├ ㋡ ${prefix}rules
├ ㋡ ${prefix}ssweb *Url*
├ ㋡ ${prefix}delete *Reply to bot messages*
└❏

╭─❒ *⌜ GROUP MENU ⌟* ❒
├ ㋡ ${prefix}antilink *on / off*
├ ㋡ ${prefix}welcome *on / off*
├ ㋡ ${prefix}antivirtex *on / off*
├ ㋡ ${prefix}promote *@tag*
├ ㋡ ${prefix}demote *@tag*
├ ㋡ ${prefix}add *628xxxx*
├ ㋡ ${prefix}kick *@tag / Reply*
├ ㋡ ${prefix}setppgroup *Reply Image*
├ ㋡ ${prefix}setdesc *Text*
├ ㋡ ${prefix}setname *Text*
├ ㋡ ${prefix}hidetag *Text*
├ ㋡ ${prefix}linkgroup
├ ㋡ ${prefix}listonline
├ ㋡ ${prefix}resetlinkgroup
├ ㋡ ${prefix}tagall
├ ㋡ ${prefix}infogroup
├ ㋡ ${prefix}open
├ ㋡ ${prefix}close
├ ㋡ ${prefix}tagme
├ ㋡ ${prefix}leave
└❏

╭─❒ *⌜ DOWNLOADER MENU ⌟* ❒
├ ㋡ ${prefix}ytmp3 *Link*
├ ㋡ ${prefix}ytmp4 *Link*
├ ㋡ ${prefix}tiktoknowm *Link*
├ ㋡ ${prefix}tiktokwm *Link*
└❏

╭─❒ *⌜ STICKER MENU ⌟* ❒
├ ㋡ ${prefix}sticker *Reply Image*
├ ㋡ ${prefix}toimg *Reply Sticker*
└❏

╭─❒ ⌜ OWNER MENU ⌟ ❒
├ ㋡ ${prefix}bc *Text*
├ ㋡ ${prefix}bc2 *Text*
├ ㋡ ${prefix}bctext *Text*
├ ㋡ ${prefix}bcgc *Text*
├ ㋡ ${prefix}setnamebot *Text*
├ ㋡ ${prefix}setbiobot *Text*
├ ㋡ ${prefix}setppbot *text*
└❏`
Turbo.sendMessage(from, { contentText: `${menu}`, footerText: `*_© ${ownername} || 2022_*`, buttons: [{ buttonId: `${prefix}runtime`, buttonText: { displayText: '𝙍𝙐𝙉𝙏𝙄𝙈𝙀' }, type: 1 },{ buttonId: `${prefix}speed`, buttonText: { displayText: '𝙎𝙋𝙀𝙀𝘿' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,owner]}}}, 'buttonsMessage')
break

//━━━━[ Feature Group ]━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Type :\n${prefix}welcome on to enable\n${prefix}welcome off to disable`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('```welcome is enable !!```')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Successfully enable the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('```welcome has been off before !!```')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Successfully disable the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Type :\n${prefix}antilink on to enable\n${prefix}antilink off to disable`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply('```Antilink is enable !!```')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Successfully enable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Successfully disable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Type :\n${prefix}antivirtex on to enable\n${prefix}antivirtex off to disable`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply('```Antivirtex is enable !!```')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Successfully enable the antivirtex feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Successfully disable the antilink feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('```on to enable, off to disable```')
}
break
case 'groupopen':
case 'open':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`Successful opening group\`\`\` *${groupMetadata.subject}*`)
Turbo.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'groupclose':
case 'close':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`Successfully closing the group\`\`\` *${groupMetadata.subject}*`)
Turbo.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgroup':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Turbo.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Turbo.sendMessage(from, yeh, text, { quoted: mek })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target you want to be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Order received, you become admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Turbo.groupMakeAdmin(from, mentioned)
} else {
mentions(`Order received, @${mentioned[0].split('@')[0]} You become admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Turbo.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target you want to not be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Order received, you are not an admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Turbo.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Order received, Lower : @${mentioned[0].split('@')[0]} Become a member`, mentioned, true)
Turbo.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Who wants to add ??')
if (args[0].startsWith('08')) return reply('Use country code bro')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Turbo.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Failed to add target, maybe because in private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag the target you want to kick !");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Turbo.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Turbo.groupRemove(from, [anu]);
reply(mess.success);
} else {
Turbo.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Turbo.groupUpdateSubject(from, `${body.slice(9)}`)
Turbo.sendMessage(from, `\`\`\`Success in Changing the Group Name to\`\`\` *${body.slice(9)}*`, text, { quoted: mek })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Turbo.groupUpdateDescription(from, `${body.slice(9)}`)
Turbo.sendMessage(from, `\`\`\`Successfully Changed Group Description\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: mek })
break
case 'setppgroup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Turbo.downloadMediaMessage(encmedia)
Turbo.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Send or tag an image with the caption ${prefix}setpp`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogroup':
case 'groupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Turbo.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${from}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Group :* @${groupMetadata.owner.split('@')[0]}\n*Number of admins :* ${groupAdmins.length}\n*Number of participants :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Enable' : 'Disable'}\n*AntiLink :* ${isAntiLink ? 'Enable' : 'Disable'}\n*Desc :* \n\n${groupMetadata.desc}`
Turbo.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgroup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Turbo.query({json, expect200: true})
reply('Successfully reset group link')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Turbo.chats.get(ido).presences), Turbo.user.jid]
Turbo.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'tagme':
if (!isGroup) return reply(mess.only.group)
mentions(`Tag : @${sender.split("@")[0]}`, [sender], true)
break
case 'leave':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
setTimeout( () => {
Turbo.groupLeave(from) 
}, 2000)
setTimeout( () => {
reply('Byee... , the bot will leave the group')
}, 0)
break

//━━━━[ Feature TextMaker ]━━━━//
case 'magma':
     if (args.length < 1) return reply('text?')
     mag = body.slice(6)
     magbuf = await getBuffer(`https://api.reysekha.xyz/api/textpro/magma?text=${mag}&apikey=apirey`)
     Turbo.sendMessage(from, magbuf, image, )
     break
case 'hallowen':
     if (args.length < 1) return reply('text?')
     ha = body.slice(9)
     habuf = await getBuffer(`https://api.reysekha.xyz/api/textpro/hallowen-text?text=${ha}&apikey=apirey`)
     Turbo.sendMessage(from, habuf, image, )
     break
case 'neonlight':
     if (args.length < 1) return reply('text?')
     ne = body.slice(10)
     hane = await getBuffer(`https://api.reysekha.xyz/api/textpro/neon-light?text=${ne}&apikey=apirey`)
     Turbo.sendMessage(from, hane, image, )
     break
case 'broken':
     if (args.length < 1) return reply('text?')
     bro = body.slice(7)
     brobef = await getBuffer(`https://api.reysekha.xyz/api/textpro/broken-glass?text=${bro}&apikey=apirey`)
     Turbo.sendMessage(from, brobef, image, )
     break
case 'artpaper':
     if (args.length < 1) return reply('text?')
     art = body.slice(9)
     brobef = await getBuffer(`https://api.reysekha.xyz/api/textpro/art-papper?text=${art}&apikey=apirey`)
     Turbo.sendMessage(from, brobef, image, )
     break


//━━━━[ Feature Downloader ]━━━━//

case 'ytmp3':
if (args.length < 1) return reply("Enter youtube url !!")
url = args.join(' ')
reply(`_audio is being processed, please wait a while longer_`)
anu = await fetchJson(`https://apiTurbo.herokuapp.com/api/download/ytmp3?url=${url}&apikey=NisaaCantik`)
ytmp3 = await getBuffer(anu.result.url)
Turbo.sendMessage(from, ytmp4, audio, )
break
case 'ytmp4':
if (args.length < 1) return reply("Enter youtube url !!")
url = args.join(' ')
reply(`_video is being processed, please wait a while longer_`)
anu = await fetchJson(`https://apiTurbo.herokuapp.com/api/download/ytmp4?url=${url}&apikey=NisaaCantik`)
ytmp4 = await getBuffer(anu.result.url)
Turbo.sendMessage(from, ytmp4, video, {caption:`Done`, thumbnail:Buffer.alloc(0), quoted:mek})
break
case 'tiktoknowm':
anu = await fetchJson(`https://apiTurbo.herokuapp.com/api/download/tiktoknowm?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.result.nowatermark)
Turbo.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break
case 'tiktokwm':
anu = await fetchJson(`https://apiTurbo.herokuapp.com/api/download/tiktokwm?url=${q}&apikey=NisaaCantik`)
tiktok = await getBuffer(anu.video_URL.vid_wm)
Turbo.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})
break

//━━━━[ Feature Sticker ]━━━━//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Turbo.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Turbo.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Turbo.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Turbo.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply('reply sticker')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Turbo.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Failed, when converting sticker to image')
buffer = fs.readFileSync(ran)
Turbo.sendMessage(from, buffer, image, {quoted: mek, caption: 'here'})
fs.unlinkSync(ran)
})
break

//━━━━[ Feature Owner ]━━━━//

case 'bc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('The text?')
anu = await Turbo.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '𝙈𝙀𝙉𝙐'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: '𝙊𝙒𝙉𝙀𝙍'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '𝘉 𝘳 𝘰 𝘢 𝘥 𝘤 𝘢 𝘴 𝘵',
buttons: buttonss,
headerType: 1
}
await Turbo.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: fgi})
}
reply(`Broadcast Success`)
break
case 'bc2':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
if (args.length < 1) return reply('text?')
anu100 = await Turbo.chats.all()
if (isMedia && !Turbo.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc100 = await Turbo.downloadMediaMessage(encmedia)
for (let _ of anu100) {
Turbo.sendMessage(_.jid, bc100, image, {quoted: fgi, caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
}
reply('Broadcast Success')
} else {
for (let _ of anu100) {
Turbo.sendMessage(_.jid, 
{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
"footerText": `*_© ${ownername} || 2022_*\n*_${waktu}_*`,
"buttons": [
{"buttonId": `${prefix}menu`,
"buttonText": {"displayText": "𝙈𝙀𝙉𝙐"
},"type": "RESPONSE"}
], "headerType": 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fakeimage,
}}, MessageType.buttonsMessage )
}
reply('Broadcast Success')
}
break
case 'bctext':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
anu = await Turbo.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await Turbo.downloadMediaMessage(encmedia)
for (let _ of anu) {
Turbo.sendMessage(_.jid, bc, image, { caption: `[ BROADCAST IMAGE ]\n\n${body.slice(4)}` })
}
reply('Broadcast Success')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(7)}\n\n*_BROADCAST_*`)
}
reply('Broadcast Success')
}
break
case 'bcgc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('.......')
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bcgc = await Turbo.downloadMediaMessage(encmedia)
for (let _ of groupMembers) {
Turbo.sendMessage(_.jid, bcgc, image, { caption: `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}` })
}
reply('')
} else {
for (let _ of groupMembers) {
sendMess(_.jid, `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
}
reply('Success broadcast group')
}
break
case 'clearall':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
anu = await Turbo.chats.all()
Turbo.setMaxListeners(25)
for (let _ of anu) {
Turbo.deleteChat(_.jid)
}
reply('Successfully delete all chat')
break
case 'setnamebot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Text?')
namebot = body.slice(11)
Turbo.updateProfileName(namebot)
reply(`Success in changing the name to *${body.slice(11)}*`)
break
case 'setbiobot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('text?')
bio = body.slice(10)
Turbo.setStatus(`${bio}`)
reply(`Success changing bio to *${body.slice(10)}*`)
break
case 'setppbot':
if (!isQuotedImage) return reply('Reply imagenya!')
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await Turbo.downloadAndSaveMediaMessage(enmediau)
await Turbo.updateProfilePicture(botNumber, mediau)
reply('_Successfully changing bot profile photo')
break
case 'setlogo':
if (!isOwner) return reply(mess.only.owner)
if (((isMedia && !mek.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
hermit = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek;
ser = await Turbo.downloadMediaMessage(hermit);
fs.writeFileSync('./database/image/thumb.jpg', ser);
fs.writeFileSync('./database/image/slayer.jpg', ser);
reply("Success");
} else {
reply(`Send a picture with a caption ${prefix}setthumb`);
}
break
case 'setvideo':
case 'setmenuvideo':
if (!isOwner) return reply(mess.only.owner)
if (((isMedia && !mek.message.videoMessage) || isQuotedVideo || isQuotedVideo) && args.length == 0) {
hermit = isQuotedVideo || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek;
ser = await Turbo.downloadMediaMessage(hermit);
fs.writeFileSync('./database/image/menu.mp4', ser);
reply("Success");
} else {
reply(`Send a video with a caption ${prefix}setthumb`);
}
break
//━━━━[ Feature Other ]━━━━//

case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break;
case 'ping':
case 'speed':
timestampe = speed();
latensie = speed() - timestampe
reply(`「 *𝙎𝙋𝙀𝙀𝘿* 」\nRespond in ${latensie.toFixed(4)} Second 💬`)
break
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Ownernya ${botname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Turbo.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('*_that`s my owner_*')
break
case 'ssweb':
case 'ss':
if (args.length < 1) return reply(`Where's the url bro?`)
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Turbo.sendMessage(from, buff, image, {quoted: mek, caption : teks})
break
case 'd':
case 'del':
case 'delete':
Turbo.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'rules':
menu = `*_RULES BOT_*

1. Don't spam bots.
Sanctions: *Block*

2. Don't call bots.
Sanctions: *Block*

3. Don't exploit bots.
Sanctions: *Permanen Block*

If you understand the rules, please type *${prefix}menu* to get started!

──「 *${botname}* 」──`
fakeitem(menu)
break

//━━━━[ End of Features ]━━━━//

default:
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}
