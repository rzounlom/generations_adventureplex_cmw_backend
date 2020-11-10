import { v4 as uuidv4 } from "uuid";

const Mutation = {
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
    updateUser: async (parent, args, {models:{UserModel}}, info) => {
        const {id, data} = args
        //see if user exists
        const user = UserModel.findById({_id: id})
        //throw error if user does not exists
        if(!user) {
            throw new Error("User not found")
        }

        //check data
        const emailTaken = await UserModel.findOne({email}).exec();
      if (emailTaken) {
        throw new Error("Email taken");
      }

      user.email = data.email;

      if (typeof data.name === "string") {
        user.name = data.name;
      }
      await user.save()

      return user;
    },
    registerClient: async (parent, args, {models:{ClientModel}}, info) => {
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