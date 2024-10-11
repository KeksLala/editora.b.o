import { swaggerSpec } from '../../../swagger';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
}
/**
 * @swagger
 * /api/teste:
 *   get:
 *     summary: Retorna uma mensagem de Hello
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, World!
 */