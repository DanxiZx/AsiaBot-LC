var handler = async (m, { conn, participants, usedPrefix, command }) => {
    const pikachu = 'Ｏ(≧∇≦)Ｏ🧃';
    const sadchu = 'Ｏ(≧∇≦)Ｏ🧃';

    const texto = m.body?.toLowerCase()?.trim();
    const comandosSinPrefijo = ['kick', 'echar', 'hechar', 'sacar', 'ban'];

    // Detectar si el mensaje se debe ejecutar con o sin prefijo
    const comandoDetectado = texto?.split(' ')[0]?.replace(usedPrefix, '');

    if (!comandosSinPrefijo.includes(comandoDetectado)) return;

    if (!m.mentionedJid?.[0] && !m.quoted) {
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

// Solo para ayudar a bots con prefijos (como .kick)
handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = /^kick|echar|hechar|sacar|ban$/i;
handler.admin = true;
handler.group = true;
handler.register = true;
handler.botAdmin = true;

export default handler;