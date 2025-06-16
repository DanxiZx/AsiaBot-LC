var handler = async (m, { conn, participants }) => {
    const pikachu = 'Ｏ(≧∇≦)Ｏ🧃';
    const sadchu = 'Ｏ(≧∇≦)Ｏ🧃';

    const text = m.body?.toLowerCase()?.trim(); // texto sin prefijo

    // Lista de comandos válidos sin prefijo
    const comandosSinPrefijo = ['kick', 'echar', 'hechar', 'sacar', 'ban'];

    // Si el texto no está en la lista, no hacer nada
    if (!comandosSinPrefijo.includes(text.split(' ')[0])) return;

    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, `${pikachu} ¡Pika Pika! Debes mencionar a alguien para expulsarlo del grupo.`, m, rcanal);
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';

    if (user === conn.user.jid) {
        return conn.reply(m.chat, `${sadchu} ¡Pika! No puedo eliminarme a mí mismo.`, m, rcanal);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, `${sadchu} ¡Pikachu no se mete con el líder del grupo!`, m, rcanal);
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, `${sadchu} ¡Ese es mi entrenador! No puedo hacer eso.`, m, rcanal);
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
    conn.reply(m.chat, `${pikachu} ¡Pika Pika! Usuario eliminado con un Impactrueno.`, m, rcanal);
};

// Este ya no usa .command
// Así que no necesitas handler.command = ...

handler.admin = true;
handler.group = true;
handler.register = true;
handler.botAdmin = true;

export default handler;