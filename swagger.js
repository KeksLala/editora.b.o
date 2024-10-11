import swaggerJsDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Swagger API documentation',
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/pages/api/**/*.js'], // Caminho para os seus arquivos de API
};

export const swaggerSpec = swaggerJsDoc(options);
