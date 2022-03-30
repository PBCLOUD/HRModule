import React, { useState, useEffect, useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Container, Row, ButtonGroup, Col, Spinner } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { UserContext } from '../../context/UserContext'
import UserModal from '../../component/UserModal'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { createEmployees } from '../../graphql/mutations'
const initialGroups = [
  {
    name: 'Admins',
    value: 'Admins',
  },
  {
    name: 'DevOpsTeam',
    value: 'DevOpsTeam',
  },
  {
    name: 'GrcTeam',
    value: 'GrcTeam',
  },
  {
    name: 'MarketingTeam',
    value: 'MarketingTeam',
  },
  {
    name: 'SecurityTeam',
    value: 'SecurityTeam',
  },
]
const initialSingleUser = {
  username: '',
  email: '',
  groupname: '',
  phone_number: '',
}
const Users = () => {
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [progressCircle, setProgressCircle] = useState(true)
  const { user } = useContext(UserContext)
  const [users, setUsers] = useState([])
  const [modalControl, setModalControl] = useState(null)
  const [modal, setModal] = useState(false)
  const [singleUser, setSingleUser] = useState(initialSingleUser)
  const [isAdmin, setIsAdmin] = useState(
    user.signInUserSession.accessToken.payload['cognito:groups'][0] === 'Admins'
      ? true
      : false
  )
  const toggle = () => {
    setModal(!modal)
  }
  const onClosed = () => {
    setSingleUser(initialSingleUser)
  }
  useEffect(() => {
    let unmounted = true
    if (unmounted) {
      getUsers()
    }

    return () => {
      unmounted = false
    }
  }, [])

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  const getUsers = async () => {
    if (isAdmin) {
      const result = await listUsers()
      setProgressCircle(false)
      setUsers(result.Users)
    }
  }
  //  *** ADMIN QUERIES FUNCTIONS ***

  // async function addToGroup() {
  //   let apiName = "AdminQueries";
  //   let path = "/addUserToGroup";
  //   let myInit = {
  //     body: {
  //       username: "canberk",
  //       groupname: "Depocu",
  //     },
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `${(await Auth.currentSession())
  //         .getAccessToken()
  //         .getJwtToken()}`,
  //     },
  //   };
  //   return await API.post(apiName, path, myInit);
  // }
  // async function removeUserFromGroup() {
  //   let apiName = "AdminQueries";
  //   let path = "/removeUserFromGroup";
  //   let myInit = {
  //     body: {
  //       username: "canberk",
  //       groupname: "Depocu",
  //     },
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `${(await Auth.currentSession())
  //         .getAccessToken()
  //         .getJwtToken()}`,
  //     },
  //   };
  //   return await API.post(apiName, path, myInit);
  // }
  async function disableUser(username) {
    let apiName = 'AdminQueries'
    let path = '/disableUser'
    let myInit = {
      body: {
        username: username,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    }
    return await API.post(apiName, path, myInit)
  }

  async function enableUser(username) {
    let apiName = 'AdminQueries'
    let path = '/enableUser'
    let myInit = {
      body: {
        username: username,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    }
    return await API.post(apiName, path, myInit)
  }

  async function listUsers() {
    let apiName = 'AdminQueries'
    let path = '/listUsers'
    let myInit = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    }
    return await API.get(apiName, path, myInit)
  }

  async function createUser(username, email, groupname, phone_number) {
    let apiName = 'AdminQueries'
    let path = '/createUser'
    let myInit = {
      body: {
        username: username,
        email: email,
        groupname: groupname,
        phone_number: phone_number,
        //"+1905433961226",
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    }
    return await API.post(apiName, path, myInit)
  }
  async function deleteUser(username) {
    let apiName = 'AdminQueries'
    let path = '/deleteUser'
    let myInit = {
      body: {
        username: username,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    }
    return await API.post(apiName, path, myInit)
  }
  // *** DATA TABLE INITIALIZE ***
  const data = users

  const columns = useMemo(() => [
    {
      name: 'Username',
      selector: 'Username',
      sortable: true,
    },
    {
      name: 'Department',
      selector: 'Attributes[3].Value',
      sortable: false,
    },

    {
      name: 'Email',
      selector: 'Attributes[4].Value',
      sortable: true,
    },
    {
      name: 'Phone',
      selector: 'Attributes[2].Value',
      sortable: true,
    },
    {
      name: 'Enabled/Disabled',
      selector: 'Enabled',
      sortable: false,
      cell: (row) => <div>{row.Enabled === true ? 'Enabled' : 'Disabled'}</div>,
    },
    {
      name: 'Actions',
      cell: (e) => (
        <Container fluid>
          <Row>
            <ButtonGroup>
              <Button
                color='success'
                onClick={() => {
                  handleActionEnable(e)
                }}
              >
                Enable
              </Button>
              <Button
                color='warning'
                onClick={() => {
                  handleActionDisable(e)
                }}
              >
                Disable
              </Button>
              <Button
                color='danger'
                onClick={() => {
                  handleActionDelete(e)
                }}
              >
                Delete
              </Button>
            </ButtonGroup>
          </Row>
        </Container>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: false,
    },
  ])
  async function handleSubmit(e) {
    e.preventDefault()
    if (isAdmin) {
      const phone = `+90${singleUser.phone_number.replace(/ /g, '')}` // +90 for turkish format
      if (modalControl === 'create') {
        try {
          await createUser(
            singleUser.username,
            singleUser.email,
            singleUser.groupname,
            phone
          )
          const employee = {
            username: singleUser.username,
            firstName: singleUser.username,
            phoneNumber: phone,
            department: singleUser.groupname,
            owner: singleUser.username,
          }
          await API.graphql(
            graphqlOperation(createEmployees, { input: employee })
          )
          getUsers()
          toggle()
        } catch (err) {
          console.log('error creating User:', err)
        }
      } else if (modalControl === 'delete') {
        try {
          await deleteUser(singleUser.username)
          getUsers()
          toggle()
        } catch (err) {
          console.log('error deleting User:', err)
        }
      }
    } else {
      console.log('You are not Admin')
    }
  }
  async function handleActionDisable(e, x) {
    try {
      await disableUser(e.Username)
      getUsers()
    } catch (err) {
      console.log('error creating User:', err)
    }
  }

  async function handleActionEnable(e, x) {
    try {
      await enableUser(e.Username)
      getUsers()
    } catch (err) {
      console.log('error creating User:', err)
    }
  }

  function handleActionDelete(e, x) {
    setSingleUser((prev) => {
      return {
        ...prev,
        username: e.Username,
      }
    })

    setModalControl('delete')
    toggle()
  }
  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        {isAdmin ? (
          <>
            <Row>
              <Col xs='4'>
                <Button
                  color='success'
                  onClick={() => {
                    setModalControl('create')
                    toggle()
                  }}
                >
                  New Employee
                </Button>
              </Col>
              <Col xs='8'>
                <h4>Onboard New Employee or Edit Existing One`s Permissions</h4>
              </Col>
            </Row>
            <hr></hr>
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
            {modalControl === 'create' ? (
              <UserModal
                modalTitle='New Employee'
                typeButton='Ekle'
                modal={modal}
                toggle={toggle}
                modalControl={modalControl}
                handleSubmit={handleSubmit}
                singleUser={singleUser}
                setSingleUser={setSingleUser}
                initialGroups={initialGroups}
                responsive={true}
                onClosed={onClosed}
              />
            ) : modalControl === 'delete' ? (
              <UserModal
                onClosed={onClosed}
                modalTitle='Delete User'
                typeButton='Delete'
                modal={modal}
                toggle={toggle}
                modalControl={modalControl}
                handleSubmit={handleSubmit}
                singleUser={singleUser}
                setSingleUser={setSingleUser}
                responsive={true}
              />
            ) : null}
          </>
        ) : (
          <p>You are not Admin</p>
        )}
      </div>
    </div>
  )
}

export default Users
