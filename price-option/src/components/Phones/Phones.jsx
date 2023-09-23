import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Audio } from "react-loader-spinner";

const Phones = () => {
  const [phone, setphones] = useState([]);
  const[loading,setLoading]=useState(true)

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res=>res.json())
    // .then(data=>setphones(data.data))
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;

        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phoneWithFakeData);
        setphones(phoneWithFakeData);
          setLoading(false)

        // setphones(data.data.data));
      });
  }, []);

  return (
    <div>
     {
        loading&&
         <Audio 
         height="80"
         width="80"
         radius="9"
         color="green"
         ariaLabel="three-dots-loading"
         wrapperStyle
         wrapperClass
       />
     }
      <h2 className="text-7xl">Phones:{phone.length}</h2>

      <BarChart width={1200} height={400} data={phone}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
