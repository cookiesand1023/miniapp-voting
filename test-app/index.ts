import { FanmeBackend } from '@torihada-inc/fanme-sdk-backend'
import 'dotenv/config'
import cors from 'cors'
import indexRouting from './route'

const be: FanmeBackend = new FanmeBackend(4000)

be.init().then(
    () => {
        const allowedOrigins = ['http://localhost:3001'];

        const options: cors.CorsOptions = {
            origin: allowedOrigins
        };

        be.express.use(cors(options))
        indexRouting()
        console.log("Backend initialized")
    },
    (e: Error) => {
        console.log(e)
    }
)

export default be
