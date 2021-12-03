const express = require('express')
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://127.0.0.1/myBlog')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false }))

app.get('/', (req,res) => {
    const articles = [{
        title:'First Article',
        createdAt: new Date(),
        description: 'First Description'
    },{
        title:'Second Article',
        createdAt: new Date(),
        description: 'Second Description'
    }]
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000)
