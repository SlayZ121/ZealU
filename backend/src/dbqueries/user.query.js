import User from "../models/user.model.js";

export const createUser = async (email, fullName, hashedPassword) => {
  try {
    const user = new User({
      email,
      full_name,
      password: hashedPassword,
    });
    await user.save();
    return { success: true, message: "User created", userId: user._id };
  } catch (err) {
    return {
      success: false,
      message: "Error creating user",
      error: err,
      nessage,
    };
  }
};
