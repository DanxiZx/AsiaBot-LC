var handler = async (m, { conn, participants, usedPrefix, command }) => {
    const texto = m.text?.trim().toLowerCase() || '';
    const comandos = ['kick', 'echar', 'hechar', 'sacar', 'ban'];

    // Verifica si el texto inicia con alguno de los comandos con o sin prefijo
    const coincidencia = comandos.find(cmd => texto.startsWith(usedPrefix + cmd) || texto.startsWith(cmd));
    if (!coincidencia) return;

    const pikachu = 'Ｏ(≧∇≦)Ｏ🧃';
    const sadchu = 'Ｏ(≧∇≦)Ｏ🧃';

    // Requiere mención o respuesta a mensaje
    if (!m.mentionedJid?.length && !m.quoted) {
        return conn.reply(m.chat, `${pikachu} ¡Pika Pika! Debes mencionar a alguien para expulsarlo del grupo.`, m);
    }

    let user = m.mentionedJid?.[0] || m.quoted.sender;

    // Evita expulsar al bot, al owner del grupo o al owner del bot
    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner?.[0]?.[0] + '@s.whatsapp.net';

    if (user === conn.user.jid) {
        return conn.reply(m.chat, `${sadchu} ¡Pika! No puedo eliminarme a mí mismo.`, m);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, `${sadchu} ¡Pikachu no se mete con el líder del grupo!`, m);
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, `${sadchu} ¡Ese es mi entrenador! No puedo hacer eso.`, m);
    }

    try {
        await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
        conn.reply(m.chat, `${pikachu} ¡Pika Pika! Usuario eliminado con un Impactrueno. ⚡`, m);
    } catch (e) {
        conn.reply(m.chat, `${sadchu} No pude eliminarlo. ¿Seguro que soy administrador?`, m);
    }
};

// Configuración del comando
handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = /^$/; // No usamos esta detección directa
handler.admin = true;
handler.group = true;
handler.register = true;
handler.botAdmin = true;

export default handler;