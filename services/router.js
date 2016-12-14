const FbApiController = require('../controllers/fbApiController');
var router = require('express').Router();

router.route('/pages/posts')
  .post(FbApiController.listPosts);

router.route('/posts/comments')
  .post(FbApiController.listComments);

module.exports = router;
