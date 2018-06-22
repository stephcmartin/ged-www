// Declare variables
var fs = require('fs')

// Read the file and send to the callback
fs.readFile('./src/internet1.json', handleFile)

// Write the callback function
function handleFile(err, data) {
  if (err) throw err
  let internet = JSON.parse(data)

  // internet is now the entire json object

// Initialize empty object to hold data
  let results = {
    "success": [],
    "skipped": [],
    "error": []
  }

  // First: Write a function that lists obj.pages[i].address as 'success'

  const succesfulCrawls = internet.pages.map((address) => {
    results.success.push(address.address)
  })

  // this outputs:
  // [ 'http://foo.bar.com/p1', 'http://foo.bar.com/p2', 'http://foo.bar.com/p4',
  // 'http://foo.bar.com/p5','http://foo.bar.com/p6' ]

  // Second: Write a function that will check if it needs to be skipped.
  // Remember: if the address is already in success array, we add it to skip.
  // i.e what overlaps between internet.pages.address and internet.pages.links?

  const checkAddress = internet.pages.map((address) => {
    // console.log('address.links', address.links)
    // console.log('results.success.includes(address)', results.success.includes(address.links))

    const mappingThrough = address.links.map((item)=> {
      console.log(item)
      if (results.success.includes(item)){
        results.skipped.push(item)
      } else {
        // The items that don't exist get pushed to the errors array
        results.error.push(item)
      }
    })
})

console.log(results)


}
