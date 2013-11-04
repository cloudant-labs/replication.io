function(doc, req) {
  var mustache = require("lib/mustache"),
      debug = ('debug' in req.query
          ? req.query.debug === 'true' || req.query.debug === "1"
          : false);
  return mustache.to_html(this.templates.html, {
        page: doc,
        site: {
          base_url: '/' + req.path.slice(0,3).join('/') + '/_rewrite/'
        },
        req: (debug ? JSON.stringify(req, null, '\t') : '')
      });
}
