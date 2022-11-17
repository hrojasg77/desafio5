const express = require('express')
const handlebars = require('express-handlebars')

const ProductosApi = require('../api/productos.js')

const productosApi = new ProductosApi()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
);
app.set("view engine", "hbs");
app.set("views", "./views");


app.post('/productos', (req, res) => {
    const producto = req.body
    productosApi.grabar(producto)
    res.redirect('/')
})

app.get('/productos', (req, res) => {
    const prods = productosApi.listado()

    res.render("vista", {
        productos: prods,
        hayProductos: prods.length
    });
});


try {
    const serv = app.listen(8080);
    console.log(`Conectado al puerto ${serv.address().port}`)

}  catch (error){
   console.log('Algo falló ' + error)
}     
