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

  // Write a function that lists obj.pages[i].address as 'success'

  const succesfulCrawls = internet.pages.map((address) => {
    results.success.push(address.address)
  })

  // Write a function that will check if it needs to be skipped.
  // Remember: if the address is already in success array, we add it to skip.

  const checkAddress = internet.pages.map((address) => {
    // This function maps through all the internet.pages.links
    const mappingThrough = address.links.map((item) => {
      if (results.success.includes(item)) {
        // if it already exists, push it to the skipped array
        results.skipped.push(item)
      } else {
        // The items that don't exist get pushed to the errors array
        results.error.push(item)
      }
    })
  })

  console.log(results)

}
