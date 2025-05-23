import jwt from "jsonwebtoken";
export const generateJWT = (userId, res) => {
  console.log(process.env.JWT_SECRET);
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent cross-site scripting attack
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
