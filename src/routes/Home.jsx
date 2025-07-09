import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
   /*  546c72b99cf64514c2c03c7ef473011b */
   const [upComingMovies, setUpComingMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const getMovies = async () => {
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`);
            setUpComingMovies(response.data.results);
            //console.log(response.data.results);
            setIsLoading(false);
        }catch(error){
            console.error(error);
            setIsLoading(false);
        }
   }
   useEffect(()=>{
         getMovies();
   }, []);

   const getRandomMovie = () => {
        if (upComingMovies.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * upComingMovies.length);
        return upComingMovies[randomIndex];
   }
   const randomMovie = getRandomMovie();
    return (
        <div className='home'>
            <div className="upComing">
                   {
                    isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <p>{randomMovie ? randomMovie.title : "No upcoming movies"}</p>
                    )
                    }
            </div>     
            <div className="search"></div>

        </div>
    );
};

export default Home;