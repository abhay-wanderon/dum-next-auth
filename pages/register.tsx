import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'

const RegisterPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [registerDetails, setRegisterDetails] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisterDetails({ ...registerDetails, [name]: value })
    }

    const handleRegiter = async () => {
        if (registerDetails.email && registerDetails.name && registerDetails.password) {
            setIsSubmitting(true)
            try {
                const response = await axios.post("/api/register", registerDetails)
                console.log(response)
            } catch (err) {
                console.log(err)
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    return (
        <div className='flex flex-col gap-y-3 bg-green-100 w-[300px] p-5'>
            <input type="text" name="email" placeholder='email' onChange={handleInputChange} />
            <input type="text" name="name" placeholder='name' onChange={handleInputChange} />
            <input type="text" name="password" placeholder='password' onChange={handleInputChange} />
            <button disabled={isSubmitting} className='bg-purple-700 text-white' onClick={handleRegiter}>Register</button>
        </div>
    )
}

export default RegisterPage