const express = require('express')
const router = express.Router()

router.post('/own', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var whereUserLives = req.session.data['where-do-you-live']

  // Check whether the variable matches a condition
  if (whereUserLives == "england"){
    // Send user to next page
    res.redirect('/own')
  }
  if (whereUserLives == "elsewhere"){
    // Send user to next page
    res.redirect('/ineligible')
  }
  else {
    // Send user to ineligible page
    res.redirect('/own')
  }

})

router.post('/task-list', function (req, res) {

// Make a variable and give it the value from 'juggling-balls'
var wherePossessionsOwned = req.session.data['possessions-owned']

// Check whether the variable matches a condition
if (wherePossessionsOwned == "yes"){
  // Send user to next page
  res.redirect('/task-list')
}
if (wherePossessionsOwned == "no"){
  // Send user to next page
  res.redirect('/ineligible')
}
else {
  // Send user to ineligible page
  res.redirect('/task-list')
}

})

router.post('/pets', function (req, res) {

// Make a variable and give it the value from 'juggling-balls'
var anyChildren = req.session.data['children']

// Check whether the variable matches a condition
if (anyChildren == "no"){
  // Send user to next page
  res.redirect('/pets')
}
if (anyChildren == "yes"){
  // Send user to next page
  res.redirect('/amount-of-children')
}
else {
  // Send user to ineligible page
  res.redirect('/pets')
}

})

router.post('/financial-asset', function (req, res) {

// Make a variable and give it the value from 'juggling-balls'
var anyPets = req.session.data['pets']

// Check whether the variable matches a condition
if (anyPets == "no"){
  // Send user to next page
  res.redirect('/financial-asset')
}
if (anyPets == "yes"){
  // Send user to next page
  res.redirect('/amount-of-pets')
}
else {
  // Send user to ineligible page
  res.redirect('/financial-asset')
}

})


// Add your routes here - above the module.exports line




module.exports = router
