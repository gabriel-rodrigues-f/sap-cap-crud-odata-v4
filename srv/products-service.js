const cds = require('@sap/cds')

module.exports = service => {
    service.on('CREATE', 'Products', async ({ query }) => {
        console.log(JSON.stringify(query))
    })

    service.on('READ', 'Products', async ({ query }) => {
        console.log(JSON.stringify(query))
    })

    service.on('UPDATE', 'Products', async ({ query }) => {
        console.log(JSON.stringify(query))
    })

    service.on('DELETE', 'Products', async ({ query }) => {
        console.log(JSON.stringify(query))
    })
}