import Joy from "@hapi/joi";

const SchemaRegister = Joy.object({
  name: Joy.string().min(5).max(100).required().message("Name is required"),
  email: Joy.string().min(5).max(100).required().message("Email is required"),
  password: Joy.string()
    .min(5)
    .max(100)
    .required()
    .message("Password is required"),
});

export const validateRegister = (req, res, next) => {
  const { error } = SchemaRegister.validate(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }
  next();
};
