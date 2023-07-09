class AnimeController {
    async listAll(request, response) {
        response.statusCode = 200
        response.end(JSON.stringify([
            {
                'name': 'one piece'
            },
            {
                'name': 'naruto'
            },
            {
                'name': 'demon slayer'
            },
        ]))
    }
}

export { AnimeController }