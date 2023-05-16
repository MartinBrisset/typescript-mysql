import express, {Application} from 'express'
import cors from 'cors'
import userReoutes from './routes/users'
import db from './db/conecction'



class Server {
    private app: Application
    private port: string | number
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3001

        //DB
        this.dbConect()

        //Middlewares
        this.middlewares()

        //Routes
        this.routes()
    }

    async dbConect() {
        //db
        try {
            await db.authenticate()
            console.log('Database online')
        } catch (error: any) {
            throw new Error(error)
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors())

        //Lectura del body
        this.app.use(express.json())

        //Carpeta publica
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.apiPaths.users, userReoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}

export default Server