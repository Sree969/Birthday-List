import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Birthday = () => {
    let [api,setApi]=useState([]);

    useEffect(()=>{
        let url=axios.get("http://localhost:3000/users");
        url.then(x=>setApi(x.data)).catch(e=>console.log("Api failed",e));
    },[])

  return (
    <>
        <div id="main">
            <h1>{api.length} birthdays today</h1>
            {api.map((x,y)=>{
              return(
                <div className='bcard' key={y}>
                  <img src={x.src} alt="" style={{height:"150px", width:"150px"}}/>
                  <div className='binfo'>
                    <h3 className='name'>{x.name}</h3>
                    {/* <rub>{x.age} <rt>{x.name}</rt></rub><br /> */}
                    <h4>{x.age}</h4>
                    <p>{x.dob}</p>
                  </div>
                </div>
              );
            })}
            <button onClick={()=>setApi([])}>Clear All</button>
        </div>
    </>
  )
}

export default Birthday
