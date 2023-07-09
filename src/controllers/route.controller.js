class RouteController {
    constructor(routes) {
        this.routes = routes
    } 

    async handler(request, response) {
        const route = await this.findRoute(request, response)
        if(!route){
            return this.throw404(request, response)
        } 

        return route.handler(request, response)
    }
    
    async findRoute(request, response) {
        const route = this.routes.find( routeObject => (
            routeObject.endpoint == request.url &&
            routeObject.method == request.method
        ))

        return route
    }

    throw404(request, response) {
        response.statusCode = 404
        response.end(JSON.stringify({
            'message': 'Rota não encontrada!'
        }))
    }
}

export { RouteController }