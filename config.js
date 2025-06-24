import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 



// 🌟 𝗣 𝗥 𝗢 𝗣 𝗜 𝗘 𝗧 𝗔 𝗥 𝗜 𝗢 | 𝗦 𝗔 𝗙 𝗙 🌟
global.owner = [
['18493907272', '🌟ᴄʀᴇᴀᴅᴏʀ ʙʏ ᴇʀᴇɴxs🌟', true],
['', '🥷🏽ᵃⁿᵍᵉˡⁱᵗᵒ ᵒᶠⁱᶜⁱᵃˡ ᴍɪ ʜᴇʀᴍᴀɴᴏ🥷🏼, true],
['', '', true],
//['numero', 'nombre', true],
];

//🛠️ sᴏʟᴏ ᴘᴀʀᴀ ᴘᴇʀsᴏɴᴀʟ 🛠️
global.mods = [''];
global.suittag = ['18493907272'];
global.prems = [];

// 📝 ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴘᴇʀsᴏɴᴀʟ 
global.libreria = 'Baileys';
global.baileys = '@whiskeysockets/baileys';
global.nameqr = 'AsiaBot';
global.namebot = 'AsiaBot-LC';
global.sessions = 'Sessions';
global.jadi = 'JadiBots';
global.pikaJadibts = true;

// ⭐ ᴅᴀᴛᴏs ʏ ᴇsᴛɪʟʟᴏ ⭐
global.packname = '❀ ᴀsɪᴀ...ʙᴏᴛ ❀';
global.botname = 'ꨄ︎ ᴀsɪᴀʙᴏᴛ-ʟᴄ ꨄ︎';
global.wm = '✿︎ ᴀsɪᴀʙᴏᴛ-ᴍᴅ ✿︎';
global.dev = 'ꨄ︎ ᴅᴇsᴀʀᴏʟʟᴀᴅᴏ ᴘᴏʀ ʟᴏʟɪ ᴄʟᴜʙ ᴘʀᴏʏᴇᴄᴛ ꨄ︎';
global.textbot = 'ᴀsɪᴀʙᴏᴛ-ʟᴄ • ᴇᴄʜᴏ ᴘᴏʀ ᴇʀᴇɴxs';
global.etiqueta = 'ꨄ︎ ʟᴏʟɪ ᴄʟᴜʙ ꨄ︎';

// 🌸 ᴍᴏɴᴇᴅᴀ ʏ ᴀᴠᴀᴛᴀʀᴇs 🌸
global.moneda = 'Yenes';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.photoSity = [catalogo]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://chat.whatsapp.com/ItBEef1YsmB4BH78UMIsfQ'
global.channel2 = 'https://whatsapp.com/channel/0029VapUpsT9mrGcypZy141s'
global.md = 'https://github.com/DanxiZx/AsiaBot-LC'
global.correo = 'erenxz01@gmail.com'
global.cn ='https://whatsapp.com/channel/0029Vaz6RTR0LKZIKwudX32x';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363415670808219@newsletter',
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.MyApiRestBaseUrl = 'https://api.cafirexos.com';
global.MyApiRestApikey = 'BrunoSobrino';
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['kurumi']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})