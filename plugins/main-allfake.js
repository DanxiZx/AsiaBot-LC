import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

// 👑 Información del Bot
global.creador = 'Wa.me/18493907272'
global.ofcbot = `Wa.me/${conn.user.jid.split('@')[0]}?text=⭐creador`
global.asistencia = 'Wa.me/51901930696'
global.namechannel = 'ꨄ︎ 𝙇𝙤𝙡𝙞 𝘾𝙡𝙪𝙗 ꨄ︎ 𝘾𝙝𝙖𝙣𝙣𝙚𝙡'
global.namechannel2 = 'ꨄ︎ 𝙇𝙤𝙡𝙞 𝘾𝙡𝙪𝙗 ꨄ︎'
global.namegrupo = 'ꨄ︎ 𝙇𝙤𝙡𝙞 𝘾𝙡𝙪𝙗 ꨄ︎'
global.namecomu = 'ꨄ︎ 𝙇𝙤𝙡𝙞 𝘾𝙡𝙪𝙗 ꨄ︎ 𝘾𝙤𝙢𝙪𝙣𝙞𝙩𝙮'
global.listo = 'ᴀǫᴜɪ ᴛɪᴇɴᴇs ʟᴏ ǫᴜᴇ ᴘᴇᴅɪsᴛᴇ ꨄ︎'
global.fotoperfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => catalogo,)

// 🗞 Canal del Bot
global.idchannel = '120363415670808219@newsletter'
global.canalIdM = ["120363415670808219@newsletter", "120363415670808219@newsletter"]
global.canalNombreM = ["ꨄ︎ 𝙇𝙤𝙡𝙞 𝘾𝙡𝙪𝙗 ꨄ︎ 𝘾𝙝𝙖𝙣𝙣𝙚𝙡", "ꨄ︎ 𝙇𝙤𝙡𝙞 𝘾𝙡𝙪𝙗 ꨄ︎"]
global.channelRD = await getRandomChannel()

//fechas
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

// 🔁 Reacciones Globales
global.rwait = '🟡'
global.done = '✅'
global.error = '✖️'
global.msm = '⚠️'

global.emoji0 = '⭐'
global.emoji1 = '🟡'
global.emoji2 = '🌟'
global.emoji3 = 'ꨄ︎'
global.emoji4 = 'ꨄ︎'
global.emoji5 = '⚡'
global.emojis = [emoji0, emoji2, emoji3, emoji4, emoji5].getRandom()

global.wait = 'ꨄ︎ *Espera un momento ...*'
global.waitt = global.wait
global.waittt = global.wait
global.waitttt = global.wait

//Enlaces
var canal = 'https://chat.whatsapp.com/FkBNSxVurdR2dX6m81qaZI'  
let canal2 = 'https://whatsapp.com/channel/0029Vb9xYU9EwEjv6fBq9P2m'
var git = 'https://github.com/DanxiZx'
var github = 'https://github.com/DanxiZx/AsiaBot-LC' 
let correo = 'erenxz01@gmail.com'

global.redes = [canal, canal2, git, github, correo].getRandom()

//Imagen
let category = "imagen"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.arrayBuffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = m.pushName || 'Anónimo'
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
let pp = null; try { pp = await conn.profilePictureUrl('50433191934@s.whatsapp.net', 'image') } catch (e) { pp = null } global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363402481697721@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `Erenxs creador 🌟`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Erenxs creador✨,;;;\nFN:Deylin creador\nitem1.TEL;waid=18493907272:18493907272\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp ? await (await fetch(pp)).buffer() : null, thumbnail: null, sendEphemeral: true }}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }
}}, { quoted: m }





global.icono = [ 
'https://files.catbox.moe/mb00xe.jpg',
'https://files.catbox.moe/2skb4v.jpg',
'https://files.catbox.moe/byt0ax.jpg',
'https://files.catbox.moe/0shnqp.jpg',
'https://files.catbox.moe/4x6b5t.jpg'
].getRandom()

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: 100, newsletterName: channelRD.name, }, externalAdReply: { showAdAttribution: true, title: textbot, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}



export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}