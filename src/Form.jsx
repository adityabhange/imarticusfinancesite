import React, { useState } from 'react'
import data from "./Data/Data.js"
import "./Form.css"

function Form() {


    const [ctc, setctc] = useState(0);
    const [user, setuser] = useState(data)
    const [ctcstate, setsctcstate] = useState("")
    console.log(ctc)

    const [info, setinfo] = useState({
        education: '',
        year: '',
        age: '',
        masters: '',
        educationgap: '',
        yearofexp: '',
        yearofmasters: '',
        experince: '',
        aspiration: ''

    })

    const ctcchange = (e) => {
        let { value } = e.target;
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

        if ((info.masters === "MBA" || info.masters === "MCOM" || info.masters === "ANY FINANACE MASTERS" || info.masters === "ANY ACCOUNTING MASTERS" || info.masters === "PGDM") && info.yearofmasters > 2021) {
            if ((info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.year > 2019 && info.age < 25 && info.educationgap < 1 && (info.aspiration === "IB FRONT OFFICE" || info.aspiration === "FINANCIAL MODELING" || info.aspiration === "EQUITY RESEARCH AND VALUATION" || info.aspiration === "ALREADY IN IB")) {
                setCourse("PGFAP")
            }
            else if ((info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.year > 2018 && info.age < 25 && info.educationgap < 3) {
                setCourse("CIBOP")
            }
            else if ((info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM") && info.year > 2019 && (info.aspiration === "WANT A JOB" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANT JOBS IN A BANKS") && info.age<25 && info.educationgap<3) {

                setCourse("EXCEPTIONAL CIBOP OR PG BANKING")
            }
            else if ((info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && (info.year <2020 && info.year>2017) && (info.age<27 && info.age>24) && info.educationgap<3){
                setCourse("EXCEPTIONAL CIBOP")
            }

            else if ((info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM") && info.year > 2019 && (info.aspiration === "BECOME FINANCIAL ANALYST" || info.aspiration === "WANTS TO MOVE IN CORE FINANCE OPERATION" || info.aspiration === "LOOKING FOR IB OPS" || info.aspiration === "INVESTMENT BANKING COURSE") && info.age<25 && info.educationgap<3) {

                setCourse("CIBOP")
            }


         
            else {
                setCourse("EXCEPTIONAL CIBOP OR PG BANKING//")
            }
        }

        else if (info.masters === "NO MASTERS" && info.year > 2019) {
            if ((info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.age < 25 && info.educationgap < 1 && (info.experince === "ACCOUNTING" || info.experince === "CA FIRM EXPERINCE" || info.experince === "FINANCE" || info.experince === "INVESTMENT BANKING") && (info.aspiration === "IB FRONT OFFICE" || info.aspiration === "FINANCIAL MODELING" || info.aspiration === "EQUITY RESEARCH AND VALUATION" || info.aspiration === "ALREADY IN IB")) {
                setCourse("PGFAP")
            }
            else if ((info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.year > 2018 && info.age < 25 && info.educationgap < 3 && (info.aspiration === "WANTS TO MOVE IN CORE FINANCE OPERATION" || info.aspiration === "WANT TO WORK FOR MNC" || info.aspiration === "WANT A JOB" || info.aspiration === "BECOME FINANCIAL ANALYST")) {
                setCourse("CBOP")
            }
            else if ((info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM") && info.year > 2019 && (info.aspiration === "WANT A JOB" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANT JOBS IN A BANKS")) {

                setCourse("PG BANKING AND FINANCE")
            }

            else if( info.year<2019 &&  (info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE")) {
                setCourse("CMA")
            }

            else {
                setCourse("PG BANKING AND FINANCE")
            }


        }

        else if ((info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM") && info.year > 2019 && (info.aspiration === "WANT A JOB" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANT JOBS IN A BANKS")) {

            setCourse("PG BANKING AND FINANCE")
        }




    }



    return (
        <>
            <div className='heads'>
                <div className="child1">
                    <label htmlFor="">Masters</label>
                    <div className='select'>
                        <select name='masters' onChange={handlechange} >
                            {user.masters.map((e) => {
                                return (
                                    <option>
                                        {e}
                                    </option>
                                )
                            })}
                        </select>
                        <span className='focus'></span>
                    </div>
                    <br />
                    <label htmlFor="">Year of Masters</label>
                    <div className='select'>
                        <select name='yearofmasters' onChange={handlechange} >
                            {user.yearofmasters.map((e) => {
                                return (
                                    <option>
                                        {e}
                                    </option>
                                )
                            })}
                        </select>
                        <span className='focus'></span>
                    </div>
                    <br />
                    <label htmlFor="">Graduation</label>
                    <div className='select'>
                        <select name='education' onChange={handlechange}>
                            {user.education.map((e) => {
                                return (
                                    <option>
                                        {e}
                                    </option>
                                )
                            })}
                        </select>
                        <span className='focus'></span>
                    </div>
                    <br />
                    <label htmlFor="">Year of Graduation</label>
                    <div className="select">
                        <select name='year' onChange={handlechange} >
                            {user.year.map((e) => {
                                return (
                                    <option>
                                        {e}
                                    </option>
                                )
                            })}
                        </select>
                        <span className='focus'></span>
                    </div>
                    <br />

                    <label htmlFor="">Experience</label>
                    <div className="select">
                        <select name='experince' onChange={handlechange} >
                            {user.Experince.map((e) => {
                                return (
                                    <option>
                                        {e}
                                    </option>
                                )
                            })}
                        </select>
                        <span className="focus"></span>
                    </div>

                    <br />
                    <label htmlFor="">Year of Experience</label>
                    <div className="select">
                        <select name='yearofexperince' onChange={handlechange} >
                            {user.yearofexp.map((e) => {
                                return (
                                    <option>
                                        {e}
                                    </option>
                                )
                            })}
                        </select>
                        <span className="focus"></span>
                    </div>

                    <br />
                    <label htmlFor="">Age</label>
                    <div className="select">
                        <select name='age' onChange={handlechange} >
                            {user.age.map((e) => {
                                return (
                                    <option>
                                        {e}
                                    </option>
                                )
                            })}
                        </select>
                        <span className="focus"></span>
                    </div>
                    <br />
                    <label htmlFor="">Education Gap</label>
                    <div className="select">
                        <select name='educationgap' onChange={handlechange} >
                            {user.educationgap.map((e) => {
                                return (
                                    <option>
                                        {e}
                                    </option>
                                )
                            })}
                        </select>
                        <span className="focus"></span>
                    </div>
                    <br />
                    <label htmlFor="">Aspiration</label>
                    <div className="select">
                        <select name='aspiration' onChange={handlechange} >
                            {user.aspiration.map((e) => {
                                return (
                                    <option>
                                        {e}
                                    </option>
                                )
                            })}
                        </select>
                        <span className="focus"></span>
                    </div>

                    <br />
                    <button className='button-3' onClick={Coursehandle}> Course</button>
                    <br /><br />

                   
                </div>
                <div className='child2'>
                    <div className='box'>
                    <p><b>Masters:</b> {info.masters}</p>
                    <p><b>Year of Masters:</b> {info.yearofmasters}</p>
                    <p><b>Graduation:</b> {info.education}</p>
                    <p><b>Year of Graduation:</b> {info.year}</p>
                    <p><b>Experince:</b> {info.experince}</p>
                    <p><b>Year of Experience:</b> {info.yearofexp}</p>
                    <p><b>Age:</b> {info.age}</p>
                    <p><b>Education Gap:</b> {info.educationgap}</p>
                    <p><b>Aspiration:</b> {info.aspiration}</p>
                    <h1>{Course}</h1>
                    <label htmlFor=""><b>CTC : </b></label><input className='inputctc' placeholder='  Enter the CTC' type="text" name="ctc" onChange={ctcchange} />
                    </div>
                </div>
            </div>
        </>


    )
}

export default Form
