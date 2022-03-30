import React, { createContext, useEffect, useState } from 'react'
import { Auth, Hub, API, graphqlOperation } from 'aws-amplify'

import { listEmployeess } from '../graphql/queries'
export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null)
  const [dbUser, setDbUser] = useState(null)
  const [groupType, setGroupType] = useState(null)

  useEffect(() => {
    checkUser()

    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          checkUser()
        case 'signOut':
          setUser(null)
          setGroupType(null)
          break
        default:
          return
      }
    })
  }, [])
  async function checkUser() {
    try {
      const resultUser = await Auth.currentAuthenticatedUser()
      setUser(resultUser)

      setGroupType(
        resultUser.signInUserSession.accessToken.payload['cognito:groups'][0]
      )
      getDbUser(resultUser)
    } catch (error) {
      //updateUser(null)
    }
  }

  async function getDbUser(resultUser) {
    let filter = {
      owner: {
        eq: resultUser.username,
      },
    }
    try {
      const employeeData = await API.graphql({
        query: listEmployeess,
        variables: { filter: filter },
      })
      const employeeDetails = employeeData.data.listEmployeess.items[0]
      setDbUser(employeeDetails)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <UserContext.Provider value={{ user, groupType, dbUser, setDbUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
