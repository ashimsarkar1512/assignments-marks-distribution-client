import Faq from "../../components/Section/Faq";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";


const Home = () => {
            return (
                        <div className="my-10">
                                
                            <Banner></Banner>
                            <Featured></Featured>
                               <Faq></Faq>
                        </div>
            );
};

export default Home;