import sequelize from '../config/database.js';
import Users from './Users.js';
import Category from './Category.js';
import Books from './Books.js'

//conectar ao banco de dados
const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('🟢 Conexão estabelecida com sucesso.');

        console.log('🔄 Modelos sincronizados com o banco de dados.');
        await sequelize.sync({alter: true});
        
    } catch (error) {
        console.error('🔴 Erro ao conectar ao banco:', error);
    }

}

export {connectToDatabase, Users, Category, Books}; // Exportando a função de conexão e os modelos