var views = require('./views');

function setup(app) {
	app.get('/api/:table', views.client.list);
}
 
exports.setup = setup;