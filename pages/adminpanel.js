import React from 'react'
import AdminForm from '../components/AdminForm'
import Advertistments from '../components/Advertistments'
import Header from '../components/Header'

function adminpanel() {
  return (
    <div>
        <Header/>
        <AdminForm/>
        <Advertistments/>
    </div>
  )
}

export default adminpanel