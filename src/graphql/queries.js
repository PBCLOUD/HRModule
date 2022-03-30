/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployees = /* GraphQL */ `
  query GetEmployees($id: ID!) {
    getEmployees(id: $id) {
      id
      username
      firstName
      lastName
      phoneNumber
      department
      certifications
      birthDay
      university
      uniDepartment
      graduationYear
      workStartDate
      hobbies
      favoriteTeam
      hometown
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listEmployeess = /* GraphQL */ `
  query ListEmployeess(
    $filter: ModelEmployeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        firstName
        lastName
        phoneNumber
        department
        certifications
        birthDay
        university
        uniDepartment
        graduationYear
        workStartDate
        hobbies
        favoriteTeam
        hometown
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
