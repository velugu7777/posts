import Ember from 'ember';

export default Ember.Controller.extend({

  newPost:{

    tile:'',
    body:''
  },
  actions:{

    save(){
      let post = this.store.createRecord('post',this.get('newPost'));
      post.save().then((response)=>{
        this.transitionToRoute('posts.post.show', response);
      });

    }

  }

});
