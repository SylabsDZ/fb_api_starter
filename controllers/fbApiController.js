const fbApiUtil = require('../util/fbApiUtil');

exports.listPosts = function(req, res, next){
  var params = {
    limit: 25
  };
  fbApiUtil.listPosts(req, res, next, params);
}


exports.listComments = function(req, res, next){
  var params = {
    limit: 25
  };
  fbApiUtil.listComments(req, res, next, params);
}
