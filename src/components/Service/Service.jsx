import { useState,useEffect } from 'react'
import './Service.css'
import { MdElectricBolt } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";
import { SiAutomattic } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
import { SiMercedes } from "react-icons/si";
import { SiVolkswagen } from "react-icons/si";
import { SiToyota } from "react-icons/si";
import AOS from "aos";


function Service({theme}) {

  useEffect(() => {
    AOS.refresh();
  });
  const [filter,setFilter]=useState("");
   const [clicked,setClicked]=useState(1)
   
   const handleClick= (x)=>{
    setClicked(x)
   }
  return (
      <main id='cars'>
        <article>
        <section className="section featured-car" id="featured-car section">
        <div className="container">
          <div className="title-wrapper">
          <h2 className="h2 section-title" style={{ color: theme === 'dark' ? 'white' : 'black' }}>TRAINDING CARS</h2>

           
           <div className='filtering' style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                <span onClick={()=>{setFilter(""); handleClick(1)}} className={clicked === 1 ? "active" :""}>
                   ALL</span>
                  <span onClick={()=>{setFilter("mercedes"); handleClick(2)}} className={clicked === 2 ? "active" : ""}>
                  <SiMercedes  /></span>
                  <span onClick={()=>{setFilter("volse"); handleClick(3)}} className={clicked === 3 ? "active" : ""}>
                  <SiVolkswagen /></span>
                  <span onClick={()=>{setFilter("toyota"); handleClick(4)}} className={clicked === 4 ? "active" : ""}>
                  <SiToyota /></span>
           </div>
          </div>
          <ul className="featured-car-list" >

          {data.filter((item)=>{
           
                 if (filter === ""){
                       return item
                    }
                else if(filter === "mercedes"){
                  return item.vehicle === "mercedes"
                  }
                  else if(filter === "volse"){
                    return item.vehicle === "volse"
                  }
                  else if(filter === "toyota"){
                    return item.vehicle === "toyota"
                  }
              
          
          }).map((item,index)=>(
            
            <li  key={index}>
              <div className="featured-car-card" style={{ color: theme === 'dark' ? 'white' : 'black' }}>

                <figure className="card-banner">
                  <img src={item.img} alt="Toyota RAV4 2021" loading="lazy" width="440" height="300"
                    className="w-100" />
                </figure>

                <div className="card-content">

                  <div className="card-title-wrapper">
                    <h3 className="h3 card-title" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                      <a href="#">{item.title}</a>
                    </h3>

                    <data className="year" value="2021" style={{ color: theme === 'dark' ? 'white' : 'black' }}>{item.date}</data>
                  </div>

                  <ul className="card-list">

                    <li className="card-list-item">
                       <p> <IoPeopleSharp /></p>
                      <span className="card-item-text" style={{ color: theme === 'dark' ? 'white' : 'black' }}>{item.sites} People</span>
                    </li>

                    <li className="card-list-item">
                     <p><MdElectricBolt /></p> 
                      <span className="card-item-text" style={{ color: theme === 'dark' ? 'white' : 'black' }}>{item.designe}</span>
                    </li>

                    <li className="card-list-item">
                      <p><IoIosSpeedometer /></p> 
                      <span className="card-item-text" style={{ color: theme === 'dark' ? 'white' : 'black' }}>{item.km}km / {item.liter}-lit</span>
                    </li>

                    <li className="card-list-item">
                    <p> <SiAutomattic /></p>
                   <span className="card-item-text" style={{ color: theme === 'dark' ? 'white' : 'black' }}>{item.drived}</span>
                    </li>

                  </ul>

                  <div className="card-price-wrapper">

                    <p className="card-price" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                      <strong>${item.price}</strong> / month
                    </p>
                    <button className="btn" >Call now</button>

                  </div>

                </div>

              </div>
            </li>

        
            
       
          ))}
                    </ul>

                </div>   

          </section>

      
    
        </article>
      </main>
    
 
  )
}

export default Service

const data=[
  {
      img:"images/car-2.jpg",
      title:"Toyota RAV4",
      date:"2021",
      sites:"4",
      km:"6.1",
      liter:"1",
      designe:"Hybrid",
      drived:"Automatic",
      price:"450",
      vehicle:"volse"
     },
     {
      img:"images/car-3.jpg",
      title:"Toyota RAV4",
      date:"2021",
      sites:"4",
      km:"6.1",
      liter:"1",
      designe:"Hybrid",
      drived:"Automatic",
      price:"450",
      vehicle:"mercedes",

     },
     {
      img:"images/car-4.jpg",
      title:"Toyota RAV4",
      date:"2021",
      sites:"4",
      km:"6.1",
      liter:"1",
      designe:"Hybrid",
      drived:"Automatic",
      price:"450",
      vehicle:"mercedes",

     },
     {
      img:"images/car-6.jpg",
      title:"Toyota RAV4",
      date:"2022",
      sites:"4",
      km:"6.1",
      liter:"1",
      designe:"Hybrid",
      drived:"Automatic",
      price:"450",
      vehicle:"volse"
     },

     {
      img:"images/car-4.jpg",
      title:"Toyota RAV4",
      date:"2021",
      sites:"4",
      km:"6.1",
      liter:"1",
      designe:"Hybrid",
      drived:"Automatic",
      price:"450",
      vehicle:"toyota",

     },
     {
      img:"images/car-6.jpg",
      title:"Toyota RAV4",
      date:"2021",
      sites:"4",
      km:"6.1",
      liter:"1",
      designe:"Hybrid",
      drived:"Automatic",
      price:"450",
      vehicle:"toyota"
     }
]
