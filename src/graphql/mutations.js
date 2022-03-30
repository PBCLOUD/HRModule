/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployees = /* GraphQL */ `
  mutation CreateEmployees(
    $input: CreateEmployeesInput!
    $condition: ModelEmployeesConditionInput
  ) {
    createEmployees(input: $input, condition: $condition) {
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
export const updateEmployees = /* GraphQL */ `
  mutation UpdateEmployees(
    $input: UpdateEmployeesInput!
    $condition: ModelEmployeesConditionInput
  ) {
    updateEmployees(input: $input, condition: $condition) {
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
export const deleteEmployees = /* GraphQL */ `
  mutation DeleteEmployees(
    $input: DeleteEmployeesInput!
    $condition: ModelEmployeesConditionInput
  ) {
    deleteEmployees(input: $input, condition: $condition) {
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
