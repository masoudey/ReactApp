import express from 'express';
import Bourne from 'bourne';
import bodyParser from 'body-parser';

const db = new Bourne('data.json');
const users = new Bourne('users.json');
const comments = new Bourne('comments.json');
const router = express.Router();

router
	.use(bodyParser.json())
	.route('/post')
		.get(function(req, res){
			let formatPosts = [];
			
			db.find({}, function (err, data){
				console.log(data);
				
				for (let da of data) {
					users.findOne({ 'id': parseInt(da.userId, 10)}, (err, response) => {
						
						da["author"] = response;
						formatPosts.push(da);
					})
					for (let i=0; i < da.comments.length ;i++ ){
						comments.findOne({ 'id': parseInt(da.comments[i])}, (err, comm) => {
							da.comments[i] = comm;

						}
					)}
				}
			});
			
			res.json(formatPosts);
		})
		.post(function(req, res){
			var post = req.body;
			// console.log(post);
			post.userId = req.user.id;

			db.insert(post, function(err, data){
				res.json(data);
			});
		});
router
	.param('id', function(req, res, next){
		req.dbQuery = {id: parseInt(req.params.id, 10)}
		next();
	})
	.route('/post/:id')
		.get(function (req, res){
			console.log("/post/:id",req.params.id.substring(1) );

			db.findOne({ 'id': parseInt(req.params.id.substring(1), 10)}, function (err, data){
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