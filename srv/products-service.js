const cds = require('@sap/cds')

module.exports = service => {
    service.on('CREATE', 'Products', async request => {
        const { query } = request
        console.log(query)
        await cds.run(query)
    })

    service.on('READ', 'Products', async request => {
        const { query } = request
        console.log(query)
        return await cds.run(query)
    })

    service.on('UPDATE', 'Products', async request => {
        const { query } = request
        console.log(query)
        await cds.run(query)
    })

    service.on('DELETE', 'Products', async request => {
        const { query } = request
        console.log(query)
        await cds.run(query)
    })
}