import { FaFacebookF, FaGithub, FaGofore, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const Rightsidenav = () => {
    return (
        <>

<div className="p-4 space-y-3 mb-6">
            <h2 className="text-3xl">Login With</h2>

            <button className="btn btn-outline w-full m-3 p-4">
          <FaGofore></FaGofore>
            Google
          </button>

            <button className="btn btn-outline w-full p-4 m-3">
          <FaGithub></FaGithub>
            Github
          </button>

        </div>


        <div className="p-4 space-y-3 mb-6">
            <h2 className="text-3xl">Find Us</h2>
            
            <a href="" className="p-4 flex text-lg items-center border rounded-t-lg">
                <FaFacebookF className="mr-3"></FaFacebookF>
                <span>Facebook</span>
            </a>
            <a href="" className="p-4 flex text-lg items-center border rounded-t-lg">
               <FaTwitter></FaTwitter>
                <span>Twitter</span>
            </a>
            <a href="" className="p-4 flex text-lg items-center border rounded-t-lg">
                <FaInstagram></FaInstagram>
                <span>Instagram</span>
            </a>
            
        </div>
        <div className="p-4 space-y-3 mb-6">
            <h2 className="text-3xl">QZone</h2>
            
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
            
        </div>
        </>
       
    );
};

export default Rightsidenav;