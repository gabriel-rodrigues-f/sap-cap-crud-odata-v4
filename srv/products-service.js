const cds = require('@sap/cds')

module.exports = service => {
    service.on('CREATE', 'Products', async request => {
        const { query } = request
        await cds.run(query)
    })

    service.on('READ', 'Products', async request => {
        const { query } = request
        return await cds.run(query)
    })

    service.on('UPDATE', 'Products', async request => {
        /*  await srv.update(Books).set({discount:'10%'}).where({stock:{'>':111}}) */
        const { Code, ...data } = request.data
        const { Products } = service.entities
        const affectedRows = await cds.update(Products).set(data).where({ Code })
        if (affectedRows === 0) request.error(404, `Product with ID ${Code} not found`)
    })

    service.on('DELETE', 'Products', async request => {
        const { ID: Code } = request.data
        const { Products } = service.entities
        const affectedRows = await cds.delete(Products).where({ Code })
        if (affectedRows === 0) request.error(404, `Product with Code ${Code} not found`)
        return affectedRows
    })
}