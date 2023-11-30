import React from 'react'
import { useForm } from 'react-hook-form'

const FilterPrice = ({ setPriceRange }) => {
const { register, handleSubmit, reset } = useForm()

const submit = (data) => {
    const from = Number(data.from)
    const to = Number(data.to)
setPriceRange({
from,
to: to === 0 ? Infinity : to,

})
reset({
    from: '',
    to: ''
})
}
  return (
    <form onSubmit={handleSubmit(submit)}>
        <label>
            <span>From</span>
            <input {...register('from')} type="number" />
            </label>
            
            <label htmlFor="">
                <span>To</span>
                <input {...register('to')} type="number" />
            </label>
            <button>Filter</button>
    </form>
  )
}

export default FilterPrice