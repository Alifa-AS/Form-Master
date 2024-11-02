// import { useState } from 'react'
import './App.css'
// import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefFrom from './Components/RefFrom/RefFrom'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data =>{
  //   console.log('sign up data',data);
  // }
  
  // const handleUpdateProfile = data =>{
  //   console.log('update profile', data)
  // }

  return (
    <>
      <h1 className='text-2xl font-bold'>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign UP</h2>
          <p>Please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm 
      formTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile}
       submitButtonText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>ALways keep updated </p>
        </div>
       </ReuseableForm> */}
    </>
  )
}

export default App
