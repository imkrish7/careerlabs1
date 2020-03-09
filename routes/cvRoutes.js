const express = require('express');
const User = require('../models/users');
const CV = require('../models/CV');
const route = express.Router();

route.get('/users', async(req, res)=>{

  try {
	  const usersCount = await User.aggregate([{$group:{
		_id: "$_id",
		count: { $sum: 1}
	}}]);

	if(usersCount){
		return res.status(200).json({ success: true, data: usersCount})
	}else {
		return res.status(500).json({ success: false, msg: "Internal server error"})
	}
  } catch (error) {
	  console.error(error);
	  return res.status(400).json({ success: false, msg: 'Something went wrong'})
  }
	
})

route.get('/cv/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const cv = await CV.findById(id);

		if (cv) {
			return res.status(200).json({ success: true, data: cv });
		} else {
			return res.status(500).json({ success: false, msg: 'Internal server error' });
		}
	} catch (error) {
		console.error(error);
		return res.status(400).json({ success: false, msg: 'Something went wrong' });
	}
});

route.post('/cv', async (req, res) => {
	const id = req.params.id;
	try {
		const cv = await CV.findById(id);

		if (cv) {
			return res.status(200).json({ success: true, });
		} else {
			return res.status(500).json({ success: false, msg: 'Internal server error' });
		}
	} catch (error) {
		console.error(error);
		return res.status(400).json({ success: false, msg: 'Something went wrong' });
	}
});
route.put('/cv/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const cv = await CV.findById(id);

		if (cv) {
			return res.status(200).json({ success: true, data: cv });
		} else {
			return res.status(404).json({ success: false, msg: 'Document not found' });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false, msg: 'Internal Error' });
	}
});
route.delete('/cv/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const cv = await CV.findByIdAndDelete(id);

		if (cv) {
			return res.status(200).json({ success: true, data: cv });
		} else {
			return res.status(404).json({ success: false, msg: 'Document not found' });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ success: false, msg: 'Internal Error' });
	}
});
route.get('/cvs', async (req, res) => {
	const id = req.params.id;
	try {
		const cv = await CV.findById(id);

		if (cv) {
			return res.status(200).json({ success: true, data: cv });
		} else {
			return res.status(500).json({ success: false, msg: 'Internal server error' });
		}
	} catch (error) {
		console.error(error);
		return res.status(400).json({ success: false, msg: 'Something went wrong' });
	}
});


module.exports = route;
