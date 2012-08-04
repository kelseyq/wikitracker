  var previous = localStorage['wikitracker_previous'];
  var VisitedSite = StackMob.Model.extend({
    schemaName: 'visitedsites' 
  });
  var theUrl = document.URL;
  var fromUrl = document.referrer;
  var vs = new VisitedSite({ url:theUrl, from:fromUrl });
  vs.create({
    success: function(model) {
      console.debug(model.get('url')); 
      var prev = new VisitedSite({ visitedsites_id: localStorage['wikitracker_previous'] });
      prev.fetch({
        success: function(model) {
          alert(model.get('url'));
        }
      });
      localStorage['wikitracker_previous'] = model.get('visitedsites_id');
    }
  });