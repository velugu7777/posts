module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': [
        {
          id:1,
          title:'hello',
          body:'help'
        }
      ]
    });
  });

  postsRouter.post('/', function(req, res) {

    var newPost = req.body.post;
    var newId = posts.length + 1;
    newPost.id = newId;
    post.push(newPost);
    res.send({
      post: newPost
    });

  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
