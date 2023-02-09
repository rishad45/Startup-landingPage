import React from 'react'
import './create.css'
const CreateTestimonial = () => {
    return (
        <div className='create'>
            <div className='formBody'>
                <div>
                    <span>Enter the Name : </span><br />
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <span>Enter the Description : </span><br />
                    <textarea cols={60} rows={5}></textarea>
                </div>
                <div>
                    <span>Select the post : </span><br />
                    <select>
                        <option value={'CEO'}>CEO</option>
                        <option value={'CTO'}>CTO</option>
                        <option value={'HR'}>HR</option>
                        <option value={'Lead Designer'}>Lead Designer</option>
                    </select>
                </div>
                <div>
                    <span>Choose profile Image</span><br />
                    <input type="file" name="" id="" />
                </div>
            </div>
        </div>
    )
}

export default CreateTestimonial