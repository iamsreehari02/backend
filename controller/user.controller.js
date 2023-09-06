import User from "../model/user.model.js";

export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return next("write name and email");
    const user = await User.create({ name, email });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getApi = (req, res) => {
  res.send("hello sreehari");
};

export const updateUser = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const { email, name } = req.body;
    const user = await User.findByIdAndUpdate(
      userid,
      { email, name },
      { new: true }
    );
    if (!user) return next("user not found");
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
