import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import data from './data'
import {Container ,Card} from 'react-bootstrap';
const Blog1 = () => {

  
  
    return (
        <section className="container py-4 py-lg-5" >
                     <div className="row justify-content-center">
                         {
                            data.map((blog)=>{
                                const{id,images,title,description,createdAt,authorName}=blog
                                 return(
                                    
                                    <div key={id} className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
                                    <Card className=" p-0 overflow-hidden h-100 shadow  " >
                                        <Card.Img variant="top" src={images} />
                                        <small className="text-primary" > {createdAt} </small>
                                        <Card.Body>
                                            <div className=" ">
                                                <p>👨 {authorName} </p>
                                            </div>
                                            <Card.Title> {title} </Card.Title>
                                            <p> {description.slice(0,50)}........ </p>
                                            
                                            <Link className=" btn-sm btn btn-outline-danger" to={`/blogs/${id}`} >Read more</Link>

                                        </Card.Body>
                                    </Card>
                                </div>
                                    
                       
                               
        
                                 )
                            })
                         }  
                     
                         
                     </div>
              </section>
    )
}

export default Blog1
