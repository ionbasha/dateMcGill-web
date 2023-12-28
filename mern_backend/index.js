const PORT = 8000;
const express = require('express')
const { MongoClient }  = require('mongodb')
const app = express();
const uri = 'mongodb+srv://ionbasha:Jellybean2015!@cluster0.6qu3wj8.mongodb.net/?retryWrites=true&w=majority'
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json("Hello to my app!")
})

app.post('/createaccount', async (req, res) => {
    const client = new MongoClient(uri);
    const { firstName, lastName, email, password, major,aboutMe, genderAm, genderShow, pfp } = req.body;

    const hashedPw = await bcrypt.hash(password, 10)

    try {
        await client.connect();
        const database = client.db('dateMcGill');
        const userCollection = database.collection('users');

        userExists = await userCollection.findOne({ email })

        if(userExists) {
            return(res.status(409).send("Email has already been registered."))
        }
        else {
            console.log(res.status)
            const lowerEmail = email.toLowerCase();
            const userData = {
                firstName: firstName,
                lastName: lastName,
                email: lowerEmail,
                password: hashedPw,
                major: major,
                aboutMe: aboutMe,
                genderAm: genderAm,
                genderShow: genderShow,
                pfp: pfp
            }
            const new_user = await userCollection.insertOne(userData)

            const jwt_token = jwt.sign(new_user, lowerEmail, { expiresIn: 24*60 })

            res.status(201).json({ jwt_token, email: lowerEmail})
        }

    }
    catch(e) {
        console.log(e)
    }
          
})



app.listen(PORT, () => {console.log("Change made on port 8000")})