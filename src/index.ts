import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schemasMap";

const PORT = 8001;

(async () => {
  const app = express();
  const server = new ApolloServer({
    schema,
    introspection: true,
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
})();
