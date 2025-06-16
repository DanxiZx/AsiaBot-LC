var handler = async (m, { conn, participants, usedPrefix, command }) => {
    const texto = m.text?.trim().toLowerCase() || '';
    const comandos = ['kick', 'echar', 'hechar', 'sacar', 'ban'];

    // Asegurarse que el mensaje comienza con uno de los comandos válidos (con o sin prefijo)
    const coincidencia = comandos.find(cmd => 
        texto.startsWith(usedPrefix + cmd) || texto.startsWith(cmd)
    );
    if (!coincidencia) return; // Si no hay coincidencia, no hacer nada

    const pikachu = 'Ｏ(≧∇≦)Ｏ🧃';
    const sadchu = 'Ｏ(≧∇≦)Ｏ🧃';

    if (!m.mentionedJid?.length && !m.quoted) {
        return conn.reply(m.chat, `${pikachu} ¡Pika Pika! Debes mencionar a alguien para expulsarlo del grupo.`, m);
    }

    let user = m.mentionedJid?.[0] || m.quoted.sender;

    // Obtener información del grupo
    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || (m.chat.split`-`[0] + '@s.whatsapp.net');
    const ownerBot = global.owner?.[0]?.[0] + '@s.whatsapp.net';

    // Restricciones
    if (user === conn.user.jid) {
        return conn.reply(m.chat, `${sadchu} ¡Pika! No puedo eliminarme a mí mismo.`, m);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, `${sadchu} ¡Pikachu no se mete con el líder del grupo!`, m);
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, `${sadchu} ¡Ese es mi entrenador! No puedo hacer eso.`, m);
    }

    // Expulsión
    try {
        await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
        conn.reply(m.chat, `${pikachu} ¡Pika Pika! Usuario eliminado con un Impactrueno. ⚡`, m);
    } catch (e) {
        console.error(e);
        conn.reply(m.chat, `${sadchu} No pude eliminarlo. ¿Seguro que soy administrador?`, m);
    }
};

// Configuración del comando
handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = /^([^\s]+)$/i; // Captura mensajes de una sola "palabra"
handler.admin = true;
handler.group = true;
handler.register = true;
handler.botAdmin = true;

export default handler;