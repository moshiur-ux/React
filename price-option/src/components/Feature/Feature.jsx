
import { AiOutlineCheckCircle} from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center "> <AiOutlineCheckCircle className="text-green-800 mr-2"></AiOutlineCheckCircle>{feature}</p>
        </div>
    );
};

export default Feature;