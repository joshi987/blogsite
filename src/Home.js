//state hook

import Bloglist from "./Bloglist";
import useFetch from "./userFetch";


const Home = () => {
const {data: blogs, isPending,error}=useFetch('http://localhost:8000/blogs');
  
     return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
     { blogs && <Bloglist blogs={blogs} title="All Blogs!"/>}

      {/* <Bloglist blogs={blogs.filter((blog)=>blog.author==='mario')}title="Mario blogs"/> */}
      {/* <button onClick={()=>setName('lugi')}>change name</button>
      <p>{name}</p> */}
        </div>
     );
}
 
export default Home;