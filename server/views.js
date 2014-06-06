var models = require('./models');

var primitives = {
	list: function (req, res, next) {
		var list;
		models[req.params.table].findAll()
			.success(function (list) {
				list = list;
				res.send(list);
			});
	}
}

module.exports = {
	list: primitives.list
};