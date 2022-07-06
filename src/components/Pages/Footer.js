import React from 'react'
import Logo from '../Logo/Logo'

const Footer = () => {
    return (
        <> 
        <div className="bg-dark p-4" >
            <div className="container">
                <div className="row text-light">
                    <div className="col-md-4 text-center">
                        <Logo/>
                        <p>nulla nemo alias molestias modi tenetur ut? Sed perferendis, dignissimos ratione in voluptate numquam facere ut earum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, velit. sapiente quas</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h3>Contact Us</h3>
                        <p className="" >01762048953</p>
                        <p className="" >hi@physicsofstupid.com</p>
                        <p className="" >Dhaka-1207, Bangladesh</p>
                        <p className="" >Facebook Group</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h3>our visions</h3>
                        <p className="" >Refund Policy</p>
                        <p className="" >Version 1.0</p>
                        <p className="" >Version 1.2</p>
                        <p className="" >Version 2.1</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-light text-center  pt-2">
            <p>© All Rights Reserved by sandipon biswas </p>
        </div>
        </>
    )
}

export default Footer
