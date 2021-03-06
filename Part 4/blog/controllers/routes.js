
const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body) 
  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = configuration.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
