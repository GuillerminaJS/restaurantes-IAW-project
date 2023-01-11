import React from 'react'
import FormUsers from '../../components/forms/users/FormUsers'
import NavigationManage from '../../components/forms/NavigationManage'

const ManageUsers = () => {
  return (
    <main>
      <NavigationManage/>
        <FormUsers/>
    </main>
  )
}

export default ManageUsers