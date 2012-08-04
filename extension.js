  var VisitedSite = StackMob.Model.extend({
    schemaName: 'visitedsites' 
  });
  var theUrl = document.URL;
  var fromUrl = document.referrer;
  var vs = new VisitedSite({ url:theUrl, from:fromUrl });
  vs.create({
    success: function(model) {
      console.debug(model.get('url')); 
 
      //StackMob auto generates a unique ID for your object
      //after creating it server-side in the format of [schemaName]_id
      console.debug('ID is: ' + model.get('todo_id'));
 
      //And let's fetch the task from StackMob again AFTER the object has been saved server side for sake of example.
      vs.fetch({
        success: function(model) {
          console.debug(model.toJSON());
        }
      });
    }
  });
  
  console.debug('test');