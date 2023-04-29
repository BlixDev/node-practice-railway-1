const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000; 

app.use( express.static( __dirname + "/public") )

// express hbs engine
hbs.registerPartials(__dirname + "/views/parciales");
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: "diego ojeda",
        anio: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: "Diego",
        anio: new Date().getFullYear()
    })
});


app.listen(3000, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`)
})