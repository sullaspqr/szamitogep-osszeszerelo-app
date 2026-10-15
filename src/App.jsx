import './App.css'
import { useState } from 'react';
// CPU-k:
const processors = [ 
  { name: "i7", price: 50000 },
  { name: "i9", price: 75000 },
  { name: "Ryzen 7", price: 60000 },
  { name: "Ryzen 9", price: 85000 }
];
// memóriák:
const memories = [
 { name: "16 Gb - DDR4" , price: 70000 },
 { name: "32 Gb - DDR4" , price: 135000 },
 { name: "64 Gb - DDR4" , price: 200000 }
];
const ComponentSelector = ({ name, options, selectedOption, onSelect}) => {
  return (
    <div>
      <h3>{name}</h3>
      {options.map((option, index) => (
        <button key={index} 
        onClick={() => onSelect(option)}
        style={{
          backgroundColor: 
          selectedOption?.name === option.name ? "green" : "lightgrey",
          margin: "5px",
          padding: "10px",
          borderRadius: "5px"
        }}
        >
          { option.name } - { option.price } HUF
        </button>
      ))}
    </div>
  );
}
export const App = () => {
  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);
  const totalPrice = (processor?.price || 0) + (memory?.price || 0);
  return (
    <div>
       <ComponentSelector
       name ="Processzorok"
       options={processors}
       selectedOption={processor}
       onSelect={setProcessor}
       />

       <ComponentSelector
       name ="Memóriák"
       options={memories}
       selectedOption={memory}
       onSelect={setMemory}
       />
       <h3>Teljes ár: {totalPrice} HUF</h3>
    </div>
  )
}
