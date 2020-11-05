import { v4 as uuidv4 } from "uuid";

const Mutation = {
    createUser(parent, args, {db}, info) {
           //check if email taken
    const emailTaken = db.users.some((user) => user.email === args.data.email);

    if (emailTaken) {
      throw new Error("Email taken.");
    }

    const user = {
      id: uuidv4(),
      ...args.data, ...args.data.role = "GENERAL"
    };

    db.users.push(user);
    return user;
    }
}

export default Mutation;