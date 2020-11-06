const users = [
    {
      id: "1",
      name: "John Doe",
      email: "jdoe@gmail.com",
      age: 35,
      role: 'GENERAL',
      password: "123456"
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      age: 18,
      role: 'ADMIN',
      password: "123456"
    },
    {
      id: "3",
      name: "Mary Poppins",
      email: "mp@gmail.com",
      age: 22,
      role: 'GENERAL',
      password: "123456"
    },
  ];

  const clients = [
   {
    id: "1",
    name: "James Rogers",
    phone: "574-355-4874"
   },
   {
    id: "2",
    name: "John Doe",
    phone: "574-355-4874"
   },
   {
    id: "3",
    name: "Jane Doe",
    phone: "574-355-4874"
   },
   {
    id: "4",
    name: "Pam Rogers",
    phone: "574-355-4874"
   },

  ]

  const db = {
    users,
    clients
  }

  export default db;