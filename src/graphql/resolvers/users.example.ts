import { IResolvers } from "../../type";

const usersRolver: IResolvers = {
  Query: {
    chats: async (_, __) => {
      return [];
    },
  },
  Mutation: {
    registerUser: async (_, __) => {},
    blockUser: async (_, __) => {},
  },
};

export default usersRolver;
