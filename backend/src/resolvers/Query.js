const Query = {
users(parent, args, {db}, info) {
    return db.users
    },
clients(parent, args, {db}, info) {
    return db.clients
}
}

export default Query