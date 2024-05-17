import React from 'react'
import AuthFrom from '@/components/AuthForm'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthFrom type='sign-in'/>
    </section>
  )
}

export default SignIn