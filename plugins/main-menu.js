import { xpRange } from '../lib/levelling.js'
import ws from 'ws'

const tags = {
  'anime': 'ANIME',
  'juegos': 'JUEGOS',
  'main': 'INFO',
  'ia': 'IA',
  'search': 'SEARCH',
  'game': 'GAME',
  'serbot': 'SUB BOTS',
  'rpg': 'RPG',
  'sticker': 'STICKER',
  'group': 'GROUPS',
  'nable': 'ON / OFF',
  'premium': 'PREMIUM',
  'downloader': 'DOWNLOAD',
  'tools': 'TOOLS',
  'fun': 'FUN',
  'nsfw': 'NSFW',
  'cmd': 'DATABASE',
  'owner': 'OWNER',
  'audio': 'AUDIOS',
  'advanced': 'ADVANCED',
  'weather': 'WEATHER',
  'news': 'NEWS',
  'finance': 'FINANCE',
  'education': 'EDUCATION',
  'health': 'HEALTH',
  'entertainment': 'ENTERTAINMENT',
  'sports': 'SPORTS',
  'travel': 'TRAVEL',
  'food': 'FOOD',
  'shopping': 'SHOPPING',
  'productivity': 'PRODUCTIVITY',
  'social': 'SOCIAL',
  'security': 'SECURITY',
  'custom': 'CUSTOM'
}

let handler = async (m, { conn }) => {
  try {
    const userId = m.mentionedJid?.[0] || m.sender
    const user = global.db.data.users[userId]
    const name = await conn.getName(userId)
    const mode = global.opts["self"] ? "Privado" : "Público"
    const totalCommands = Object.keys(global.plugins).length
    const totalreg = Object.keys(global.db.data.users).length
    const uptime = clockString(process.uptime() * 1000)

      const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];

    const { exp, level } = user
    const { min, xp, max } = xpRange(level, global.multiplier)

    const help = Object.values(global.plugins).filter(p => !p.disabled).map(p => ({
      help: Array.isArray(p.help) ? p.help : (p.help ? [p.help] : []),
      tags: Array.isArray(p.tags) ? p.tags : (p.tags ? [p.tags] : []),
      limit: p.limit,
      premium: p.premium
    }))

    let menuText = `
┏━━━━━━━━━━━━━━━━━━━━━━┓
│ 👤 *𝙐𝙎𝙐𝘼𝙍𝙄𝙊:* @${userId.split('@')[0]}
│ 🤖 𝘽𝙊𝙏: ${(conn.user.jid === global.conn.user.jid ? '𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 🅥' : 'Prem    bot 🅑')}
│ 🎲 𝙈𝙊𝘿𝙊 𝘼𝘾𝙏𝙐𝘼𝙇: ${mode}
│ 📑 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊: ${totalreg}
│ ⏰ 𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀 𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿: ${uptime}
│ 📜 𝘾𝙊𝙈𝘼𝙉𝘿𝙊: ${totalCommands}
│ 🟢 𝙎𝙐𝘽-𝘽𝙊𝙏 𝘼𝘾𝙏𝙄𝙑𝙊𝙎: ${users.length}
┗━━━━━━━━━━━━━━━━━━━━━━┛
  𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘼𝙇𝙄𝙎𝙄𝘼𝘽𝙊𝙏-𝙇𝘾 ⭐
${readMore}
`

    for (let tag in tags) {
      const comandos = help.filter(menu => menu.tags.includes(tag))
      if (comandos.length === 0) continue

      menuText += `\n╭─ꨄ︎ *${tags[tag]}* ${getRandomEmoji()}\n`
      menuText += comandos.map(menu => menu.help.map(cmd =>
        `│ ꨄ︎ ${cmd}${menu.limit ? ' ◜⭐◞' : ''}${menu.premium ? ' ◜🪪◞' : ''}`
      ).join('\n')).join('\n')
      menuText += `\n┗━━━━━━━━━━━━━━━━━━┛`
    }

    menuText += `\n\n*ꨄ︎ © ᴇᴄʜᴏ ᴘᴏʀ ᴇʀᴇɴxs - ${botname}*`

    const imageUrl = 'https://files.catbox.moe/x1677y.jpg'
    await m.react('🟡')

    await conn.sendMessage(m.chat, {
  image: { url: imageUrl },
  caption: menuText,
  contextInfo: {
    mentionedJid: [m.sender],
    isForwarded: true
  }
}, { quoted: m });


  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error.', m)
    throw e
  }
}


handler.help = ['menu', 'menú'];
handler.tags = ['main'];
handler.command = ['menú', 'menu']; 

export default handler

// Extras
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function getRandomEmoji() {
  const emojis = ['⭐', '🟡', '⭐', '⭐']
  return emojis[Math.floor(Math.random() * emojis.length)]
}
