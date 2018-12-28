import React from'react'
import PropTypes from'prop-types'
import "../../Styles/Calculator/Display.css"
const Display=(props)=>{
        return(
            <div >
                 <div className="display">
                 <p className="display__expression">{props.exepression}</p>
                 <h1 className="display__value">{props.value}</h1>
                 
                 </div>
            </div>
        )
    
}

Display.defaultProps={
    exepression:'',
    value:''
}

Display.propTypes={
    exepression:PropTypes.string,
    value:PropTypes.string
}
export default Display
