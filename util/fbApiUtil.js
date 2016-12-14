const FB  = require('fb');
const config = require('../config');

FB.options({version: config.FB_VERSION});

// TODO: handle pagination

function fetchFbResults (req, res, next, path, fields, limit, access_token){
  FB.api(path, {
      fields: fields,
      limit: limit,
      access_token: access_token
  }, function (response) {
      if(!response || response.error) {
        return res.status(422).json(response);
      }
      return res.json(response);
  });
}

exports.listPosts = function(req, res, next, params) {
  var page = req.body.page;
  if (!page) { return res.status(400).json({error: "page is required"}); };
  var access_token = req.body.access_token;
  if (!access_token) { return res.status(400).json({error: "access_token is required"}); };
  var limit = req.body.limit || params.limit;
  var path = page + '/posts';
  var fields = 'id,message,link,full_picture,story,type,created_time';
  fetchFbResults(req, res, next, path, fields, limit, access_token);
}

exports.listComments = function(req, res, next, params) {
  var post_id = req.body.post_id;
  if (!post_id) { return res.status(400).json({error: "post_id is required"}); };
  var access_token = req.body.access_token;
  if (!access_token) { return res.status(400).json({error: "access_token is required"}); };
  var limit = req.body.limit || params.limit;
  var path = post_id + '/comments';
  var fields = '';
  fetchFbResults(req, res, next, path, fields, limit, access_token);
}
