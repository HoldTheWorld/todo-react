const router = require('express').Router();
const fs = require('fs').promises
const pathToFile = `${process.env.PWD}/public//todos.json`

router.get('/', async (req, res) => {
  const todos = await fs.readFile(pathToFile)
  const result = JSON.parse(todos)
  res.status(200).json(result)
})


module.exports = router
