import "graphql-import-node";
import * as userTypeDefs from "./schemas/users.graphql";
import * as emptyTypeDefs from "./schemas/empty.graphql";
import { GraphQLSchema } from "graphql";
// import { makeExecutableSchema } from "@graphql-tools/schema";
import resolverMap from "./resolversMap";
import { buildFederatedSchema } from "@apollo/federation";

const schema: GraphQLSchema = buildFederatedSchema({
  typeDefs: [emptyTypeDefs, userTypeDefs],
  resolvers: resolverMap,
});

export default schema;
