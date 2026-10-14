const logger = (req, res, next) => {
    const Date = new Date();
    const result = `API with Endpoint: ${req.url} and Method: ${req.method} was called at ${Date.toLocaleString()}`

    console.log(result)

    next();
};
module.exports = logger;