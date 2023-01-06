import 'dotenv/config'
import be from '..'

export default function Routing() {
    const express = be.express
    express.get("/test", (req, res) => {
        res.send("Hello, world!")
    })

    // indert content's data
    express.post("/post", (req, res) => {
        try {
            be.db.insert("voting", [{"content": { 
                "question": "q4", "option_a": "A", "option_b": "B",
                "count_a": 0, "count_b": 0
            }}])
            res.send('complete')
        } catch (e) {
            console.log(e)
        }
    })

    // pass Ids to frontend
    express.get("/myapp", (req, res) => {
        res.send({ "selleAppId": be['sellerAppId'] ,"sellerUserId" : be['sellerUserId']}).json
    })
    
    // get all contents
    express.get("/contents", async (req, res) => {
        const data = await be.db.select("voting", {"condition": null})
        console.log(data)
        res.send(data).json
    })


}