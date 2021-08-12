import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Biblioteca para lidar com requisições http
const app = express();

// Usando plugin para o express interpretar dados no formato JSON
app.use(express.json());

// Permitindo o acesso a api de diferentes pontos
app.use(cors());

app.use(morgan('dev'));

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
};

// options for the swagger docs
var options = {
    swaggerDefinition,
    apis: ['./routes.ts'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Servindo a aplicação na porta 3333
app.listen(process.env.PORT || 3333, () => console.log(`Running server on port: ${process.env.PORT || 3333}`));