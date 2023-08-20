import React, { useState } from 'react'
import data from "./Data/Data.js"

function Form1() {

    const [user, setuser] = useState(data)

    const [info, setinfo] = useState({
        education: '',
        year: '',
        age: '',
        masters : '',
        educationgap : '',
        Experince:'',
        yearofexp:'',
        yearofmasters:''

    })

    const [Course, setCourse] = useState(1)

    const handlechange = (e) => {
        let { value, name } = e.target;
        let getdata = { [name]: value }
        setinfo({ ...info, ...getdata })
    }

    const Coursehandle = () => {
        console.log(info)
        switch(Course){
            case 1 : console.log("case1")
        }
    }



    return (
        <>
         <label htmlFor="">Masters</label>
            <select name='masters' onChange={handlechange} >
                {user.masters.map((e) => {
                    return (
                        <option>
                            {e}
                        </option>
                    )
                })}
            </select>
            <br />
            <label htmlFor="">Year of Masters</label>
            <select name='yearofmasters' onChange={handlechange} >
                {user.yearofmasters.map((e) => {
                    return (
                        <option>
                            {e}
                        </option>
                    )
                })}
            </select>
                <br />
            <label htmlFor="">Graduation</label>
            <select name='education' onChange={handlechange}>
                {user.education.map((e) => {
                    return (
                        <option>
                            {e}
                        </option>
                    )
                })}
            </select>
            <br />
            <label htmlFor="">Year of Graduation</label>
            <select name='year' onChange={handlechange} >
                {user.year.map((e) => {
                    return (
                        <option>
                            {e}
                        </option>
                    )
                })}
            </select>
                <br />

                <label htmlFor="">Experience</label>
            <select name='experince' onChange={handlechange} >
                {user.Experince.map((e) => {
                    return (
                        <option>
                            {e}
                        </option>
                    )
                })}
            </select>

            <br />
            <label htmlFor="">Year of Experience</label>
            <select name='yearofexperince' onChange={handlechange} >
                {user.yearofexp.map((e) => {
                    return (
                        <option>
                            {e}
                        </option>
                    )
                })}
            </select>
           

            <br />
                <br />
                <label htmlFor="">Age</label>
            <select name='age' onChange={handlechange} >
                {user.age.map((e) => {
                    return (
                        <option>
                            {e}
                        </option>
                    )
                })}
            </select>
            <br />
            <label htmlFor="">Education Gap</label>
            <select name='educationgap' onChange={handlechange} >
                {user.educationgap.map((e) => {
                    return (
                        <option>
                            {e}
                        </option>
                    )
                })}
            </select>
            <br />
            
                <br />
            <button onClick={Coursehandle}> Course</button>
            <br /><br />

            <h1>{Course}</h1>

        </>


    )
}

export default Form1
