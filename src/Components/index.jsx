import { useState } from "react";
import data from './data'
import './styles.css'

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enalbleMultiSelection,setEnalbeMultiSeelction] = useState(false);
    const [multiple,setMultiple] = useState([]);


    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);

    }

    function handleMultiSelection(getCurrentId){
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
        if(findIndexOfCurrentId === -1)
            copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId,1)

        console.log(selected,multiple);
    }

  return <div className="wrapper">

  <button>Enalble Multi Selection</button>
  
  <div className="accordian">
    {
        data && data.length > 0 ? 
        data.map(dataItem => <div className="item">
        <div onClick={
            enalbleMultiSelection ?
            multiple.indexOf(dataItem.id) !== -1 &&
            <div className="content">{dataItem.answer}</div>: 
            selected === dataItem.id && <div className="content">{dataItem.answer}</div>
        }
         
       </div>

        )
        : <div>No data found</div>
    }
  </div>
  
  </div>;
}
