const FastifyAuth = require('@fastify/auth');
const FastifyJwt = require('@fastify/jwt');
const FastifySwagger = require('@fastify/swagger');
const fastify = require('fastify');

(async () => {
  const app = fastify({
    logger: true,
  });

  app.decorate('authenticate', async (request, reply) => {
    try {
      await request.jwtVerify({ ignoreExpiration: true });
    } catch (err) {
      return reply.status(401).send(err);
    }
  });

  await app.register(FastifyAuth);
  await app.register(FastifyJwt, { secret: 'test1234' });

  app.addHook('preHandler', app.auth([app.authenticate], { run: 'all' }));

  await app.register(FastifySwagger, {
    routePrefix: '/documentation',
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: 'localhost',
      schemes: ['https'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [],
      definitions: {
        User: {
          type: 'object',
          required: ['id', 'email'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            email: { type: 'string', format: 'email' },
          },
        },
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header',
        },
      },
    },
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true,
  });

  await app.listen({ port: 3000, host: '0.0.0.0' });
  app.swagger();
})();
