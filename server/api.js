import express from 'express';
import Bourne from 'bourne';
import bodyParser from 'body-parser';
import multer from 'multer';

const db = new Bourne('data.json');
const users = new Bourne('users.json');
const comments = new Bourne('comments.json');
const router = express.Router();
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './public/')
		console.log("file in multer", file);
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname)
	}
});

const filterFile = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true)
		console.log("file filter works")
	} else {
		cb(null, false);
		console.log("error in file filter")
	}
}
const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 *1024* 5
	},
	fileFilter: filterFile
});

router
	.use(bodyParser.json())
	.route('/post')
		.get(function(req, res){
			let formatPosts = [];
			// console.log("get request");
			db.find({}, function (err, data){
				// console.log("data",data);
				
				for (let da of data) {
					users.findOne({ 'id': parseInt(da.userId, 10)}, (err, response) => {
						
						da["author"] = response;
						
					})
					// for (let i=0; i < da.comments.length ;i++ ){
					comments.find({ 'postId': parseInt(da.id)}, (err, comms) => {
							da['comments'] = comms;

					})
					formatPosts.push(da);
				}
			});
			
			res.json(formatPosts);
		})
		.post(upload.single('img'), function(req, res){
			var post = req.body;
			console.log("req.file", req.file)
			const fileName = req.file.filename;
			post.img = fileName;
			console.log(post);

			db.insert(post, function(err, data){
				res.json(data);
			});
		});
router
	.param('id', function(req, res, next){
		req.dbQuery = {id: parseInt(req.params.id, 10)}
		console.log(req.dbQuery);
		next();
	})
	.route('/post/:id')
		.get(function (req, res){
			console.log("/post/:id",req.params.id.substring(1) );

			db.findOne({ 'id': parseInt(req.params.id, 10)}, function (err, data){
				res.json(data);
			});
		})
		.put(function (req, res){
			var post = req.body;
			delete post.$promise;
			delete post.$resolved;
			db.update(req.dbQuery, post, function(err, data){
				res.json(data[0]);
			});
		})
		.delete(function (req, res){
			db.delete(req.dbQuery, function(){
				res.json(null);
			});
		});
		
export default router;