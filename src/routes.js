import { AnimeController } from './controllers/anime.controller.js'
export default [
    {
        'endpoint': '/',
        'method': 'GET',
        'handler': new AnimeController().listAll
    }
]