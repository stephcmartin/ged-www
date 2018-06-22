// Declare variables
var fs = require('fs')

// Read the file and send to the callback
fs.readFile('./src/internet1.json', handleFile)

// Write the callback function
function handleFile(err, data) {
  if (err) throw err
  // internet is now the entire JSON object
  let internet = JSON.parse(data)

  // Initialize empty object to hold data
  let results = {
    "success": [],
    "skipped": [],
    "error": []
  }

  // this finds the duplicate in the skipped array
  function findDuplicateInArray(arr) {
    var i,
      result = [],
      obj = {};
    for (i = 0; i < arr.length; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      result.push(i);
    }
    return result;
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
  console.log(findDuplicateInArray(results.skipped))
}
