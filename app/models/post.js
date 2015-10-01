import DS from 'ember-data';

export default DS.Model.extend({

  title:DS.attr('string', {defaultValue: ""}),
  body:DS.attr('string', {defaultValue: ""}),

  sbody: Ember.computed('body', function(){
    return this.get('body').slice(0,200);
  }),

  isLarge: Ember.computed('body', function(){
    console.log(this.get('body').length)
    return this.get('body').length > 200;
  })

});
