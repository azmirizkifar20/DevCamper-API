// get bootcamp by ID
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            res.status(404).json({
                success: false,
                error: `Bootcamp not found with id of ${req.params.id}`
            });
        }

        res.status(200).json({ success: true, data: bootcamp });
    } catch (err) {
        next(err);
    }
};

const errorHandler = (err, req, res, next) => {
    // Log to console for dev
    console.log(err);

    res.status(404).json({
        success: false,
        error: `Bootcamp not found with id of ${err.value}`
    });
};

module.exports = errorHandler;
