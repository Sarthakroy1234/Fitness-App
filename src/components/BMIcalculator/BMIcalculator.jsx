// import "./BMIcalculator.css";
// import React, { useState } from 'react';

// function BMIcalculator() {
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [bmi, setBMI] = useState(null);

//   const calculateBMI = () => {
//     if (weight && height) {
//       const bmiValue = (weight / (height * height)).toFixed(2);
//       setBMI(bmiValue);
//     }
//   };

//   return (
//     <div className="BMIcalculator">
//       <h2>BMI Calculator</h2>
//       <div>
//         <label>Weight (kg):</label>
//         <input
//           type="number"
//           value={weight}
//           onChange={(e) => setWeight(parseFloat(e.target.value))}
//         />
//       </div>
//       <div className="background-video">
//       <video autoPlay loop muted>
//         <source src="./  assets/animation1" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       {/* Your content here */}
//     </div>
//       <div>
//         <label>Height (m):</label>
//         <input
//           type="number"
//           value={height}
//           onChange={(e) => setHeight(parseFloat(e.target.value))}
//         />
//       </div>
//       <button onClick={calculateBMI}>Calculate BMI</button>
//       {bmi && <p>Your BMI is: {bmi}</p>}
//     </div>
    
//   );
// }

// export default BMIcalculator;

import React, { useState } from 'react';
import "./BMIcalculator.css";
import background from "./animation2.mp4";

function BMIcalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <div className="BMIcalculator">
      <h2>BMI Calculator</h2>
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Your content here */}
      </div>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Height (m):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
}

export default BMIcalculator;
