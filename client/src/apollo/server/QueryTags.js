import gql from 'graphql-tag';

export const usersQuery = gql`
  query {
    users {
      id
      name
    }
  }
`;

export const locationDatesQuery = gql`
  query LocationDatesQuery($id: String){
    locationDates(id: $id)
  }
`;

export const locationTypesQuery = gql`
  query LocationTypesQuery($employeeId: String!, $date: String!){
    locationTypes(employeeId: $employeeId, date: $date){
      id
      type
    }
  }
`;

export const locationDetailQuery = gql`
  query LocationDetailQuery($locationId: String!){
    locationDetail(locationId: $locationId){
      type
      longitude
      latitude
      date
      timestamp
    }
  }
`;

export const userQuery = gql`
  query UserQuery {
    user {
      name
      role
    }
  }
`;
