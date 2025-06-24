import fetch from 'node-fetch';

var handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        return conn.reply(m.chat, `ꨄ︎ Por favor, envía un enlace de TikTok para que lo pueda descargar.`, m);
    }

    try {
        await conn.reply(m.chat, `ꨄ︎ está corriendo por el video! Un momento por favor...`, m);

        const tiktokData = await tiktokdl(args[0]);

        if (!tiktokData || !tiktokData.data || !tiktokData.data.play) {
            return conn.reply(m.chat, "❌ Error: No se pudo obtener el video de TikTok.", m);
        }

        const videoURL = tiktokData.data.play;

        if (videoURL) {
            const { title, author, duration } = tiktokData.data;

            const info = `
╭───── • ◆ • ─────╮
│ 🎬 𝙏𝙞𝙩𝙪𝙡𝙤:* ${title || 'No disponible'}
│ 👤 𝘼𝙪𝙩𝙝𝙤𝙧:* ${author || 'Desconocido'}
│ ⏳ 𝘿𝙪𝙧𝙖𝙘𝙞𝙤𝙣:* ${duration ? duration + 's' : 'Desconocida'}
╰───── • ◆ • ─────╯
`;

            await conn.sendFile(m.chat, videoURL, "tiktok.mp4", `${info}\n✨ ¡Aquí tienes tu video ꨄ︎`, m);
        } else {
            return conn.reply(m.chat, "❌ No se pudo descargar el video. Inténtalo más tarde.", m);
        }
    } catch (error1) {
        return conn.reply(m.chat, `⚠️ Error: ${error1.message}`, m);
    }
};

handler.help = ['tiktok'].map((v) => v + ' *<link>*');
handler.tags = ['descargas'];
handler.command = ['tiktok', 'tt'];
handler.group = true;

export default handler;

async function tiktokdl(url) {
    let tikwm = `https://www.tikwm.com/api/?url=${url}?hd=1`;
    let response = await (await fetch(tikwm)).json();
    return response;
}