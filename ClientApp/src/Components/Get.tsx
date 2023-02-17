import axios from "axios";
import { response } from "express";
import React ,{FC,useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router";

const Get:FC<any>=()=>{

      const [userData,setUserData]=useState([
        {
          "id": "",
          "name": "",
          "country": "",
          "annualIncome": 0,
          "emailIdsList": [
            ""
          ]
        }
      ]);
    useEffect(() => {
        /*const port=process.argv0;
        console.log(port);*/
        //console.log(process.argv);
        axios.get("https://localhost:44372/UserCrud").then(
      (response)=>{
        setUserData((existingData)=>{
            return response.data;
        });
       });
      },[]);
      
      const listItems = userData.map(
        (element) => {
            return (
                <>
                <ul>
                    <li>
                        {element.id}
                    </li>
                    <li>{element.name}</li>
                    <li>{element.country}</li>
                    <li>{element.annualIncome}</li>
                    <li>{element.emailIdsList.join(', ')}</li>
                </ul>
                    
                <Button variant="primary" type="button" onClick={()=>{navigate(`/updateUserData/${element.id}`)}}>
                    Update User
                </Button>
                <Button variant="primary" type="button" onClick={()=>{navigate(`/deleteUserData/${element.id}`)}}>
                    Delete User
                </Button>
             </>
            )
        }
      )
      const navigate=useNavigate();
      return(
        <>
         <p>{listItems}</p>
         <Button variant="primary" type="button" onClick={()=>{navigate("/addUser")}}>
            Add a User
         </Button>
         
        </>
        
      );
}

export default Get;