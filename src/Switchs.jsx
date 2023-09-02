import React, { useState } from 'react'
import data from "./Data/Data.js"
import "./Form.css"
import log from "./images/logo.png"

function Switchs() {


    const [ctc, setctc] = useState(0);
    const [user, setuser] = useState(data)
    const [ctcstate, setsctcstate] = useState("")
    const[note,setnote]=useState("")
    console.log(ctc)

    let c = ctc;

    const [info, setinfo] = useState({
        education: '',
        year: '',
        age: '',
        masters: '',
        educationgap: '',
        yearofexp: '',
        yearofmasters: '',
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

        let x = -1;

        if((info.masters === "MBA" || info.masters === "MCOM" || info.masters === "ANY FINANACE MASTERS" || info.masters === "ANY ACCOUNTING MASTERS" || info.masters === "PGDM") && info.yearofmasters > 2021 && (info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.year > 2019 && info.age < 25 && info.educationgap < 1 && (info.aspiration === "IB FRONT OFFICE" || info.aspiration === "FINANCIAL MODELING" || info.aspiration === "EQUITY RESEARCH AND VALUATION" || info.aspiration === "ALREADY IN IB")){
            x=0
            setnote("NOTE : As aspiration is matching to PGFAP Details pitch PGFAP")
        }

        //EXCEPTIONS
        else if((info.masters === "MBA" || info.masters === "MCOM" || info.masters === "ANY FINANACE MASTERS" || info.masters === "ANY ACCOUNTING MASTERS" || info.masters === "PGDM") && info.yearofmasters > 2020 && (info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.year > 2018 && info.age<27 && info.educationgap < 2 && (info.aspiration === "IB FRONT OFFICE" || info.aspiration === "FINANCIAL MODELING" || info.aspiration === "EQUITY RESEARCH AND VALUATION" || info.aspiration === "ALREADY IN IB")){
            x=9
            setnote("NOTE : As this is a exceptional condition always take input from TEAM/PM")
        }

        else if((info.masters === "MBA" || info.masters === "MCOM" || info.masters === "ANY FINANACE MASTERS" || info.masters === "ANY ACCOUNTING MASTERS" || info.masters === "PGDM") && info.yearofmasters > 2021 && (info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.year > 2019 && info.age < 25 && info.educationgap < 3){
            x=1
            setnote("NOTE : As Age, Grad Year And  Grad Field is Matching with CIBOP Requiremnts Please pitch CIBOP (Its a flagship Program of Imarticus Learning )")
        }

        else if((info.masters === "MBA" || info.masters === "MCOM" || info.masters === "ANY FINANACE MASTERS" || info.masters === "ANY ACCOUNTING MASTERS" || info.masters === "PGDM") && info.yearofmasters > 2021 && (info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM") && info.year > 2019 && (info.aspiration === "WANT A JOB" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANT JOBS IN A BANKS") && info.age<25 && info.educationgap<3){
                x=2;
                setnote("NOTE :  As this is a exceptional condition, Its better to take suggestion from TEAM / PM. ")
        }

        else if ((info.masters === "MBA" || info.masters === "MCOM" || info.masters === "ANY FINANACE MASTERS" || info.masters === "ANY ACCOUNTING MASTERS" || info.masters === "PGDM") && info.yearofmasters > 2020 && (info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && (info.year <2021 && info.year>2018) && (info.age<27 && info.age>24) && info.educationgap<3){
            x=3;
            setnote("NOTE : As this is a exceptional condition, Its better to take suggestion from TEAM / PM. ")
        }

        else if((info.masters === "MBA" || info.masters === "MCOM" || info.masters === "ANY FINANACE MASTERS" || info.masters === "ANY ACCOUNTING MASTERS" || info.masters === "PGDM") && info.yearofmasters > 2021 && (info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM") && info.year > 2019 && (info.aspiration === "BECOME FINANCIAL ANALYST" || info.aspiration === "WANTS TO MOVE IN CORE FINANCE OPERATION" || info.aspiration === "LOOKING FOR IB OPS" || info.aspiration === "INVESTMENT BANKING COURSE") && info.age<25 && info.educationgap<3){
            x=4;
            setnote("NOTE : As Age, Grad Year, Grad Field and Aspiration is Matching with CIBOP Requiremnts Please pitch CIBOP (Its a flagship Program of Imarticus Learning ) ")
        } 
        else if(info.masters === "NO MASTERS" && info.year > 2020 && (info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.age < 25 && info.educationgap < 1 && (info.aspiration === "IB FRONT OFFICE" || info.aspiration === "FINANCIAL MODELING" || info.aspiration === "EQUITY RESEARCH AND VALUATION" || info.aspiration === "ALREADY IN IB")){
            x=5;
            setnote("NOTE : As aspiration is matching to PGFAP Details pitch PGFAP ")
        }

        else if(info.masters === "NO MASTERS" && info.year > 2020 && (info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.age < 25 && info.educationgap < 3 && (info.aspiration === "WANTS TO MOVE IN CORE FINANCE OPERATION" || info.aspiration === "WANT TO WORK FOR MNC" || info.aspiration === "WANT A JOB" || info.aspiration === "BECOME FINANCIAL ANALYST")){
            x=6;
            setnote("NOTE : As Age, Grad Year, Grad Field and Aspiration is Matching with CIBOP Requiremnts Please pitch CIBOP (Its a flagship Program of Imarticus Learning )  ")
        }

        else if(info.masters === "NO MASTERS" && info.year > 2019 && (info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM") && (info.aspiration === "WANT A JOB" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANT JOBS IN A BANKS")&& info.age<26 && c<=3){
            x=7;
            setnote("NOTE : Candidate is from non-commerce , Not fianance stream so PG banking and finance program is Good Option to start with Retail Banking Sector ")
        }
        else if(info.masters === "NO MASTERS" && info.year > 2019 && (info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM") && (info.aspiration === "WANT A JOB" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANT JOBS IN A BANKS")&& info.age<26 && c>3){
            x=10;
            setnote("NOTE : According to Education, you can pitch PG BANKING but as CTC is more than 3LPA, Its better to take suggestion from TEAM / PM.")
        }
        else if(info.masters === "NO MASTERS" && info.year > 2019 && (info.education === "Engineering" || info.education === "BSC" || info.education === "BCA" || info.education === "BCS" || info.education === "BA" || info.education === "NON FINANCE NON STEM") && (info.aspiration === "WANT A JOB" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANTS TO CHANGE FIELD" || info.aspiration === "WANT JOBS IN A BANKS")&& info.age<26 ){
            x=11;
            setnote("NOTE :  Candidate is from non-commerce , Not fianance stream so PG banking and finance program is Good Option to start with Retail Banking Sector ")
        }
        else if(info.masters === "NO MASTERS" && (info.year>2005 && info.year<2019) &&  (info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && info.age > 26){
            x=8 ;
            setnote("NOTE : As age and graduation is too old, CMA is the best program which will help candidate with international skills and certification")
        }
        else if (info.masters==="NO MASTERS"&& (info.education === "BBA" || info.education === "BCOM" || info.education === "BCCA" || info.education === "OTHERS COMMERCE GRADUATE" || info.education === "BA ECONOMICS" || info.education === "ANY FINANCE GRADUATE") && (info.year >2018) && (info.age<27 && info.age>24) && info.educationgap<3){
            x=12;
            setnote("NOTE : As this is a exceptional condition, Its better to take suggestion from TEAM / PM. ")
        }

      
        
        switch(x){
            case 0 :  setCourse("PGFAP")
            break;
            case 1 : setCourse("CIBOP")
            break;
            case 2 :  setCourse("EXCEPTIONAL CIBOP OR PG BANKING")
            break;
            case 3 :  setCourse("EXCEPTIONAL CIBOP")
            break;
            case 4 : setCourse("CIBOP")
            break;
            case 5 : setCourse("PGFAP")
            break;
            case 6 : setCourse("CIBOP")
            break;
            case 7 : setCourse("PG BANKING AND FINANCE")
            break;
            case 8 : setCourse("CMA")
            break;
            case 9 : setCourse("EXCEPTIONAL PGFAP")
            break
            case 10 : setCourse("PG BANKING AND FINANCE")
            
            break
            case 11 : setCourse("PG BANKING AND FINANCE")
            break
            case 12 : setCourse("EXCEPTIONAL CIBOP")
            break
            default :
            if(c<=3){
                setCourse("PG BANKING AND FINANCE / CMA")
                setnote("As this is Default condition please check with team")
            }
            else{
                setCourse("CMA")
                setnote("As this is Default condition please check with team")
            }

        }

    }



    return (
        <>
       
            <div className='heads'>
                 <img src={log} alt="" className='img' />
                <p className='slogan'>Initiative By Team Pune</p>
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

                    <label htmlFor=""><b>CTC : </b></label><input className='inputctc' placeholder='  Enter the CTC' type="text" name="ctc" onChange={ctcchange} />
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
                    <p>{note}</p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Switchs