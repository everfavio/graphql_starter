import Item from './models/item';
import User from './models/user';

const users = [];
let user = {};
export const resolvers = {
  Query: {
    getItem: async (_, {id}) => {
      return await Item.findOne({_id: id});
    },
    users: (_,{id},context, info) => {
      return users.find(user => user.id === id);
    },
    getUsers: async() => {
      return await User.find().populate('users');
    },
    users: () => {
      return users;
    },
  },
  Mutation: {
    createUser: async (_, {input}) => {
      const user = await User.create(input);
      return await User.findOne({_id: user.id}).populate('items');
    },
    createItem: async (_, {input}) => {
      return Promise.resolve(Item.create(input));
    },
    updateUser: async(_, {input}) => {
      return await User.findOneAndUpdate({_id: input.id}, input, {new: true});
    },
    deleteUser: async(_, {id}) => {
      return await User.findOneAndRemove({_id:id});
    }
  }
};
