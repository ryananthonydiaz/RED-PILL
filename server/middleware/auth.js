exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send({ error: 'This user is not authorized for admin permissions' })
    }
    next();
  }
}