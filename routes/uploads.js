const upload = require('../config/file-upload');

router.post('/', upload.single('photo'), async (req, res) => {
  // req.file contains file info
  // req.body contains other form data  
});