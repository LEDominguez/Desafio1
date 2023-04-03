class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        if(this.productos.find(producto => producto.code == product.code)) {
            return "Producto existente"
        } else {
            this.products.push(product)
        }
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find(producto => producto.id == id)

        if (product) {
            return product
        }

        return "Not Found"
    }


}

class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementID()
    }


    static incrementID() {
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
}

const product1 = new Product("Stratocaster", "Fender Stratocaster", 1100, "", "ST1234", 10)
const product2 = new Product("Les Paul", "Gibson Les Paul", 2500, "", "LP1234", 20)
const product3 = new Product("Custom 24", "PRS Custom 24", 3000, "", "C1234", 30)
const product4 = new Product("Telecaster", "Fender Telecaster", 1500, "", "TL1234", 40)
const product5 = new Product()

const productManager = new ProductManager()
productManager.addProduct(product1)
productManager.addProduct(product2)
console.log(productManager.addProduct(product1))
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(5))
console.log(productManager.getProducts())
