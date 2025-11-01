import Fastify from 'fastify';
import cors from '@fastify/cors';

const app = Fastify();
const PORT = 443;

await app.register(cors, {
        origin: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        methods: ['GET', 'POST', 'PUT'],
});

app.post("/api/message", async (req, reply) => {
        const message = req.body.msg;
        return reply.send({
                message: `msg is ${message}`,
        });
});

app.listen({ port: PORT, host: `0.0.0.0` }, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`User service running on port ${PORT}`);
});
