import { IResolvers } from "../../type";

const usersRolver: IResolvers = {
  Query: {
    users: async (_, __) => {
      return [];
    },
  },
};

export default usersRolver;
