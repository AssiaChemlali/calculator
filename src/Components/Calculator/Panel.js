import React from'react'
import PropTypes from'prop-types'
import '../../Styles/Calculator/Panel.css'
const Panel=(props)=>{

    return(
        <div className="Panel">
        <button  
           onClick={props.reset} 
           className="Panel__button"
        >
           <i className="fas fa-trash icon"></i>
        </button>
           {props.history.map((his)=>{
            return(
               <div key={his.ex}>
               <p >{his.ex}</p>
               <h6 className="Panel__resultat">{his.res}</h6>
               </div>
            )
       })}
</div>
    )
}
Panel.propTypes={
 reset:PropTypes.func,
 history:PropTypes.array
}
Panel.defaultProps={
    reset:()=>{},
    history:[]
}
export default Panel;