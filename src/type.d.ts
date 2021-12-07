export type IResolver = (
  parent: any,
  args: any,
  context: any,
  info: any
) => any;

export type IResolvers = {
  [key: string]: {
    [key: string]: IResolver;
  };
};
