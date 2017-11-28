import * as express from "express"
import { Response, Request } from "express"
const app = express()

app.use("/", (req: Request, res: Response) => {
    res.send('hello server')
})

app.listen(3000, () => {
    console.log('server lister')
})
