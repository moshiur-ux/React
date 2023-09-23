import React from 'react';
import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {

    var studentData = [
        { id: 1, name: 'Student 1', mathMarks: 85, scienceMarks: 78, englishMarks: 92 },
        { id: 2, name: 'Student 2', mathMarks: 78, scienceMarks: 89, englishMarks: 76 },
        { id: 3, name: 'Student 3', mathMarks: 92, scienceMarks: 95, englishMarks: 88 },
        { id: 4, name: 'Student 4', mathMarks: 67, scienceMarks: 72, englishMarks: 64 },
        { id: 5, name: 'Student 5', mathMarks: 89, scienceMarks: 91, englishMarks: 87 },
        { id: 6, name: 'Student 6', mathMarks: 73, scienceMarks: 82, englishMarks: 75 },
        { id: 7, name: 'Student 7', mathMarks: 95, scienceMarks: 97, englishMarks: 94 },
        { id: 8, name: 'Student 8', mathMarks: 80, scienceMarks: 85, englishMarks: 79 },
        { id: 9, name: 'Student 9', mathMarks: 88, scienceMarks: 91, englishMarks: 85 },
        { id: 10, name: 'Student 10', mathMarks: 70, scienceMarks: 76, englishMarks: 68 }
    ];
    
    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
              
            <XAxis dataKey='name'/>
            <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="scienceMarks" stroke='yellow'></Line>
                <Line dataKey="englishMarks" stroke='Black'></Line>
                
            </LChart>
        </div>
    );
};

export default LineChart;

