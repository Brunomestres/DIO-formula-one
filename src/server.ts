import Fastify from 'fastify'
import cors from '@fastify/cors'
const teams = [
    { id: 1, name: "Ferrari", base: "Maranello, Italy" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
]

const drivers = [
    { id: 1, name: "Charles Leclerc", team: "Ferrari", country: "Monaco" },
    { id: 2, name: "Lewis Hamilton", team: "Mercedes", country: "United Kingdom" },
    { id: 3, name: "Max Verstappen", team: "Red Bull Racing", country: "Netherlands" },
    { id: 4, name: "Lando Norris", team: "McLaren", country: "United Kingdom" },
    { id: 5, name: "Fernando Alonso", team: "Aston Martin", country: "Spain" },
]


interface BodyTeams {
    name: string
    base: string
}
interface DriversTeams {
    name: string
    team: string
    country: string
}


const fastify = Fastify({ logger: true })

fastify.register(cors, {
    origin: '*'
})

fastify.get('/teams', async (req, reply) => {
    reply.type("application/json").status(200)


    return teams
})

fastify.get('/drivers', async (req, reply) => {
    reply.type("application/json").status(200)


    return drivers
})




fastify.post("/teams", async (req, reply) => {
    const body = req.body as BodyTeams

    const data = {
        id: teams.length + 1,
        ...body

    }

    teams.push(data)

    reply.type("application/json").status(201)

    return data
})
fastify.post("/drivers", async (req, reply) => {
    const body = req.body as DriversTeams

    const data = {
        id: drivers.length + 1,
        ...body

    }

    drivers.push(data)

    reply.type("application/json").status(201)

    return data
})


interface DriveParams {
    id: string
}

fastify.get<{ Params: DriveParams }>('/drivers/:id', async (req, reply) => {
    const id = Number(req.params.id)
    const driver = drivers.find((driver) => driver.id === id)

    if (!driver) {
        reply.type("application/json").status(404)

        return { message: "Driver not found" }
    }

    reply.type("application/json").status(200)

    return driver
})




fastify.listen({ port: 3333 }, () => {
    console.log('Running Server')
})
