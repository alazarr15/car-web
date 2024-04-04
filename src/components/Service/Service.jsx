import { useState,useEffect } from 'react'
import './Service.scss'
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

                <figure className="card-banner ">
                  <img src={item.img} alt="Toyota RAV4 2021" loading="lazy" width="440" height="300"
                    className="w-full" />
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
                      <span className="card-item-text" style={{ color: theme === 'dark' ? 'white' : 'black' }}>{item.range}km</span>
                    </li>

                    <li className="card-list-item">
                    <p> <SiAutomattic /></p>
                   <span className="card-item-text" style={{ color: theme === 'dark' ? 'white' : 'black' }}>{item.transmission}</span>
                    </li>

                  </ul>

                  <div className="card-price-wrapper">

                    <p className="card-price" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                      <strong>${item.price}</strong>
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
      img:"images/id6-crozz.png",
      title:"id.6 Crozz Pro",
      date:"2023",
      sites:"6",
      range:"600",
      battery:"84.8kwh",
      designe:"Electric",
      transmission:"Automatic",
      price:"5.6 million",
      vehicle:"volse"
     },
     {
      img:"images/eq.png",
      title:"Q8 e-tron sportback", 
      date:"2023",
      sites:"5",
      range:"560",
      battery:"83.4kwh",
      designe:"Electric",
      transmission:"Automatic",
      price:"11 million",
      vehicle:"Audi",

     },
     {
      img:"images/eq.png",
      title:"neta v",
      date:"2023",
      sites:"5",
      range:"400",
      battery:"58kwh",
      designe:"Electric",
      transmission:"Automatic",
      price:"3 million",
      vehicle:"Hozon",

     },
     {
      img:"images/toyota-bz4x_1.png",
      title:"bz4x",
      date:"2023",
      sites:"5",
      range:"500km",
      battery:"66.7kwh",
      designe:"Electric",
      transmission:"Automatic",
      price:"5-5.3 million",
      vehicle:"toyota"
     },

     {
      img:"images/toyota-bz4x_1.png",
      title:"id.4 Crozz Pro",
      date:"2023",
      sites:"5",
      range:"550km",
      battery:"84.8kwh",
      designe:"Electric",
      transmission:"Automatic",
      price:"5 million",
      vehicle:"volse"

     },
     {
      img:"images/toyota-bz4x_1.png",
      title:"Eqc 400 4matic",
      date:"2022",
      sites:"5",
      range:"370km",
      battery:"85kwh",
      designe:"Electric",
      transmission:"Automatic",
      price:"11.9 million",
      vehicle:"mercedes"

     }
]
