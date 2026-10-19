const logger = (req, res, next) => {

    console.log(`${req.method} ${req.url}`);

    next(); // My middleware has finished continue to next middleware/route 
};

module.exports = logger;