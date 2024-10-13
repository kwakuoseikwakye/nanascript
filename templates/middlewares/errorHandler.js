exports.errorHandler = (err, req, res, next) => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error', error: err.message });
};