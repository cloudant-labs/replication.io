function(doc, req) {
  var mustache = require("lib/mustache");
  return mustache.to_html(this.templates.html, {
        page: doc,
        site: {
          base_url: '/' + req.path.slice(0,3).join('/') + '/_rewrite/'
        },
        req: JSON.stringify(req.path.slice(0,3))
      });
}
