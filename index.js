let express = require('express');
let app = express();

let port = process.env.PORT || 3000;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get("/minigame", (req, res) => {
    res.render("minigame");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
