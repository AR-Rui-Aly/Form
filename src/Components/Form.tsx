import 'bootstrap/dist/css/bootstrap.css'
import { FormEvent, useRef, useState } from 'react';
import {useForm} from 'react-hook-form'

interface fomData {
  name: string,
  age: number,
}


const Form = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<fomData>()
  
  
  
  const onSubmit = (data: FieldValues) => console.log(data);
  
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>  
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input {...register('name', { required: true, minLength: 3 })} id='name' type="text" className="form-control" />
        {errors.name?.type === 'required' && <p className='text-danger'>name field is required.</p>}
        {errors.name?.type === 'minLength' && <p className='text-danger'>name must a least be 3 chars.</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label"></label>
        <input {...register('age')} id='age' type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type='submit'>Submit</button>
    </form>
  )
}

export default Form