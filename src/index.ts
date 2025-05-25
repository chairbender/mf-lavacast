import Mineflayer from 'mineflayer'
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')


const bot = Mineflayer.createBot({
  host: 'percypanic.apexmc.co',
  username: 'ForTheUSSR',
  auth: "microsoft"
})

bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: true }) // port is the viewing server port, if first person is false, you get a bird's-eye view
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(`${username} said: ${message}`)
})