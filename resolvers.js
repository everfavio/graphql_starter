const users = [];
let user = {};
export const resolvers = {
  Query: {
    item: () => {
      return {
        id: '123123',
        text: 'This is hacker new Item',
        timeISO: '2 ps tuendsy',
        time: 123422,
        title: 'Graphql learning',
        deleted: false
      }
    },
    getUser: (_,{id},context, info) => {
      return users.find(user => user.id === id);
    },
    users: () => {
      return users;
    },
  },
  Mutation: {
    createUser: (_, {input}, context, info) => {
      console.log('args', input);
      user = input;
      users.push(user);
      return user;
    }
  },
};

