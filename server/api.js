import express from 'express';
import Bourne from 'bourne';
import bodyParser from 'body-parser';

const db = new Bourne('data.json');
const router = express.Router();

router
	.use(bodyParser.json())
	.route('/post')
		.get(function(req, res){
			console.log(req.user);
			db.find({}, function (err, data){
				res.json(data);
			});
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
			db.findOne(req.dbQuery, function (err, data){
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