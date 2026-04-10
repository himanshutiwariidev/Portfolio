const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const bearerToken = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : '';
  const headerToken = req.headers['x-admin-token'];
  const token = bearerToken || headerToken;

  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized. Valid admin token is required.',
    });
  }

  next();
};

module.exports = adminAuth;
