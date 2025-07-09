import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
   /*  546c72b99cf64514c2c03c7ef473011b */

   const getMovies = async () => {
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`);
            console.log(response);
        }catch(error){
            console.error(error)
        }
   }
   useEffect(()=>{
         getMovies();
   }, [])
    return (
        <div className='home'>
            <div className="upComing">
                    
            </div>
            <div className="search"></div>

        </div>
    );
};

export default Home;