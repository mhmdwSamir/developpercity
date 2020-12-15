module.exports = (err, res) => res.status(err.statusCode || 500).send(err);
