import React, { useState, useEffect, useMemo } from 'react'
import DataTable from 'react-data-table-component'
import { API, graphqlOperation } from 'aws-amplify'
import { Spinner } from 'reactstrap'

// import { listEmployeess } from '../../graphql/queries'
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
const SecurityTeam = () => {
  //States
  const [employees, setEmployees] = useState()
  const [progressCircle, setProgressCircle] = useState(true)

  //LifeCycle Rules
  useEffect(() => {
    //list all employees
    getEmployees()
  }, [])

  async function getEmployees() {
    // Query with filters, limits, and pagination
    let filter = {
      department: {
        eq: 'SecurityTeam',
      },
    }
    try {
      const employeeData = await API.graphql({
        query: listEmployeess,
        variables: { filter: filter },
      })
      const employeeDetails = employeeData.data.listEmployeess.items
      setEmployees(employeeDetails)
      setProgressCircle(false)
    } catch (err) {
      console.log(err)
    }
  }
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
      name: 'Certifications',
      selector: 'certifications',
      sortable: true,
    },

    {
      name: 'Prplbx Department',
      selector: 'department',
      sortable: true,
    },
  ])
  const fakeColumns = useMemo(() => [])

  return (
    <div>
      <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>
        SecurityTeam
      </h3>
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
      <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>
        Announcements
      </h3>
      <DataTable
        columns={fakeColumns}
        noHeader
        // data={fakeData}
        defaultSortField='id'
        defaultSortAsc={false}
        pagination
        highlightOnHover
        responsive={true}
      />
      <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>
        Meeting Notes
      </h3>
      <DataTable
        columns={fakeColumns}
        noHeader
        data={data}
        defaultSortField='id'
        defaultSortAsc={false}
        pagination
        highlightOnHover
        responsive={true}
      />
      <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>Projects</h3>
      <DataTable
        columns={fakeColumns}
        noHeader
        // data={fakeData}
        defaultSortField='id'
        defaultSortAsc={false}
        pagination
        highlightOnHover
        responsive={true}
      />
    </div>
  )
}

export default SecurityTeam
