import Fastity from 'fastify';

async function bootstrap() {
    const fastify = Fastity({
        logger: true
    });

    await fastify.listen({ port: 3333 });
}

bootstrap();