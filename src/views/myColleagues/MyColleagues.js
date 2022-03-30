import React, { useState, useEffect, useMemo } from 'react'
import DataTable from 'react-data-table-component'
//GRAPHQL
import { API, graphqlOperation } from 'aws-amplify'
// import { listEmployeess } from '../../graphql/queries'
import { Spinner } from 'reactstrap'

const listEmployeess = /* GraphQL */ `
  query ListEmployeess(
    $filter: ModelEmployeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
    }
  }
`
const MyColleagues = () => {
  //States
  const [employees, setEmployees] = useState()
  const [progressCircle, setProgressCircle] = useState(true)
  //LifeCycle Rules
  useEffect(() => {
    //list all employees
    getEmployees()
  }, [])

  async function getEmployees() {
    try {
      const employeeData = await API.graphql(graphqlOperation(listEmployeess))
      const employeeDetails = employeeData.data.listEmployeess.items
      setEmployees(employeeDetails)
      setProgressCircle(false)
    } catch (err) {
      console.log(err)
    }
  }
  // *** DATA TABLE INITIALIZE ***
  const data = employees

  const columns = useMemo(() => [
    {
      name: 'Name',
      selector: 'firstName',
      sortable: true,
    },
    {
      name: 'LastName',
      selector: 'lastName',
      sortable: true,
    },
    {
      name: 'Birthday',
      selector: 'birthDay',
      sortable: true,
    },
    {
      name: 'Hometown',
      selector: 'hometown',
      sortable: true,
    },
    {
      name: 'University',
      selector: 'university',
      sortable: true,
    },
    {
      name: 'Department',
      selector: 'uniDepartment',
      sortable: true,
    },
    {
      name: 'Graduation Year',
      selector: 'graduationYear',
      sortable: true,
    },
    {
      name: 'Certifications',
      selector: 'certifications',
      sortable: true,
    },
    {
      name: 'Prplbx Start Date',
      selector: 'workStartDate',
      sortable: true,
    },
    {
      name: 'Prplbx Department',
      selector: 'department',
      sortable: true,
    },
    {
      name: 'Hobbies',
      selector: 'hobbies',
      sortable: true,
    },
    {
      name: 'FavoriteTeam',
      selector: 'favoriteTeam',
      sortable: true,
    },
  ])

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>
        PurpleBox Employees
      </h2>
      {progressCircle ? (
        <div
          style={{ minHeight: '100vh' }}
          className='d-flex justify-content-center align-items-center'
        >
          <Spinner color='warning' />
        </div>
      ) : (
        <DataTable
          columns={columns}
          noHeader
          data={data}
          defaultSortField='id'
          defaultSortAsc={false}
          pagination
          highlightOnHover
          responsive={true}
        />
      )}
    </>
  )
}

export default MyColleagues
