import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './models/index.js'; // Importando a função de conexão e o modelo Users
import usersRoutes from './routes/usersRoutes.js'; // Importando as rotas de usuários
import categoriesRoutes from './routes/CategoriesRoutes.js'; // Importando as rotas de categorias
import booksRoutes from './routes/booksRoutes.js'; // Importando as rotas de livros


const app = express();
const port = 3000;

app.use(express.json()); // Middleware para aceitar JSON no corpo das requisições
app.use(cors());

await connectToDatabase(); // Conectando ao banco de dados

app.use('/usuarios', usersRoutes); // Usando as rotas de usuários
app.use('/categorias', categoriesRoutes); // Usando as rotas de usuários
app.use('/livros', booksRoutes); // Usando as rotas de livros

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});





















// CAMINHO DA REQUISIÇÃO:
// GET http://localhost:3000/usuarios > index.js > usersRoutes.js > usersController.js



// // Rota para retornar usuários
// app.get('/usuarios', async (req, res) => {
//     try {
//         const usuarios = await Users.findAll(); // Buscando todos os usuários
//         res.status(200).json(usuarios); // Enviando status 200 e a lista de usuários como resposta

//     } catch (error) {
//         console.error('Erro ao buscar usuários:', error);
//         res.status(500).send('Erro ao buscar usuários');
//     }
// });
// // Rota para criar um novo usuário
// app.post('/usuarios', async (req, res) => {
//     try {
//         const usuario = await Users.create(req.body); // Criando um novo usuário com os dados do corpo da requisição
//         res.status(200).json(usuario); // Enviando status 200 e os dados do usuário criado como resposta

//     } catch (error) {
//         console.error('Erro ao cadastrar usuário:', error);
//         res.status(500).send('Erro ao cadastrar usuários');
//     }
// });

// // Rota para atualizar um usuário
// app.put('/usuarios/:id/', async (req, res) => { 
//     try {
//         const usuario = await Users.findByPk(req.params.id); // Buscando o usuário pelo ID
//         if (!usuario) {
//             return res.status(404).send('Usuário não encontrado'); // Retornando 404 se o usuário não existir
//         }
//         await usuario.update(req.body); // Atualizando os dados do usuário
//         res.status(200).json(usuario); // Enviando status 200 e os dados atualizados do usuário

//     } catch (error) {
//         console.error('Erro ao atualizar usuário:', error);
//         res.status(500).send('Erro ao atualizar usuário');
//     }
// });

// // Rota para deletar um usuário
// app.delete('/usuarios/:id', async (req, res) => {
//     try {
//         const usuario = await Users.findByPk(req.params.id); // Buscando o usuário pelo ID
//         if (!usuario) {
//             return res.status(404).send('Usuário não encontrado'); // Retornando 404 se o usuário não existir
//         }
//         await usuario.destroy(); // Deletando o usuário
//         // await Users.destroy({where: {id: req.params.id}}); // Deletando o usuário
//         res.status(204).send(); // Enviando status 204 sem conteúdo

//     } catch (error) {
//         console.error('Erro ao deletar usuário:', error);
//         res.status(500).send('Erro ao deletar usuário');
//     }
// });