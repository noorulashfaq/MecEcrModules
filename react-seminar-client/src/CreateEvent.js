
import {Table,onTable} from './connect';
import React, { useState, useEffect} from 'react';
import "./sty.css"

export const CreateEvent=()=>{
      // conts[getname(variable),setname(FUNCTION)]=useState(initialized)
      const[allvalues,setAllvalues]=useState([]);

      const doSomething = async() =>{
        const res=await Table()
          setAllvalues(res.data)
        }
        useEffect(() =>{
         doSomething();
         
        },[])

        // const onClicked=async(report)=>{
            
        //     const temp=await onTable(report)
        //     sessionStorage.setItem("report_id",JSON.stringify(temp))
        //     // window.location.assign("/ecr")
        // }

   


    return(
        <>
      
        <div class="main">
 
            <div class="searchbar2">
                <input type="text"
                       name=""
                       id=""
                       placeholder="Search"/>
                <div class="searchbtn">
                  <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                        class="icn srchicn"
                        alt="search-button"/>
                  </div>
            </div>
 <div class="sel">
<style>  
    </style>
        <div class="button-container">
          <button class="menu-button" data-category="Technical Symposium">Technical Symposium</button>
          <button class="menu-button" data-category="Student Techtalk">Student Techtalk</button>
          <button class="menu-button" data-category="Online Seminar">Online Seminar</button>
          <button class="menu-button" data-category="Workshop">Workshop</button>
          <button class="menu-button" data-category="MIST">MIST</button>
          <button class="menu-button" data-category="NETS">NETS</button>
          <button class="menu-button" data-category="GUEST Lectures">GUEST Lectures</button>
          <button class="menu-button" data-category="AIM">AIM</button>
        </div>
</div>
            <div class="report-container1">
                <div class="report-header">
                    <h1 class="recent-Articles">Your Reports</h1>
                    <a className="topic-heading" href="/add"><button class="view" id="addButton">+ Add</button></a>
                              </div>
   <table className='table table-striped '>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Event Title</th>
                            <th>Date</th>
                            <th>Major Type</th>
                            <th>Sub Type</th>
                            
                            {/* <th></th> */}
                            <th>

                            </th>
                            <th>Proposal</th>
                            <th>

                            </th>
                            <th></th><th>Completion</th><th></th><th>Details</th>
                            </tr>
                            <tr><th></th><th></th><th></th> <th></th><th></th><th>Submitted on</th><th>Hod</th><th>Principal</th><th>Submitted on</th><th>Hod</th><th>Principal</th><th></th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            allvalues.map((data)=>
                            (
                                <tr>
                                    <td>{data.report_id}</td>
                                    <td>{data.event_title}</td>
                                    <td>{data.event_date.split('-').reverse().join('-')}</td>
                                    <td>ECR</td>
                                    <td>{(data.event_name)}</td>
                                    {/* <td><a className="topic-heading" href="/ecrInput"><button type="button" className="btn btn-outline-info col-3" onClick={onClicked(data.report_id)}>{data.report_id}</button></a></td> */}
                                    <td>{data.proposal_date.split('-').reverse().join('-')}</td>
                                   
                                  
                                    {
                                (data.report_proposal_status===0) ?
                                <>
               
                                        <td>🕒Pending</td>
                                        <td>🕒Pending</td>
                                        {/* <td></td> */}
                                        <td></td>
                                        <td>🕒Pending</td>
                                        <td>🕒Pending</td>
                                        <td><a className="topic-heading" href="/ecrInput"><h1>ecrInput</h1></a></td>
                                        </>
                                        :
                                        (data.report_proposal_status===1 && data.report_completion_status===0 ) ? 
                                        <>
                                        
                                        <td><h3 style={{color:'green'}}>Accepted</h3></td>
                                        <td>🕒Pending</td>
                                        <td></td>

                                        <td>🕒Pending</td>
                                        <td>🕒Pending</td>
                                        <td><a className="topic-heading" href="/viewPdf"><h3 style={{color:'blue'}}>View proposal</h3></a></td>
                                        </>
                                        :
                                        (data.report_proposal_status===2 && data.report_completion_status===0 ) ?
                                        <>
                                        <td><h3 style={{color:'green'}}>Accepted</h3></td>
                                        <td><h3 style={{color:'green'}}>Accepted</h3></td>
                                        <td>{data.completion_date}</td>
                                   
                                        <td>🕒Pending</td>
                                        <td>🕒Pending</td>
                                        <td><a className="topic-heading" href="/ecrInput"><h3 style={{color:'blue'}}>Create ECR</h3></a></td>
                                        </>
                                        :
                                        (data.report_proposal_status===-1) ?
                                        <>
                                           <td><h3 style={{color:'red'}}>Rejected</h3></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>

                                        </>
                                        :
                                        (data.report_completion_status===1)?

                                        <>
                                          <td><h3 style={{color:'green'}}>Accepted</h3></td>
                                        <td><h3 style={{color:'green'}}>Accepted</h3></td>
                                        <td>{data.completion_date}</td>
                                   
                                        <td><h3 style={{color:'green'}}>Accepted</h3></td>
                                        <td>🕒Pending</td>
                                        <td><a className="topic-heading" href="/viewPdf"><h3 style={{color:'blue'}}>View ECR</h3></a></td>
                                        </>
                                       
                                        :
                                        (data.report_completion_status===2)?

                                        <>
                                          <td><h3 style={{color:'green'}}>Accepted</h3></td>
                                        <td><h3 style={{color:'green'}}>Accepted</h3></td>
                                        <td>{data.completion_date}</td>
                                   
                                        <td><h3 style={{color:'green'}}>Accepted</h3></td>
                                        <td><h3 style={{color:'green'}}>Accepted</h3></td>
                                        <td><a className="topic-heading" href="/viewPdf"><h3 style={{color:'blue'}}>View ECR</h3></a></td>
                                        </>
                                        :
                                        <></>
}
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
                   </div>
       
        </>
    )
}