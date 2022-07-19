import Users from "../Models/Users.js";

//=======GET ALL USERS===================
export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};


//=======GET ALL USERS===================

// //=======GET ONE USER====================
// export const getOneUser = async (req, res) => {
//   try {
//     const user = await Users.findById(req.params.id);
//     res.status(200).json(user);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };
// //=======GET ONE USER====================

//=======CREATE USER======================
export const createUser = async (req, res) => {
  // CHECK IF EMAIL EXISTS
  const exitEmail = await Users.findOne({ email: req.body.email });
  if (exitEmail) {
    return res
      .status(400)
      .json({ error: true, message: "Email ya registrado" });
  }

  try {
    await Users.create(req.body);
    res.status(200).json({ message: "Cliente Creado Correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//=======CREATE USER=====================
