

import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Statistics = () => {
  const Data=JSON.parse(localStorage.getItem("favorites"));
const yourDonation=Number(Data.length);
console.log(yourDonation)
const totalDonation=Number(12-yourDonation);

 const data=[
  {name:'Total Donation',value: totalDonation},
  {name:'Your Donation',value: yourDonation},
]



  const COLORS = ['#FF444A','#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div> 
        <div className="flex justify-center items-center">
        <PieChart width={1000} height={1000}>
        <Pie
          data={data}
          cx={400}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={200}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip></Tooltip>
      </PieChart>

        </div>
      
    </div>
  );
};

export default Statistics;