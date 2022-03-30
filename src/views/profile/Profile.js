import React, { useContext } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { updateEmployees } from '../../graphql/mutations'
import { UserContext } from '../../context/UserContext'
const Profile = () => {
  const { user, groupType, dbUser, setDbUser } = useContext(UserContext)
  console.log(dbUser)
  async function handleUpdate() {
    const emloyee = {
      id: dbUser.id,
      lastName: 'KAYAKAYA',
    }

    const returnValue = await API.graphql(
      graphqlOperation(updateEmployees, { input: emloyee })
    )

    const newValue = returnValue.data.updateEmployees
    setDbUser(newValue)
  }
  return (
    <>
      Edit Your Profile Update Mutation here{' '}
      <h4> firstName-{dbUser.firstName}</h4>
      <h4>lastName-{dbUser.lastName}</h4>
      <h4>-phoneNumber{dbUser.phoneNumber}</h4>
      <h4>uniDepartment-{dbUser.uniDepartment}</h4>
      <h4>university-{dbUser.university}</h4>
      <button onClick={handleUpdate}>Update</button>
    </>
  )
}

export default Profile
