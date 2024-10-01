export const register = async (req, res) => {
  res.json({ msg: "register user" });
};

export const login = async (req, res) => {
  res.json({ msg: "login user" });
};

export const logout = async (req, res) => {
  res.json({ msg: "logout user" });
};
