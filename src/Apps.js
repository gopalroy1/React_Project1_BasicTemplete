import React,{useState} from "react";
import Header from "./Components/Header";
import Aboutme from "./Components/Aboutme";
import Details from "./Components/Details";
import FormDisplayError12June from "./Components/FormDisplayError12June";
import AddToArraySetState12June from "./Components/AddToArraySetState12June";
import MovieApp13June from "./Components/MovieApp13June";
import MovieDetails13June from "./Components/MoviesDetails13June";



const App = ()=> {



    let [movieDetails, setMovieDetails] = useState({});

    return (

        // Making simple resume according to the class 
        // <div>
        //     <Header></Header>
        //     <Aboutme></Aboutme>
        //     <Details title="Skills" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed unde ipsa optio minima ab ex numquam odio illum doloribus, architecto nulla ratione recusandae nobis quibusdam quas rerum fugit laboriosam veniam? Animi, expedita reprehenderit necessitatibus tempore facere adipisci exercitationem voluptates doloribus asperiores autem similique nam cum vitae commodi dolorem fuga.
        // Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed unde ipsa optio minima ab ex numquam odio illum doloribus, architecto nulla ratione recusandae nobis quibusdam quas rerum fugit laboriosam veniam? Animi, expedita reprehenderit necessitatibus tempore facere adipisci exercitationem voluptates doloribus asperiores autem similique nam cum vitae commodi dolorem fuga."/> 
        //     <Details title="Qualification" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed unde ipsa optio minima ab ex numquam odio illum doloribus, architecto nulla ratione recusandae nobis quibusdam quas rerum fugit laboriosam veniam? Animi, expedita reprehenderit necessitatibus tempore facere adipisci exercitationem voluptates doloribus asperiores autem similique nam cum vitae commodi dolorem fuga.
        // Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed unde ipsa optio minima ab ex numquam odio illum doloribus, architecto nulla ratione recusandae nobis quibusdam quas rerum fugit laboriosam veniam? Animi, expedita reprehenderit necessitatibus tempore facere adipisci exercitationem voluptates doloribus asperiores autem similique nam cum vitae commodi dolorem fuga." />
        //     <Details title="Projects" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed unde ipsa optio minima ab ex numquam odio illum doloribus, architecto nulla ratione recusandae nobis quibusdam quas rerum fugit laboriosam veniam? Animi, expedita reprehenderit necessitatibus tempore facere adipisci exercitationem voluptates doloribus asperiores autem similique nam cum vitae commodi dolorem fuga.
        // Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed unde ipsa optio minima ab ex numquam odio illum doloribus, architecto nulla ratione recusandae nobis quibusdam quas rerum fugit laboriosam veniam? Animi, expedita reprehenderit necessitatibus tempore facere adipisci exercitationem voluptates doloribus asperiores autem similique nam cum vitae commodi dolorem fuga." />


        // </div>




       


        <div>
            Hi
            {/* <FormDisplayError12June></FormDisplayError12June> */}
            {/* <AddToArraySetState12June></AddToArraySetState12June> */}
            <MovieApp13June setDet={setMovieDetails} ></MovieApp13June>
            <MovieDetails13June movieD={movieDetails}></MovieDetails13June>

        </div>
    );
}
export default App;