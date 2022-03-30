// Butun gruplar icin ortak ROUTElar
import React from 'react'

const MyColleagues = React.lazy(() =>
  import('../views/myColleagues/MyColleagues')
)
const Profile = React.lazy(() => import('../views/profile/Profile'))
const commonRoutes = [
  {
    path: '/prplbx-employees',
    exact: true,
    name: 'MyColleagues',
    component: MyColleagues,
  },
  {
    path: '/profile',
    exact: true,
    name: 'Profile',
    component: Profile,
  },
]

export default commonRoutes
