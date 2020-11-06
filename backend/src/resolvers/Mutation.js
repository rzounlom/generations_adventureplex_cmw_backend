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
    },
    registerClient(parent, args, {db}, info) {
        const nameTaken = db.clients.some((client) => client.name === args.data.name);
        const phoneTaken = db.clients.some((client) => client.phone === args.data.phone);
        if (nameTaken) {
            throw new Error("Name already in use.");
          }

        if (phoneTaken) {
            throw new Error("Phone Number aready in use.");
        }

        const client = {
            id: uuidv4(),
            ...args.data
        }

    db.clients.push(client)
    return client
    }
}

export default Mutation;