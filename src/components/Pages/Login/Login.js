import React,{useState} from 'react'
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";
import  './Login.css'
import Logo from './../../Logo/Logo'
const Login = () => {
    const [toggle, settoggle] = useState(true)
    let navigate = useNavigate();
    const handelelogin = (params) => {
        navigate("/dboard", { replace: true });
    };
    
    
    return (
        <div  >
            <div className=" height-100 container d-flex justify-content-center align-items-center ">
                <div className="px-4 pb-4 pt-4 bg-dark text-light rounded">
                    {
                        toggle?                <Form className=" " >
                        <div className="text-center">
                            <Logo/>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button onClick={handelelogin} className=" w-100 " variant="primary" type="submit">
                           Login
                        </Button>
                    </Form>:                <Form className=" " >
                <div className="text-center">
                    <Logo/>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className=" w-100 " variant="primary" type="submit">
                  Sing up
                </Button>
            </Form>
                    }
            <div className="togle-box">
                    {
                        toggle?<p className="text-center mt-2 pt-3">Don't have an account? <a onClick={()=> settoggle(prev => !prev) } href="#">Sign up?</a></p> :
                        <p className="text-center mt-2 pt-3">Already Have an account? <a onClick={()=> settoggle(prev => !prev) } href="#">Log in?</a></p>
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login
