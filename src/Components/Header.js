import React from'react'
import '../Styles/Header.css'
import PropTypes from'prop-types'
const Header =(props)=>{
    return(
        <div className="header">
            <i className="fas fa-calculator icon"></i>
            {props.title}
        </div>
    )
}
Header.defaultProps={
    title:''
}
Header.propTypes={
    title:PropTypes.string
}

export default Header