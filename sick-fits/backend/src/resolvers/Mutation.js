const Mutation = {
  async createItem(parent, args, context, info) {
    // TODO: Check if logged in
    const item = await context.db.mutation.createItem(
      {
        data: { ...args },
      },
      info
    );

    return item;
  },
};

module.exports = Mutation;
