const express = require('express');
const app = express();
const port = 3000;
const db = require('./models');
app.use(express.json());
app.use(express.urlencoded({ 
    extended: false,
 })
);

app.listen(port, () => {
    console.log("Server is started on port 3000");
});

db.sequelize.sync().then((result) => {
        app.listen(port, () => {
            console.log("Server started");
        })
    })
        .catch((err) => {
            console.log(err);
        });

app.post("/Komik", async (req, res) => {
    const data = req.body;
    try {
        const komik = await db.Komik.create(data);  
        res.send(komik);
    } catch (error) {
        res.send(error);
    }
})


