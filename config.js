const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6285760165634']
global.premium = ['6285760165634']
global.ownername = 'Revan'
global.botname = 'VBOTZ'
global.packname = '© by VBOTZ'
global.gc = 'https://shorturl.at/ghW37'
global.linkyt = 'https://youtube.com/channel/vanzzxyt'
global.linkgc = 'https://chat.whatsapp.com/LbEmG8BfIOWEvWfIENfatn'
global.limitawal = '100'
global.author = '@vnzz.xy'
global.sessionName = 'polo'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = 'terserah'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.pinimg.com/736x/d0/f8/b8/d0f8b804a908ce4aaee63d54035d2192.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
