import Computers from "../Models/ComputerModels.js";

//===============GET ALL COMPUTERS================================================================
export const GetAllComputers = async (req, res) => {
  try {
    const computer = await Computers.find();
    res.status(200).json(computer);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//===============GET ALL COMPUTERS================================================================



//===============CREATE COMPUTER==================================================================
export const CreateComputer = async (req, res) => {
  try {
    await Computers.create(req.body);
    res.status(200).json({
      'message' : 'Computer created successfully'
    })
  } catch (error) {
    res.json({ message: error.message });
  }
};

//===============CREATE COMPUTER==================================================================
