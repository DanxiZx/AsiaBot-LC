
//© código creado por Deylin 
//https://github.com/Deylin-eliac 
//➤  no quites creditos 

import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

async function obtenerPais(numero) {
  try {
    let number = numero.replace("@s.whatsapp.net", "");
    const res = await fetch(`https://g-mini-ia.vercel.app/api/infonumero?numero=${number}`);
    const data = await res.json();
    
    if (data && data.pais) return data.pais;
    if (data && data.bandera && data.nombre) return `${data.bandera} ${data.nombre}`;
    
    return "🌐 Desconocido";
  } catch (e) {
    return "🌐 Desconocido";
  }
}

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return;
//  if (m.chat === "120363402481697721@g.us") return;

  const who = m.messageStubParameters?.[0];
  if (!who) return;

  const taguser = `@${who.split("@")[0]}`;
  const chat = global.db?.data?.chats?.[m.chat] || {};
  const totalMembers = participants.length;
  const date = new Date().toLocaleString("es-ES", { timeZone: "America/Mexico_City" });

  const pais = await obtenerPais(who);
  let ppUser = 'https://raw.githubusercontent.com/Deylin-Eliac/Pikachu-Bot/refs/heads/main/src/IMG-20250613-WA0194.jpg';

  try {
    ppUser = await conn.profilePictureUrl(who, 'image');
  } catch (e) {}

  const frasesBienvenida = [
    "Nya Bienvenido/a",
    "Bienvenido Pajero/a xD ",
    "Me llamo Alisia Y te doy la Bienvenida Jiji",
    "Hello Bienvenido/a Espero que la pases bien ",
    "Hola Bienvenido A Nuestra Loquera xD"
  ];
  const frasesDespedida = [
    "Mmmm Digamos Bye ",
    "Ala Verga Se fue el pajero del grupo ",
    "bye bye ",
    "El grupo estara Mejor sin ti ",
    "xD Se fue Un Puto "
  ];

  const fraseRandomBienvenida = frasesBienvenida[Math.floor(Math.random() * frasesBienvenida.length)];
  const fraseRandomDespedida = frasesDespedida[Math.floor(Math.random() * frasesDespedida.length)];

  if (chat.welcome) {
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      const bienvenida = `
*✨─『 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊/𝘼 』─✨*
👤 *𝙐𝙨𝙪𝙖𝙧𝙞𝙤:* ${taguser}
🌍 *𝙋𝙖𝙞𝙨:* ${pais}
💬 *𝙂𝙧𝙪𝙥𝙤:* *${groupMetadata.subject}*
🌸 *𝙈𝙞𝙚𝙢𝙗𝙧𝙤:* *${totalMembers + 1}*
📅 *𝙁𝙚𝙘𝙝𝙖:* *${date}*
📝 *𝙈𝙚𝙣𝙨𝙖𝙟𝙚:* ${fraseRandomBienvenida}`.trim();

      await conn.sendMessage(m.chat, {
        image: { url: ppUser },
        caption: bienvenida,
        mentions: [who]
      });
    }

    if (
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE ||
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE
    ) {
      const despedida = `
*🌟──『 𝑫𝑬𝑺𝑷𝑬𝑫𝑰𝑫𝑨 』──🌟*
👤 *Usuario:* ${taguser}
🌍 *País:* ${pais}
💬 *Grupo:* *${groupMetadata.subject}*
🌸 *Miembros:* *${totalMembers - 1}*
📅 *Fecha:* *${date}*
📝 *Mensaje:* ${fraseRandomDespedida}`.trim();

      await conn.sendMessage(m.chat, {
        image: { url: ppUser },
        caption: despedida,
        mentions: [who]
      });
    }
  }
}