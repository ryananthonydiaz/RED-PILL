import gql from 'graphql-tag';

export const loginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!){
      login(data: { email: $email, password: $password }){
        user {
          name
          email
          password
          role
        }
        token
      }
    }
  `;

export const adminLoginMutation = gql`
  mutation AdminLoginMutation($email: String!, $password: String!){
    adminLogin(data: { email: $email, password: $password }){
      user {
        name
        email
        password
        role
      }
      token
    }
  }
`;

export const createLocationMutation = gql`
  mutation CreateLocationMutation($type: LogType!, $latitude: Float!, $longitude: Float!){
     createLocation(data: { type: $type, latitude: $latitude, longitude: $longitude }){
       employee {
         name
       }
       id
       type
       longitude
       latitude
       date
       timestamp
     }
   }
`;
