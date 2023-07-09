import { createServer } from 'node:http'
import { RouteController } from './src/controllers/route.controller.js'
import Routes from './src/routes.js'
const PORT = 3000

const router = new RouteController(Routes)

createServer(async (request, response) => {
    
    response.setHeader('Content-Type', 'application/json')

    if(request.url != '/favicon.ico'){
        await router.handler(request, response)
    }

})
.listen(PORT)
.on('listening', _ => console.log('Ai mia voida'))