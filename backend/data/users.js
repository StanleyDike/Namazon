import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin Stanley',
    email: 'stanley.dike21@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Chief Keef',
    email: 'ChiefKeef@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kevin Durant',
    email: 'easymoneysniper@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
