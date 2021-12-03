const express = require('express')
const Article = require('./models/articles')
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://127.0.0.1/myBlog')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false }))

app.get('/', async (req,res) => {
    const articles = await Article.find().sort({ createdAt: 'desc'})
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000)
