const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/restaurant', (req, res) => {
    let restaurant = [
        {
            name: 'BBC',
            address: 'Nguyen Trai'
        },
        {
            name: 'Pizza',
            address: 'Hai Ba Trung'
        },
        {
            name: 'Seafood',
            address: 'Pham Ngoc Thach'
        }
    ]
    res.json(restaurant)
})

app.get('/student', (req, res) => {
    let student = [
        {
            name: 'Linh',
            address: 'Ha Noi',
            class: 'C4EJS97'
        },
        {
            name: 'Nguyen',
            address: 'Hai Phong',
            class: 'CIJS54'
        },
        {
            name: 'Trang',
            address: 'Nam Dinh',
            class: 'WFS84'
        },
        {
            name: 'Tuan',
            address: 'Ha Tinh',
            class: 'C4EJS97'
        },
        {
            name: 'Anh',
            address: 'Hai Duong',
            class: 'CIJS54'
        },
        {
            name: 'Huy',
            address: 'HCM City',
            class: 'WFS84'
        },
        {
            name: 'Thu',
            address: 'Da Nang',
            class: 'C4EJS97'
        },
        {
            name: 'Hoang',
            address: 'Ha Noi',
            class: 'CIJS54'
        },
        {
            name: 'Van',
            address: 'Hai Phong',
            class: 'WFS84'
        },
        {
            name: 'Thang',
            address: 'Nam Dinh',
            class: 'C4EJS97'
        }
    ]
    res.json(student);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})