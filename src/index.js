const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/user.route')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express();

const port = process.env.PORT | 3000;

const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : 'swagger with node.js',
            version : '1.0.0'

        },
        servers : [
            {
                url : `http://localhost:${port}/`
            }
        ]
    },
    apis: ['./routes/user.route']
}

const swaggerSpec = swaggerJsDoc(options)

app.use(express.json())
app.use(userRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})