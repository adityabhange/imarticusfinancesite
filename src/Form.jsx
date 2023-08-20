import React, { useState } from 'react'
import data from "./Data/Data.js"

function Form() {


    const[ctc , setctc] = useState(0);
    const [user, setuser] = useState(data)
    const[ctcstate, setsctcstate]= useState("")
    console.log(ctc)

    const [info, setinfo] = useState({
        education: '',
        year: '',
        age: '',
        masters: '',
        educationgap: '',
        yearofexp: '',
        yearofmasters: '',
        experince:'',
        aspiration : ''

    })

    const ctcchange=(e)=>{
        let {value} = e.target;
        setctc(value)
    }

    const [Course, setCourse] = useState("Courses")

    const handlechange = (e) => {
        let { value, name } = e.target;
        let getdata = { [name]: value }
        setinfo({ ...info, ...getdata })
    }

    const Coursehandle = () => {
        console.log(info)

        if ((info.masters === "MBA" || info.masters === "MCOM" || info.masters === "ANY FINANACE MASTERS" || info.masters === "ANY ACCOUNTING MASTERS" || info.masters === "PGDM") && info.yearofmasters > 2020) {
            if ((info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.year > 2018 && info.age < 25 && info.educationgap < 1 && (info.experince==="ACCOUNTING"||info.experince==="CA FIRM EXPERINCE"|| info.experince==="FINANCE" || info.experince==="INVESTMENT BANKING")&& (info.aspiration==="IB FRONT OFFICE"||info.aspiration==="FINANCIAL MODELING"||info.aspiration==="EQUITY RESEARCH AND VALUATION"|| info.aspiration==="ALREADY IN IB")) {
                setCourse("PGFAP")
            }
            else if((info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.year > 2018 && info.age < 25 && info.educationgap < 3){
                setCourse("CIBOP")
            }
            else if ((info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM")&& info.year>2019 && (info.aspiration==="WANT A JOB"|| info.aspiration==="WANTS TO CHANGE FIELD"||info.aspiration==="WANTS TO CHANGE FIELD"||info.aspiration==="WANT JOBS IN A BANKS")){

                setCourse("EXCEPTIONAL CIBOP OR PG BANKING")
            }
            else{
                setCourse("EXCEPTIONAL CIBOP OR PG BANKING")
            }
        }

        else if (info.masters === "NO MASTERS" && info.year > 2019 ) {
            if ((info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.age < 25 && info.educationgap < 1 && (info.experince==="ACCOUNTING"||info.experince==="CA FIRM EXPERINCE"|| info.experince==="FINANCE" || info.experince==="INVESTMENT BANKING")&& (info.aspiration==="IB FRONT OFFICE"||info.aspiration==="FINANCIAL MODELING"||info.aspiration==="EQUITY RESEARCH AND VALUATION"|| info.aspiration==="ALREADY IN IB")) {
                setCourse("PGFAP")
            }
            else if((info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.year > 2018 && info.age < 25 && info.educationgap < 3 && (info.aspiration==="WANTS TO MOVE IN CORE FINANCE OPERATION" || info.aspiration==="WANT TO WORK FOR MNC"|| info.aspiration==="WANT A JOB"|| info.aspiration==="BECOME FINANCIAL ANALYST")){
                setCourse("CBOP")
            }
            else if ((info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM")&& info.year>2019 && (info.aspiration==="WANT A JOB"|| info.aspiration==="WANTS TO CHANGE FIELD"||info.aspiration==="WANTS TO CHANGE FIELD"||info.aspiration==="WANT JOBS IN A BANKS")){

                setCourse("PG BANKING AND FINANCE")
            }

            else{
                setCourse("PG BANKING AND FINANCE")
            }
        
            
        }

        else if ((info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM")&& info.year>2019 && (info.aspiration==="WANT A JOB"|| info.aspiration==="WANTS TO CHANGE FIELD"||info.aspiration==="WANTS TO CHANGE FIELD"||info.aspiration==="WANT JOBS IN A BANKS")){

            setCourse("PG BANKING AND FINANCE")
        }

        else{
            setCourse("PG BANKING AND FINANCE")
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
            <label htmlFor="">Aspiration</label>
            <select name='aspiration' onChange={handlechange} >
                {user.aspiration.map((e) => {
                    return (
                        <option>
                            {e}
                        </option>
                    )
                })}
            </select>
                <br />
            <label htmlFor="">CTC : </label><input type="text" name="ctc" onChange={ctcchange}/>

            <br />
            <button onClick={Coursehandle}> Course</button>
            <br /><br />

            <h1>{Course}</h1>
            <div>
                <p>Masters: {info.masters}</p>
                <p>Year of Masters: {info.yearofmasters}</p>
                <p>Graduation: {info.education}</p>
                <p>Year of Graduation: {info.year}</p>
                <p>Experince: {info.experince}</p>
                <p>Year of Experience: {info.yearofexp}</p>
                <p>Age: {info.age}</p>
                <p>Education Gap: {info.educationgap}</p>
                <p>Aspiration: {info.aspiration}</p>
            </div>

        </>


    )
}

export default Form
