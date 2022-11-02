import Fastity from 'fastify';
import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query'],
})

async function bootstrap() {
    const fastify = Fastity({
        logger: true
    });

    await fastify.register(cors, {
        origin: true
    })

    fastify.get('/pools/count', async () => {

        const countPools = await prisma.pool.count();

        return { countPools: countPools };
    });

    await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();