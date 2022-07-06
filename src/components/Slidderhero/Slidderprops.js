import React from 'react'

const Slidderprops = (props) => {
    return (
        <div>
            <div className="container">
                    <div className="row slidder-rivers ">
                        <div className="col-md-6 d-flex align-items-center ">
                            <div className="py-5" >
                            <h1 className="text-white " > {props.text} </h1>
                            <a className="btn btn-outline-danger mt-3" href="#">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6   "><img src={props.img}  className="rounded-3" alt=""/></div>
                    </div>
                </div>
        </div>
    )
}

export default Slidderprops
