const express = require('express');
const app = express();
const mysql = require('mysql');
const multer = require('multer');
const upload = multer();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const host = "localhost";
const user = "root";
const password = "";
const database = "lesbonnesannonces";


//Requete pour savoir si l'utilisateur existe
app.post('/_connect', upload.fields([]), (req, res)=> {
    console.log(req.body)
    const client = mysql.createConnection({
        host,
        user,
        password,
        database
    });

    
    client.connect((err) => {
        if(!err){
            let query = 'SELECT COUNT(*) as nb FROM utilisateurs WHERE pseudo = ? AND password = ?;'
            let params=[req.body.pseudo, req.body.password];
            // console.log(query, params)
            client.query(query, params, (err, rows, fields) => {
                if(!err){
                    if(rows[0].nb == 1){
                        query = 'SELECT id as id FROM utilisateurs WHERE pseudo = ? AND password = ?;'
                        client.query(query, params, (err, rows, fields) => {
                            if(!err){
                                console.log(String(rows[0].id))
                                res.send(String(rows[0].id))
                            } else {
                                res.send("false")
                            }
                            client.end();
                        })
                    }
                    else {
                        console.log(rows[0].nb)
                        res.send('false')
                    }
                } else {
                    console.log('err', err)
                    res.send('false')
                }
            })
        }
    })
})

//Poster une annonce
app.post('/_newPost', upload.fields([]), (req, res)=> {
    console.log(req.body)
    const client = mysql.createConnection({
        host,
        user,
        password,
        database
    });

    
    client.connect((err) => {
        if(!err){
            let query = 'INSERT INTO `annonces`(`titre`, `Description`) VALUES (?, ?);'
            let params=[req.body.titre, req.body.Description];
            // console.log(query, params)
            client.query(query, params, (err, rows, fields) => {
                if(!err){
                    res.send('true')
                } else {
                    console.log('err', err)
                    res.send('false')
                }
            })
        }else {
            console.log(err)
        }
    })
})

//Afficher les annonces
app.get('/_annonce', (req, res)=> {
    const client = mysql.createConnection({
        host,
        user,
        password,
        database
    });

    
    client.connect((err) => {
        if(!err){
            let query = 'SELECT * FROM `annonces`;'
            // console.log(query, params)
            client.query(query, (err, rows, fields) => {
                if(!err){
                    res.json(rows)
                } else {
                    console.log('err', err)
                    res.send('false')
                }
            })
        }else {
            console.log(err)
        }
    })
})

//Afficher profil utilisateur connecté
app.get('/:id/_profilUtilisateur', (req, res)=> {
    console.log(req.body)
    const client = mysql.createConnection({
        host,
        user,
        password,
        database
    });

    
    client.connect((err) => {
        if(!err){
            let query = 'SELECT * FROM `utilisateurs` WHERE id = ?'
            let params=[req.params.id];
            console.log(query, params)
            client.query(query, params, (err, rows, fields) => {
                if(!err){
                    res.json(rows)
                } else {
                    console.log('err', err)
                    res.send('false')
                }
            })
        }else {
            console.log(err)
        }
    })
})

//Inscription d'un utilisateur
app.post('/_inscription', upload.fields([]), (req, res)=> {
    console.log(req.body)
    const client = mysql.createConnection({
        host,
        user,
        password,
        database
    });

    
    client.connect((err) => {
        if(!err){
            let query = 'INSERT INTO `utilisateurs`(`pseudo`,`nom`, `prenom`, `password`, `email`, `numTel`) VALUES (?, ?, ?, ?, ?, ?)'
            let params=[req.body.pseudo, req.body.nom, req.body.prenom, req.body.password, req.body.email, req.body.numTel];
            // console.log(query, params)
            client.query(query, params, (err, rows, fields) => {
                if(!err){
                    res.send('true')
                } else {
                    console.log('err', err)
                    res.send('false')
                }
            })
        }else {
            console.log(err)
        }
    })
})




app.get('/:id/_connect', (req, res) => {
    res.send(req.params.id)
})

app.listen(3000, () => {
    console.log('serveur lancé');
})