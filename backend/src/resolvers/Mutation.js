import { v4 as uuidv4 } from "uuid";

const Mutation = {
  //user mutations
    createUser : async (parent, args,{models:{UserModel}}, info) => {
      const {email, password, role, name} = args.data
           //check if email taken
    const emailTaken = await UserModel.findOne({email}).exec();
    
    if (emailTaken) {
      throw new Error("Email taken.");
    }

    const user = await UserModel.create({ name, password, email, role });
    return user;
    },
    updateUser: async (parent, {id, data}, {models:{UserModel}}, info) => {
      const {email, role, name, password} = data
        //see if user exists
        const user = await UserModel.findById({_id: id})

        //throw error if user does not exists
        if(!user) {
            throw new Error("User not found")
        }

        //check data
        const emailTaken = await UserModel.findOne({email}).exec();

        if (emailTaken) {
          user.email = user.email;
        } else {
          user.email = email;
        }

        if (name && typeof name === "string") {
          user.name = name;
        } else {
          user.name = user.name
        }

        if (password && typeof password === "string") {
          user.password = password;
        } else {
          user.password = user.password
        }

        if (role) {
          user.role = role;
        } else {
          user.role = user.role
        }

        try {
          await user.save()
          console.log("User Updated: " + user)
          return user
        } catch (error) {
          if(error) {
            console.log(error)
            throw new Error("User Not Saved")
          }
        }
    },

    //client mutations
    createClient: async (parent, args, {models:{ClientModel}}, info) => {
        const {name, phone} = args.data
        const nameTaken = await ClientModel.findOne({name}).exec()
        const phoneTaken = await ClientModel.findOne({phone}).exec()
        if (nameTaken) {
            throw new Error("Name already in use.");
          }

        if (phoneTaken) {
            throw new Error("Phone Number aready in use.");
        }

        const client = await ClientModel.create({
          name,
          phone
        })

    return client
    }
}

export default Mutation;