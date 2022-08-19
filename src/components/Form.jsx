import React from 'react'
import {useForm} from "react-hook-form"
import{yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema= yup.object({
  firstname:yup.string().length(20).required(),
  lastname:yup.string().length(20).required(),
  middlename:yup.string().length(),
  dateOfBirth:yup.date().required(),
  gender:yup.string().oneOf(["male","female"]),
  phoneNumber:yup.string().length(10).required(),
  email:yup.string().email().required(),
})

function Form() {
 const{register,handleSubmit,watch}= useForm({
  mode:"onSubmit",
  resolver: yupResolver(schema)
 })
 const onSubmit=(data)=>{
 console.log(data)
}
  
 return (
    <div className="h-screen bg-gradient-to-br from-fuchsia-600 to-orange-500 flex justify-center items-center   " >
    
        <div className='max-w-2xl w-full bg-gray-200 rounded-xl p-10'>
    <form onSubmit={handleSubmit(onSubmit)}>
          <div>

            <div>
            <label htmlFor="firstname" className='form-label'>First Name</label>
            <input type="text" {...register("firstname")} />
            </div>
            <div>
            <label htmlFor="lastname" className='form-label'>Last Name</label>
            <input type="text" {...register("lastname")}  />
            
            </div>
            <div>
              
                <label htmlFor="middlename" className='form-label' >Middle Name</label>
                <input type="text" {...register("middlename")} />
            </div>
          </div>
            <div>
                <label htmlFor="male" className='form-label'> 
                <input type="radio"  value="male" {...register("gender")} />Male
                </label>
                <label htmlFor="female"> 
                <input type="radio" {...register("gender")} value="female"  />Female
                </label>
            </div>
            <div>
                <label htmlFor="dateOfBirth" className='form-label'>Date of Birth:</label>
                <input type="date" {...register("date")} />
            </div>
            <div>
                <label htmlFor="phoneNumber" className='form-label'>Phone Number:</label>
                <input type="tel" placeholder='xxx-xxx-xxxx' {...register("phone")} />
            </div>
            <div>
                <label htmlFor="email"Email className='form-label'>Email:</label>
                <input 
                type="email"
                {...register("email")}
                placeholder='angelinaalorzuke@gmail.com'                />
            </div>
            <div>
                <button type='submit' className= 'bg-orange-400 form-label rounded-lg mt-3'>Register</button>
            </div>
            
         
    </form>
    </div>
    </div>
  )
}

export default Form