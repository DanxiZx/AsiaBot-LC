import axios from 'axios';

const handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) return m.reply(`✳️ Usa el comando así:\n\n${usedPrefix + command} <url de Terabox>\n\nEjemplo:\n${usedPrefix + command} https://www.terabox.com/s/1abcdEFGH`);

  if (!text.includes("terabox.com")) return m.reply("❌ El enlace no parece ser de Terabox.");

  try {
    await m.reply("⏳ Obteniendo el archivo desde Terabox...");

    const apiUrl = `https://zenz.biz.id/downloader/terabox?url=${encodeURIComponent(text)}`;
    const { data: apiResponse } = await axios.get(apiUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    if (!apiResponse.status || !apiResponse.result?.direct_url) {
      throw new Error("❌ No se pudo obtener el archivo. La API no devolvió un enlace válido.");
    }

    const result = apiResponse.result;
    const { filename = 'archivo_terabox', size, thumb, direct_url: link } = result;
    const sizeInBytes = parseInt(size) || 0;
    const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
    const caption = `╭─── 「 TERABOX 」\n│\n├ 📂 *Archivo:* ${filename}\n├ 📦 *Tamaño:* ${sizeInMB} MB\n│\n╰───`;

 
    await conn.sendMessage(m.chat, { image: { url: thumb }, caption }, { quoted: m });

    
    const isHeavy = sizeInBytes > 99 * 1024 * 1024;
    const fileMsg = {
      [isHeavy ? 'document' : 'video']: { url: link },
      fileName: filename,
      mimetype: 'video/mp4'
    };

    await conn.sendMessage(m.chat, fileMsg, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply("❌ Ocurrió un error al descargar o enviar el archivo.\nAsegúrate de que el enlace sea válido y que el archivo esté disponible.");
  }
};

handler.help = ['terabox <url>'];
handler.tags = ['downloader'];
handler.command = ['terabox'];
handler.group = false;

export default handler;