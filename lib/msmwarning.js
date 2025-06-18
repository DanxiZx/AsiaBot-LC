const getMensajeSistema = (comando = '') => ({
  smsrowner: `⚡️✨ *¡Pika-Pika! Este comando* 〘 ${comando} 〙 *solo puede ser usado por el Maestro Pokémon (propietario principal).*`,
  smsowner: `🧢 *〘 ${comando} 〙 es un movimiento secreto reservado para los entrenadores desarrolladores. ¡No tienes la medalla necesaria!*`,
  smsmods: `🔰 *〘 ${comando} 〙 está restringido solo a moderadores. ¡Tu Pokédex aún no está registrada como tal!*`,
  smspremium: `💎 *〘 ${comando} 〙 es un beneficio premium solo para entrenadores élite. ¡Sigue entrenando, joven entrenador!*`,
  smsgroup: `👥 *〘 ${comando} 〙 solo puede usarse en una Liga Pokémon (grupo). Aquí estás en el Centro Pokémon (privado).*`,
  smsprivate: `📩 *〘 ${comando} 〙 es una técnica que solo funciona en modo 1 vs 1 (chat privado). No es efectiva en multibatallas.*`,
  smsadmin: `🎖️ *〘 ${comando} 〙 necesita que seas un Líder de Gimnasio (admin). ¡No tienes suficientes medallas!*`,
  smsbotAdmin: `🤖 *¡Pikachu está confundido! El bot necesita ser admin para usar* 〘 ${comando} 〙. *Hazlo evolucionar con ese permiso.*`,
  smsrestrict: `⛔ *¡Movimiento bloqueado!* Esta función está desactivada por el Profesor Oak. ¡Ningún Pikachu puede usarla por ahora!*`
})

export default getMensajeSistema