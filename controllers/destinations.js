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
  res.render('destinations/index', {
    destinations: destinations
  });
}


async function show(req, res) {
  try {
    const destination = await Destination.findById(req.params.id).exec();
    if (!destination) {
      // Handle the case where the destination is not found (e.g., return a 404 page).
      res.status(404).render('error', { message: 'Destination not found' });
    } else {
      res.render('destinations/show', { destination });
    }
  } catch (error) {
    // Handle any errors that occur during the database query or rendering.
    res.status(500).render('error', { message: 'Internal Server Error' });
  }
}




async function newDestination(req, res) {
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
  try {
    const destination = await Destination.findById(req.params.id).exec();
    if (!destination) {
      // Handle the case where the destination is not found (e.g., return a 404 page).
      res.status(404).render('error', { message: 'Destination not found' });
    } else {
      res.render('destinations/edit', { destination });
    }
  } catch (error) {
    // Handle any errors that might occur during the database query or rendering.
    res.status(500).render('error', { message: 'Internal Server Error' });
  }
}


async function update(req, res) {
  await Destination.findByIdAndUpdate(req.params.id, req.body);
  const destination = await Destination.find({});
  res.render('destinations/index', {
    destinations: destination
  });
}








