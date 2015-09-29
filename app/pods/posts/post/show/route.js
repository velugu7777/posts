import Ember from 'ember';

export default Ember.Route.extend({


  actions:{
    delete() {
        var post = this.currentModel;
        post.deleteRecord();
        post.save().then(() => {
          this.transitionTo('posts');
          this.get('flashMessages').danger('you are  deleted a post');
        });
    }
  }

});
