import React, {useState} from "react";
import Card from "./Card";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./footer";



function Home()
{
    const [entries, setEntry] = useState([]);

    function addEntry(newEntry){
        setEntry(prevEntry =>{
            return [...prevEntry,newEntry];
        });
    }

    

    
    return <div>
     <Header/>

     <CreateArea onAdd={addEntry} />

     {entries.map((ele,index) =>{
        return <Card
        key ={index}
        id={index}
        title = {ele.title}
        content = {ele.content}
         />
    })}


    <Footer/>




    {/* {info.map(CreateCard)} */}




    </div>
}

export default Home;