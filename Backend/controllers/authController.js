const adminLogin = (req, res) => {
  const { adminId, password } = req.body;
  const validAdminId = process.env.ADMIN_ID || 'admin';
  const validPassword = process.env.ADMIN_PASSWORD || 'admin123';
  const adminToken = process.env.ADMIN_TOKEN || 'admin123';

  if (!adminId || !password) {
    return res.status(400).json({
      success: false,
      message: 'Admin ID and password are required.',
    });
  }

  if (
    adminId !== validAdminId ||
    password !== validPassword
  ) {
    return res.status(401).json({
      success: false,
      message: 'Invalid admin ID or password.',
    });
  }

  return res.json({
    success: true,
    message: 'Login successful.',
    token: adminToken,
  });
};

module.exports = {
  adminLogin,
};
