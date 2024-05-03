import https from 'https'
console.info("REPL Mode Test")

console.info('App Start ...')
console.info('Run!!')

try {
    const request = await https.get('https://nodejs.org/dist/index.json')
    console.info("Request Data ? " , request)
}catch(error) {
    console.log("Oh.. Shit is a Error")
}

console.info('End of Programs')