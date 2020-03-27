const Mutation = {
  setId: (parent, { id }, { cache }, info) => {
    cache.writeData({ data: { id } });

    return null;
  }
};

export default Mutation;
