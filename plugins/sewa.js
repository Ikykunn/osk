let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let saweria = global.saweria
let owner = global.owner
let anu = `Hallo mypren π
βββγ Δ±ll *Sewa Bot* llΔ± γββκ₯
ββββββββββββββββββββ
βββγ Δ±ll *HARGA* llΔ± γββκ₯
β¬‘ *1 BULAN:* *15.000*
β¬‘ *2 BULAN:* *25.000*
β¬‘ *1 BULAN 2/3 GRUP:* *20.000*
β¬‘ *lebih dari 3 tambah +5.000*
ββββββββββββββββκ₯
ββββγ Δ±ll *PAYMENT* llΔ± γββκ₯
β¬‘ *qiris chat owner*
βββββββββββββββββββκ₯
βββγ Δ±ll *RULES* llΔ± γβκ₯
β¬‘ [β] *Dana yang sudah masuk tidak bisa di kembalikan*
βββββββββββκ₯
Jika anda berminat hubungi nomor di bawah!!

β©Β» *jangan lupa donasi kak* Β«β¨
Terimakasih yang sudah mendonasikan untuk bot

Contact person Sewa Bot:
wa.me/${6285878836361} (Owner)

*Follow Instagram ku juga kakπΌ*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'πππππ πΏπππππππ', '.allmenu', 'πΆππππ π±ππ', '.gcbot', 'π³πππππ πΊππ', '.donasi', m) 
}
handler.help = ['sewaoscar']
handler.tags = ['info']
handler.command = /^(sewa|sewaoscar|sewa|sewabot)$/i

module.exports = handler
