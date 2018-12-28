import React from'react'
import PropTypes from'prop-types'
import '../../Styles/Calculator/Keypad.css'
const Keypad =(props)=>{

    const handleClick=(e)=>{
       props.onDigit(e.target.value)
    }

    const handleOperation=(e)=>{
       props.getOperation(e.target.value)
    }

   
        return(
                 <div className="keypad">
                   <button className="keypad___btn keypad___btn--car"  onClick={props.onAllClear} value="CE">CE</button>
                   <button className="keypad___btn keypad___btn--car"  onClick={props.onClear} value="C">C</button>
                   <button className="keypad___btn keypad___btn--car"  onClick={props.onDelete} value="delete"> <i className="fas fa-caret-left icon "></i></button>
                   <button className="keypad___btn keypad___btn--car"  onClick={handleOperation} value='/'>/</button>
                   <button className="keypad___btn keypad___btn--nb"   onClick={handleClick} value="7">7</button>
                   <button className="keypad___btn keypad___btn--nb"   onClick={handleClick} value="8">8</button>
                   <button className="keypad___btn keypad___btn--nb"   onClick={handleClick} value="9">9</button>
                   <button className="keypad___btn keypad___btn--car"  onClick={handleOperation} value='*'>*</button>
                   <button className="keypad___btn keypad___btn--nb"   onClick={handleClick} value="4">4</button>
                   <button className="keypad___btn keypad___btn--nb"   onClick={handleClick} value="5">5</button>
                   <button className="keypad___btn keypad___btn--nb"   onClick={handleClick} value="6">6</button>
                   <button className="keypad___btn keypad___btn--car"  onClick={handleOperation} value='-'>-</button>
                   <button className="keypad___btn keypad___btn--nb"   onClick={handleClick} value="1">1</button>
                   <button className="keypad___btn keypad___btn--nb"   onClick={handleClick} value="2">2</button>
                   <button className="keypad___btn keypad___btn--nb"   onClick={handleClick} value="3">3</button>
                   <button className="keypad___btn keypad___btn--car"  onClick={handleOperation} value='+'>+</button>
                   <button className="keypad___btn keypad___btn--car"  onClick={props.onToggleSign} value="-">±</button>
                   <button className="keypad___btn keypad___btn--nb"   onClick={handleClick} value="0">0</button>
                   <button className="keypad___btn keypad___btn--car"  onClick={props.onDecimal} value='.'>.</button>
                   <button className="keypad___btn keypad___btn--car"  onClick={props.onEqual} value="=">=</button>
                 </div>

        )
}
Keypad.defaultProps={
  onAllClear:()=>{},
  onClear:()=>{},
  onDecimal:()=>{},
  onEqual:()=>{},
  onDigit:(digit)=>{},
  onDelete:()=>{},
  getOperation:(op)=>{},
  onToggleSign:()=>{},

}
Keypad.propTypes={
  onAllClear:PropTypes.func,
  onClear:PropTypes.func,
  onEqual:PropTypes.func,
  onDigit:PropTypes.func,
  onDecimal:PropTypes.func,
  onDelete:PropTypes.func,
  onToggleSign:PropTypes.func,
  getOperation:PropTypes.func,

}
export default Keypad