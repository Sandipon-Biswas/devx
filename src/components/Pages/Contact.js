import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const Contact = () => {
    return (
        <div className="py-4" >
            <h1 className="text-light pb-4 text-center " >This is contact Section</h1>
            <div className="container" >
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://images.pexels.com/photos/4160139/pexels-photo-4160139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-light" >your name</Form.Label>
                        <Form.Control type="text " placeholder="your name" />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"></Form.Group>
                        <Form.Label className="text-light" >Email address</Form.Label>
                        <Form.Control type="email" placeholder="sandipon@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label  className="text-light" >wire your text</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                        
                        
                        <Button className="w-100 " variant="outline-danger  " type="submit">
                            Sent your massage
                        </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
