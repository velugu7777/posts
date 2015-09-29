import Ember from 'ember';

export default Ember.Route.extend({

  actions:{

  save(){
    var post = this.currentModel;

    post.save().then(() => {
      this.transitionTo('posts.post.show');
      this.get('flashMessages').success('you are  successfully edited a post');
    });

  },
  cancel() {
this.transitionTo('posts.post.show');
}

}

});
