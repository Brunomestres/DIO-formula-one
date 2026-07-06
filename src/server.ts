import Fastify from 'fastify'



const fastify = Fastify({ logger: true})


fastify.get('/teams', async (req, reply) => {
    reply.type("application/json").status(200)


    return [{ id: 1, name: "Ferrari"}]
})





fastify.listen({ port: 3333}, () => {
    console.log('Running Server')
})