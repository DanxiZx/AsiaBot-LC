let WAMessageStubType = (await import('@whiskeysockets/baileys')).default

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return

  const fkontak = {
    key: {
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "pikachu-bot"
    },
    message: {
      contactMessage: {
        displayName: "PikachuBot",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Pikachu;Bot;;;\nFN:PikachuBot Oficial\nORG:PikachuBot Team;\nTEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nEMAIL;type=INTERNET:soporte@pikachubot.net\nEND:VCARD`
      }
    },
    participant: "0@s.whatsapp.net"
  }

  let chat = global.db.data.chats[m.chat]
  let usuario = `@${m.sender.split`@`[0]}`
  let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || 'catalogo.jpg'

  const borde = "⚡━━━━━━━━━━━━━━⚡"
  const medio = "│  ⚡ PikachuBot ⚡"
  const fin =   "⚡━━━━━━━━━━━━━━⚡"

  let nombre = `${borde}\n${medio}\n╰➤ ${usuario} \ncambió el nombre del grupo.\n   Nuevo nombre: *${m.messageStubParameters[0]}*\n${fin}`
  let foto = {
    image: { url: pp },
    caption: `${borde}\n${medio}\n╰➤ ${usuario} \nactualizó la foto del grupo.\n   ¡Una nueva aventura eléctrica comienza!\n${fin}`,
    mentions: [m.sender]
  }
  let edit = `${borde}\n${medio}\n╰➤ ${usuario} \nmodificó la configuración del grupo.\n   Ahora *${m.messageStubParameters[0] == 'on' ? 'solo admins' : 'todos'}* pueden editar info.\n${fin}`
  let newlink = `${borde}\n${medio}\n╰➤ ${usuario} \nrestableció el enlace del grupo.\n   ¡Cuídalo como si fuera una Pokébola legendaria!\n${fin}`
  let status = `${borde}\n${medio}\n╰➤ El grupo fue *${m.messageStubParameters[0] == 'on' ? 'cerrado' : 'abierto'}* por ${usuario}.\n   Ahora *${m.messageStubParameters[0] == 'on' ? 'solo admins' : 'todos'}* pueden enviar mensajes.\n${fin}`
  let admingp = `${borde}\n${medio}\n╰➤ *@${m.messageStubParameters[0].split`@`[0]}* ahora es *admin*.\n   Acción realizada por ${usuario}\n${fin}`
  let noadmingp = `${borde}\n${medio}\n╰➤ *@${m.messageStubParameters[0].split`@`[0]}* ya no es *admin*.\n   Acción realizada por ${usuario}\n${fin}`

  if (chat.detect && m.messageStubType == 21) {
    await conn.sendMessage(m.chat, { text: nombre, mentions: [m.sender] }, { quoted: fkontak })

  } else if (chat.detect && m.messageStubType == 22) {
    await conn.sendMessage(m.chat, foto, { quoted: fkontak })

  } else if (chat.detect && m.messageStubType == 23) {
    await conn.sendMessage(m.chat, { text: newlink, mentions: [m.sender] }, { quoted: fkontak })

  } else if (chat.detect && m.messageStubType == 25) {
    await conn.sendMessage(m.chat, { text: edit, mentions: [m.sender] }, { quoted: fkontak })

  } else if (chat.detect && m.messageStubType == 26) {
    await conn.sendMessage(m.chat, { text: status, mentions: [m.sender] }, { quoted: fkontak })

  } else if (chat.detect && m.messageStubType == 29) {
    await conn.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`] }, { quoted: fkontak })

  } else if (chat.detect && m.messageStubType == 30) {
    await conn.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`] }, { quoted: fkontak })
  }
}