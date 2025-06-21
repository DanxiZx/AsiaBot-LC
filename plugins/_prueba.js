let handler = async (m, { conn, args, usedPrefix, command }) => {
return conn.reply(m.chat,`*APIs desarrolladas por Deylin*

[1]
 https://anime-xi-wheat.vercel.app/api/pinterest?q=
> Pinterest: Buscador de imágenes en Pinterest.

[2]
 https://anime-xi-wheat.vercel.app/api/ia-img?prompt=
> Generador de imágenes con IA.

[3]
 https://g-mini-ia.vercel.app/api/gemini
> Gemini IA: Responde preguntas, analiza imágenes y genera contenido visual.

[4]
 https://mode-ia.onrender.com/mode-ia?prompt=
> Mode-IA: Inteligencia artificial para responder preguntas en formato texto.

[5]
 https://ytumode-api.vercel.app/api/search?q=
> Buscador de contenido en YouTube.

[6]
 https://mode-api-sigma.vercel.app/api/mp3?url=
> Descarga de audio desde YouTube.
*⚠️ Clausurado.*

[7]
 https://mode-api-sigma.vercel.app/api/index?url=
> Descarga de audio desde YouTube.
*⚠️ Clausurado.*

*🔒 Nota:* Usa estas APIs con precaución. Evita hacer múltiples solicitudes en un corto período de tiempo para prevenir bloqueos o fallos del servicio.
`, m)};


handler.command = ['api', 'apis', 'servicios']
handler.tags = ['main']
handler.help = ['api', 'apis', 'servicios']

export default handler;
