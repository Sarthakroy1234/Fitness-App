// import React, { useState } from 'react';
// import './calo.css';
// import './calorie.css';

// function calo() {
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('male');
//   const [activityLevel, setActivityLevel] = useState('sedentary');
//   const [calories, setCalories] = useState(0);

//   const calculateCalories = () => {
//     let BMR;
//     if (gender === 'male') {
//       BMR = 10 * weight + 6.25 * height - 5 * age + 5;
//     } else {
//       BMR = 10 * weight + 6.25 * height - 5 * age - 161;
//     }

//     let activityMultiplier;
//     switch (activityLevel) {
//       case 'sedentary':
//         activityMultiplier = 1.2;
//         break;
//       case 'lightlyActive':
//         activityMultiplier = 1.375;
//         break;
//       case 'moderatelyActive':
//         activityMultiplier = 1.55;
//         break;
//       case 'veryActive':
//         activityMultiplier = 1.725;
//         break;
//       default:
//         activityMultiplier = 1.2;
//     }

//     const totalCalories = BMR * activityMultiplier;
//     setCalories(totalCalories.toFixed(0));
//   };

//   return (
//     <div className="calo">
//       <h1>Calorie Calculator</h1>
//       <div className="calor">
//         <label>
//           Weight (kg):
//           <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
//         </label>
//         <label>
//           Height (cm):
//           <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
//         </label>
//         <label>
//           Age:
//           <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//         </label>
//         <label>
//           Gender:
//           <select value={gender} onChange={(e) => setGender(e.target.value)}>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </label>
//         <label>
//           Activity Level:
//           <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
//             <option value="sedentary">Sedentary</option>
//             <option value="lightlyActive">Lightly Active</option>
//             <option value="moderatelyActive">Moderately Active</option>
//             <option value="veryActive">Very Active</option>
//           </select>
//         </label>
//         <button onClick={calculateCalories}>Calculate</button>
//       </div>
//       <div className="calori">
//         {calories > 0 && <p>Your daily calorie intake should be: {calories} kcal</p>}
//       </div>
//     </div>
//   );
// }

// export default calo;


import React from 'react'
import { useState } from 'react'
import './Caloriecalculator.css'
import background from "./animation1.mp4";


// return
//     <div className="Caloriecalculator">
//       <h2>BMI Calculator</h2>
//       <div className="background-video">
//         <video autoPlay loop muted>
//           <source src={background} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         {/* Your content here */}
//       </div>b 

function Caloriecalculator() {
    const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(0);


  const calculateCalories = () => {
    let BMR;
    if (gender === 'male') {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityMultiplier;
    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'lightlyActive':
        activityMultiplier = 1.375;
        break;
      case 'moderatelyActive':
        activityMultiplier = 1.55;
        break;
      case 'veryActive':
        activityMultiplier = 1.725;
        break;
      default:
        activityMultiplier = 1.2;
    }

    const totalCalories = BMR * activityMultiplier;
    setCalories(totalCalories.toFixed(0));
  };

  return (
       <div className="calo">
        <video autoPlay loop muted>
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <h1>Calorie Calculator</h1>
      <div className="calor">
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>

        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Activity Level:
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
          </select>
        </label>
        <button onClick={calculateCalories}>Calculate</button>
      </div>
      <div className="calori">
        {calories > 0 && <p>Your daily calorie intake should be: {calories} kcal</p>}
      </div>
    </div>
  )
}

export default Caloriecalculator;