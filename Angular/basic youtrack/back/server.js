import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
const app = express()
const PORT = 4000
const router = express.Router()

import Issue from './models/issue'

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/issues');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/issues').get((req, res) => {
  Issue.find((err, issues) => {
    if (err)
      console.log(err)
    else
      res.json(issues)
  })
})

router.route('/issues/:id').get((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (err)
      console.log(err)
    else
      res.json(issue)
  })
})

router.route('/issues/add').post((req, res) => {
  let issue = new Issue(req.body)
  issue.save()
    .then(issue => {
      res
        .status(200)
        .json({ "issue": "Addes Successfully" })
    })
    .catch(err => {
      res
        .status(400)
        .send('Failed to create Issue')
    })
})

router.route('/issue/:id').put((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (!issue)
      return next(new Error('Could not load document '))
    else
      issue.title = req.body.title
      issue.responsabile = req.body.responsabile
      issue.description = req.body.description
      issue.severity = req.body.severity
      issue.status = req.body.status

    issue.save().then(issue => {
      res.json('Update done')
    }).catch(err => {
      res.status(400).send('Update failed')
    })
  })
})

router.route('/issues/delete/:id').delete((req, res) => {
  Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
    if (err)
      res.json(err);
    else
      res.json('Remove successfully');
  })
})

app.use('/', router)

app.listen(PORT, () => console.log(`You are on port ${PORT}`))