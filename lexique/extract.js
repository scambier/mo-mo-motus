const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '/lexique.txt'), function (err, data) {
  if (err) {
    throw err
  }
  const words = data.toString().split(/\r?\n/).join(' ').split(' ')
  const filtered = words
    .filter(o => o.length === 5)
    .filter(o => /^[\u0000-\u007f]*$/.test(o))
  console.log(filtered.length)
  const set = new Set(filtered)

  fs.writeFileSync(
    path.join(__dirname, '/../src/words.ts'),
    `const words = ${JSON.stringify(
      [...set].map(o => o.toLowerCase()),
    )}; export default words`,
  )
})