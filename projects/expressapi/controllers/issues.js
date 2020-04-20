const Issue = require('../models/issue')


const index = (req, res) => {
    res.render('issues')
}

const newIssue = async (req, res) => {
    const issue = await Issue.create(req.body)
    issue.save()
    res.render('tyPage',{
        message: 'Thank you for submitting your issue!',
        refId: issue._id
    })
}


module.exports = {
    index,
    newIssue
}