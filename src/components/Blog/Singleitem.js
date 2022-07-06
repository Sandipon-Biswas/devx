import React from 'react'
import {
   
    Link
  } from "react-router-dom";
import {Container ,Card} from 'react-bootstrap';
function Singleitem({cover,title,link}) {
    return (
        <>
             {/* card */}
             <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
                            <Card className=" p-0 overflow-hidden h-100 shadow  " >
                                <Card.Img variant="top" src={cover} />
                                <Card.Body>
                                    <Card.Title> {title} </Card.Title>
                                    
                                      <Link to={link} className="btn btn-outline-primary btn-sm" >Read More</Link>
                                   
                                 
                                </Card.Body>
                            </Card>
                        </div>
                        {/* card */}
        </>
    )
}

export default Singleitem
