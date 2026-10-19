const validateTask = (req, res, next) => {
    const { title, status } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    const allowedStatuses = ["pending", "in-progress", "completed"];

    if (status && !allowedStatuses.includes(status)) {
        return res.status(400).json({
            message: "Invalid status"
        });
    }

    next();
};

module.exports = validateTask;

