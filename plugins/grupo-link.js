async function handler(m, { conn, orgs, participants, groupMetadata }) {
  let group = m.chat;
  let totalMembers = participants.length;
  let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
  conn.reply(m.chat, `*🌟──『 𝑮𝑹𝑼𝑷𝑶 𝑳𝑰𝑵𝑲 』──🌟*

📚 *Grupo:* ${groupMetadata.subject}
👥 *Miembros:* ${totalMembers}

🔗 *Enlace mágico:* 
${link}

𝐂𝐨𝐦𝐩𝐚𝐫𝐭𝐞 𝐋𝐢𝐧𝐤𝐬 𝐣𝐢𝐣 𝐃𝐢𝐜𝐡𝐨 𝐏𝐨𝐫 𝐀𝐬𝐢𝐚💋`,  m, { detectLink: true });
}

handler.help = ['link'];
handler.tags = ['grupo'];
handler.command = ['link', 'enlace'];
handler.group = true;
handler.botAdmin = true;

export default handler;