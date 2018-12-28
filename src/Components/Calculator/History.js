import React from'react'
import PropTypes from'prop-types'
import '../../Styles/Calculator/History.css'
const Historyy =(props)=>{

        return(
            <div>
                <div className="history">
                    <button 
                       onClick={props.history}
                       className="history__button"
                    >
                       <i class="fas fa-redo-alt icon"></i>
                    </button>
                </div>
            </div>
        )
    
}
Historyy.defaultProps={
    history:[]
}
Historyy.propTypes={
    history:PropTypes.array
}
export default Historyy