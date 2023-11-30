import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

const FormLogin = () => {

const { register, handleSubmit, reset } = useForm()

const { loginUser } = useAuth()

const submit = data =>{
loginUser(data)


}

  return (
    <form onSubmit={handleSubmit(submit)}>
<label>
    <span>Email</span>
    <input {...register('email')} type="text" />
    </label>
    <label>
    <span>Password</span>
    <input {...register('password')} type="password" />
    </label>
    <button>Login</button>
    </form>
  )
}

export default FormLogin