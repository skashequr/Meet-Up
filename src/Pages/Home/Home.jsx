import Day from "../../Components/Navbar/Days/Day";
import NavBar from "../../Components/Navbar/NavBar";
import PostCard from "../../Components/PostCard/PostCard";
import PostInput from "../../Components/PostInput/PostInput";



const Home = () => {
    return (
        <div>
          <NavBar></NavBar>
          <div className="grid grid-cols-12">
            <div className="bg-black col-span-4">
            <h1>dtrth</h1>
            </div>
            <div className=" col-span-4">
            <Day></Day>
            <PostInput></PostInput>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            </div>
            <div className="bg-pink-900 col-span-4">
            <h1>dtrth</h1>
            </div>
          </div>
        </div>
    );
};

export default Home;