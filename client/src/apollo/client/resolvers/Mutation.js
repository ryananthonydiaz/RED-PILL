const Mutation = {
  someMutation: (parent, { args }, { cache }, info) => {
    const data = {
      dataName: {
        args,
        __typeName: 'Arguments',
      }
    };

    cache.writeData({ data });

    return null;
  }
};

export default Mutation;
