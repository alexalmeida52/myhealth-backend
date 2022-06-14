import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import mongoose from 'mongoose';

// Biblioteca para lidar com requisições http
const app = express();

// Usando plugin para o express interpretar dados no formato JSON
app.use(express.json());

// Permitindo o acesso a api de diferentes pontos
app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

// Servindo rotas da api
app.use(routes);

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Swagger config
var swaggerDefinition = {
    info: {
        title: 'myHealth API',
        version: '1.0.0',
        description: 'Todas as rotas para utilização do sistema.',
    },
    host: 'myhealth-backend.herokuapp.com'
    // host: 'localhost:3333'
};

// options for the swagger docs
var options = {
    swaggerDefinition,
    apis: ['./routes.ts', './docs/*/*.ts'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Conectando ao mongodb localmente
// mongoose.connect('mongodb://localhost/myhealth')
mongoose.connect('mongodb://teste:12345@cluster0-shard-00-00.1kjrl.mongodb.net:27017,cluster0-shard-00-01.1kjrl.mongodb.net:27017,cluster0-shard-00-02.1kjrl.mongodb.net:27017/myhealth?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch(() => console.log('Connection Failed with MongoDB'))

// Servindo a aplicação na porta 3333
app.listen(process.env.PORT || 3333, () => console.log(`Running server on port: ${process.env.PORT || 3333}`));