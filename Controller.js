const express = require('express');
const cors = require('cors');

const {Sequelize} = require('./models');

const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let cartao = models.Cartao;
let compra = models.Compra;
let empresa = models.Empresa;
let promocao = models.Promocao;

//CLIENTE
//Inserir cliente
app.post('/inserircliente', async(req, res)=>{
    let create = await cliente.create(
        req.body
    ).then(function(){
        return res.json({
            error:false,
            message: "Cliente cadastrado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro! não foi possível cadastrar o cliente!"
        })
    });
});

//Listar Cliente
app.get('/listaclientes', async(req, res)=>{
    let read = await cliente.findAll({
        order:[['id', 'ASC']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

//Atualizar Cliente
app.put('/atualizacliente/:id', async(req, res)=>{
    
    if(!await cliente.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Cliente não encontrado.'
        });
    };
    await cliente.update(req.body, {
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente alterado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro! Não foi possível alterar o cliente!"
        });  
    });
});

//Excluir Cliente
app.delete('/exlcuircliente/:id', async(req, res)=>{
    
    if(!await cliente.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Cliente não encontrado.'
        });
    };
    await cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Cliente removido com sucesso!'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro! Não foi possível remover o cliente!'
        });
    });
});

//EMPRESA
//Inserir Empresa
app.post('/inserirempresa', async(req, res)=>{
    let create = await empresa.create(
        req.body
    ).then(function(){
        return res.json({
            error:false,
            message: "Empresa cadastrada com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro! não foi possível cadastrar a empresa!"
        })
    });
});

//Listar Empresa
app.get('/listaempresas', async(req, res)=>{
    let read = await empresa.findAll({
        order:[['id', 'ASC']]
    }).then(function(empresas){
        res.json({empresas})
    });
});

//Atualizar Empresa
app.put('/atualizaempresa/:id', async(req, res)=>{
    
    if(!await empresa.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Empresa não encontrada.'
        });
    };
    await empresa.update(req.body, {
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Empresa alterada com sucesso!",
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro! Não foi possível alterar a empresa"
        });  
    });
});

//Excluir Empresa
app.delete('/exlcuirempresa/:id', async(req, res)=>{
     if(!await empresa.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Empresa não encontrada.'
        });
    };
    await empresa.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Empresa removida com sucesso!'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro! Não foi possível remover a empresa!'
        });
    });
});

//CARTÃO
//Inserir Cartão
app.post('/inserircartao', async(req, res)=>{
    let create = await cartao.create(
        req.body
    ).then(function(){
        return res.json({
            error:false,
            message: "Cartão cadastrado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro! não foi possível cadastrar o cartão!"
        })
    });
});

//Listar Cartão
app.get('/listacartoes', async(req, res)=>{
    let read = await cartao.findAll({
        order:[['id', 'ASC']]
    }).then(function(cartoes){
        res.json({cartoes})
    });
});

//Atualizar Cartão
app.put('/atualizacartao/:id', async(req, res)=>{
    
    if(!await cartao.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Cartão não encontrado.'
        });
    };
    await cartao.update(req.body, {
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cartão alterado com sucesso!",
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro! Não foi possível alterar o cartão"
        });  
    });
});

//Excluir Cartão
app.delete('/exlcuircartao/:id', async(req, res)=>{
     if(!await cartao.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Cartão não encontrado.'
        });
    };
    await cartao.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Cartão removido com sucesso!'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro! Não foi possível remover o cartão!'
        });
    });
});

//PROMOÇÃO
//Inserir Promoção
app.post('/inserirpromocao', async(req, res)=>{
    let create = await promocao.create(
        req.body
    ).then(function(){
        return res.json({
            error:false,
            message: "Promoção cadastrada com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro! não foi possível cadastrar a promoção!"
        })
    });
});

//Listar Promoção
app.get('/listapromocoes', async(req, res)=>{
    let read = await promocao.findAll({
        order:[['id', 'ASC']]
    }).then(function(promocoes){
        res.json({promocoes})
    });
});

//Atualizar Promoção
app.put('/atualizapromocao/:id', async(req, res)=>{
    
    if(!await promocao.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Promoção não encontrada.'
        });
    };
    await promocao.update(req.body, {
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Promoção alterada com sucesso!",
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro! Não foi possível alterar a promoção"
        });  
    });
});

//Excluir Promoção
app.delete('/exlcuirpromocao/:id', async(req, res)=>{
     if(!await promocao.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Promoção não encontrada.'
        });
    };
    await promocao.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: 'Promoção removida com sucesso!'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro! Não foi possível remover a promoção!'
        });
    });
});

//COMPRA
//Inserir Compra
app.post('/inserircompra', async(req, res)=>{
    let create = await compra.create(
        req.body
    ).then(function(){
        return res.json({
            error:false,
            message: "Compra cadastrada com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro! não foi possível inserir a compra!"
        })
    });
});

//Listar Compras
app.get('/listacompras', async(req, res)=>{
    let read = await compra.findAll({
        order:[['CartaoId', 'ASC']]
    }).then(function(compras){
        res.json({compras})
    });
});

//Atualizar Compra
app.put('/atualizacompra/:id', async(req, res)=>{
    const comp = {
        quantidade: req.body.quantidade,
        valor: req.body.valor
    }

    if(!await cartao.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Cartão não encontrado.'
        });
    };

    if(!await promocao.findByPk(req.body.PromocaoId)){
        return res.status(400).json({
            error: true,
            message: 'Promoção não encontrada.'
        });
    };

    await compra.update(comp, {
        where: Sequelize.and({PromocaoId: req.body.PromocaoId},
            {CartaoId: req.params.id})
    }).then(function(){
        return res.json({
            error: false,
            message: 'Compra alterada com sucesso!',
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Não foi possível alterar a compra!'
        });
    });
});

//Excluir Compra
app.delete('/exlcuircompra/:id', async(req, res)=>{
   
    if(!await cartao.findByPk(req.params.id)){
        return res.status(400).json({
            error: true,
            message: 'Cartão não encontrada.'
        });
    };

    if(!await promocao.findByPk(req.body.PromocaoId)){
        return res.status(400).json({
            error: true,
            message: 'Promoção não encontrada.'
        });
    };

    await compra.destroy({
        where: Sequelize.and({PromocaoId: req.body.PromocaoId},
            {CartaoId: req.params.id})
    }).then(function(){
        return res.json({
            error: false,
            message: 'Compra removida com sucesso!'
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Erro! Não foi possível remover a compra!'
        });
    });
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res)=>{
    console.log('Servidor ativo localhost:3001');
})