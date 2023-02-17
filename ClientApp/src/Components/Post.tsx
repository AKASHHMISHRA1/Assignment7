import axios from "axios";
import { response } from "express";
import React ,{FC,useEffect,useRef,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';

const Post:FC<any>=()=>{
    
    const Name=useRef<HTMLInputElement> (null);
    const Country=useRef<HTMLInputElement> (null);
    const AnnualIncome=useRef<HTMLInputElement> (null);
    const Email=useRef<HTMLInputElement> (null);
    
    const navigate=useNavigate();
    function AddUserData(){
        // console.log(Name.current?.value);
        // console.log(Country);
        const email=Email.current?.value.split(',');
        console.log(email);
        var payload={
            Id:"",
            name: Name.current?.value,
            country:Country.current?.value,
            annualIncome: AnnualIncome.current?.value,
            emailIdsList: email
        };
        axios.post("https://localhost:44372/UserCrud",payload)
        .then((response)=>{
              navigate("/");
        });
    }
    return(
        <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" ref={Name}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Label>Country:</Form.Label>
        <Form.Control type="text" ref={Country}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Label>AnnualIncome:</Form.Label>
        <Form.Control type="number" ref={AnnualIncome}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" ref={Email}/>
      </Form.Group>
      
      <Button variant="primary" type="button" onClick={AddUserData}>
        Submit
      </Button>
    </Form>
    );
}



export default Post;