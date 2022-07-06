import React from 'react'
import { useParams } from 'react-router-dom'
import data from './data'
const Blogs = () => {
    const {id} =useParams();
    const foundBlog = data.filter((detail) => detail.id == id);
     console.log(foundBlog);
    const { images,title,description,authorName,createdAt,category } = foundBlog[0] ;
    return (
        <>
       
        <div className=" container p-5 " >
        
            <div className="text-center"><img  src={images} alt=""/></div>
            <div className="text-info h2 pt-2  ">category : {category} </div>
           <d className="d-flex justify-content-between  pt-3 "> <p className="text-info h4 " >Writer name: 👨{authorName} </p> <small className="text-info h6" > Creat Date: {createdAt} </small></d>
            
            <h1 className="text-primary   " > {title} </h1>
            <p style={{textAlign: "justify"}} className="text-light text-justify " > { description } </p>
            
        </div>
        </>
    )
}

export default Blogs