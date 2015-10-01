import Ember from 'ember';

export default Ember.Route.extend({

  filteredContent: function() {
   return computedFilterByQuery(
     this.get('arrangedContent'),
     ['title', 'body'],
     this.get('query'),
     { conjunction: 'and', sort: false}
   );
 }.property('arrangedContent.@each.title', 'arrangedContent.@each.boy', 'query'),

});
