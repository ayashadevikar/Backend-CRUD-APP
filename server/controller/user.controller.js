import User from "../models/user.schema.js";

export const home = async (req, res) => {
  res.send(`<h1>App is working</h1>`)
}

export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            throw new Error("Name and Email are required");
        }
          
        const userExists = await User.findOne({email});

        if(userExists) {
            throw new Error("Email already exists");
        }

        const user = await User.create({
            name,
            email,
        })

    res.status(201).json({
        success: true,
        message: "User created successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
}

export const getUsers = async(req, res) => {
  try {
    const user = await User.find()

    res.status(200).json({
      sucess: true,
      user,
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    })
    
  }
}

export const editUser = async(req, res) => {
   try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body)

      res.status(200).json({
        success: true,
        message: "user updated successfully",
      })
   } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    })
    
   }
}

export const deleteUser = async(req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId)
    
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
     console.log(error);
     res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
