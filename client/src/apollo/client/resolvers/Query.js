import gql from 'graphql-tag';

const idQuery = gql`
  query {
    id @client
  }
`;

const Query = {
  getId: (parent, args, { cache }, info) => {
    const { id: userId } = cache.readQuery({ query: idQuery })

    return userId;
  }
};

export default Query;
