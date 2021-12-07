import { merge } from "lodash";
import UserResolvers from "./resolvers/users";
import { IResolvers } from "../type";

const resolverMap: IResolvers = merge(UserResolvers);
export default resolverMap;
