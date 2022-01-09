var fs = require('fs')
fs.readFile(__dirname + '/lexique.txt', function (err, data) {
  if (err) {
    throw err
  }
  const words = data.toString().split(/\r?\n/)
  const filtered = words
    .filter((o) => o.length === 5)
    .filter((o) => /^[\u0000-\u007f]*$/.test(o))
  console.log(filtered.length)
  console.log(filtered)
})
