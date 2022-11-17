class ProductosApi {
    constructor() {
        this.cosas = []
        this.id = 0
    }

    listar(id) {
        const prod = this.cosas.find(prod => prod.id == id)
        return prod || { error: 'producto no encontrado' }
    }

    listado() {
        return [...this.cosas]
    }

    grabar(prod) {
        const newProd = { ...prod, id: ++this.id }
        this.cosas.push(newProd)
        return newProd
    }

}

module.exports = ProductosApi
