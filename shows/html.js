function(doc, req) {
  var mustache = require("lib/mustache"),
      debug = ('debug' in req.query
          ? req.query.debug === 'true' || req.query.debug === "1"
          : false),
      mustache_view = {
        page: doc,
        active: doc._id,
        is_active: function() {
          return function (param) {
            if (param == this.active) {
              return 'active';
            }
          }
        },
        site: {
          base_url: '/' + req.path.slice(0,3).join('/') + '/_rewrite/'
        },
        req: (debug ? JSON.stringify(req, null, '\t') : '')
      };

  return mustache.to_html(this.templates.html, mustache_view);
}
