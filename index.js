// Declare variables
var fs = require('fs')

// Read the file and send to the callback
fs.readFile('./src/internet1.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    let obj = JSON.parse(data)

    // obj is now the entire json object
    // First: Write a function that lists obj.pages[i].address as 'success'

    let results = {
    "success": [],
    "skipped": [],
    "error": []
    }

    const success = obj.pages.map((link)=> {
        return results.success.push(link.address)
    })
      console.log(results)
      // Yay! this outputs:
      // [ 'http://foo.bar.com/p1', 'http://foo.bar.com/p2', 'http://foo.bar.com/p4',
      // 'http://foo.bar.com/p5','http://foo.bar.com/p6' ]

      // Second: Write a function that will check if it needs to be skipped.
      // Remember: if address is already in success array, we skip.


}
