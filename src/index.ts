import Mineflayer from 'mineflayer'

const bot = Mineflayer.createBot({
  host: 'localhost',
  port: 37811,
  username: 'Bloomp',
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(`${username} said: ${message}`)
})