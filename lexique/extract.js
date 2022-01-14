const fs = require('fs')
const path = require('path')

// Solutions
fs.readFile(path.join(__dirname, '/liste-reduite.txt'), function (err, data) {
  if (err) {
    throw err
  }
  const words = data.toString().split(/\r?\n/).join(' ').split(' ')
  const filtered = words.filter(o => o.length === 5)
  const set = [...new Set(filtered)]
  console.log(set.length + ' words')

  fs.writeFileSync(
    path.join(__dirname, '/../src/words-list.ts'),
    `const words = ${JSON.stringify(
      set.map(o => o.toLowerCase()).filter(o => !o.includes('-')),
    )}; export default words`,
  )
})

// Guesses
fs.readFile(path.join(__dirname, '/ods6.txt'), function (err, data) {
  if (err) {
    throw err
  }
  const words = data.toString().split(/\r?\n/).join(' ').split(' ')

  const filtered = words.filter(o => o.length === 5)
  const set = [...new Set(filtered)]
  console.log(set.length + ' guesses')

  fs.writeFileSync(
    path.join(__dirname, '/../src/guesses-list.ts'),
    `const guesses = ${JSON.stringify(
      set.map(o =>
        o
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, ''),
      ),
    )}; export default guesses`,
  )
})
