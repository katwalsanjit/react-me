import data from "./data";
import './style.css';
import { useState } from "react"

// single selection
// multiple selection

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    //console.log(getCurrentId)
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }
  // console.log(selected);
  return <div className="wrapper">
    <button>Enable Multiple Selection</button>
    <div className="accordian">
      {
        data && data.length > 0 ?
          data.map(dataItem => <div key={data.id} className="item">
            <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
              selected === dataItem.id ?
                <div className="content">{ dataItem.answer}</div> : null
            }
          </div>)
         : <div>No Data Found !</div>
      }
    </div>
  </div>
}