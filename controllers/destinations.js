// const multer = require('multer');
const Destination = require('../models/destination');

module.exports = {
  index,
  show,
  new: newDestination,
  create,
  delete: deleteDestination,
  edit,
  update
};

async function index(req, res) {
  const destinations = await Destination.find({});
  res.render('destinations/index', { destinations });
}

async function show(req, res) {
  const destination = await Destination.findById(req.params.id);
  res.render('destinations/show', { destination });
}

function newDestination(req, res) {
  res.render('destinations/new');
}

async function create(req, res) {
  const destination = await Destination.create(req.body);
  res.redirect(`/destinations/${destination._id}`);
}

async function deleteDestination(req, res) {
  await Destination.findByIdAndDelete(req.params.id);
  res.redirect('/destinations');
}

async function edit(req, res) {
  const destination = await Destination.findById(req.params.id);
  res.render('destinations/edit', { destination });
}

async function update(req, res) {
  await Destination.findByIdAndUpdate(req.params.id, req.body);
  const destination = await Destination.find({});
  res.render('destinations/index', {
    destinations: destination
  });
}








