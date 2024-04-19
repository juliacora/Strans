const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = Array(
<<<<<<< HEAD
        request.body.nome,
        request.body.email,
        request.body.telefone,
        request.body.mensagem
    );
    const query = "INSERT INTO contato(nome, email, telefone, mensagem) VALUES(?,?,?,?)";
=======
        request.body.tittle,
        request.body.description
    );
    const query = "INSERT INTO tasks(tittle,description) VALUES(?,?)";
>>>>>>> 382b33769d78835fe1d2d1892a1d921161fccc0c

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
<<<<<<< HEAD
                    success: true,
=======
                    sucess: true,
>>>>>>> 382b33769d78835fe1d2d1892a1d921161fccc0c
                    massage: "Sucesso!!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    data: err
                })
        }
    })
}

module.exports = {
    storeTask
}