const Query = {
    //user queries
users: async (parent, args, {models: {UserModel}}, info) => {
    const users = await UserModel.find({})
    return users
    },
user: async (parent, {id}, {models: {UserModel}}, info) => {
    const user = await UserModel.findById({_id:id})
    if(!user){
        throw new Error("User not found")
    }
    return user
    },

    //client querys
clients: async (parent, args, {models: {ClientModel}}, info) => {
    const clients = await ClientModel.find({}) 
    return clients
    },
client: async (parent, {id}, {models: {ClientModel}}, info) => {
    const client = await ClientModel.findById({_id:id})
    if(!client){
        throw new Error("Client not found")
    }
    return client
    },
}

export default Query