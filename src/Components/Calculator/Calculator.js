
import React,{Component} from'react'
import Display from'./Display'
import Historyy from './History'
import Keypad from'./Keypad'
import Panel from './Panel'
import CalcData from './CalcData';
import "../../Styles/Calculator/Calculator.css"


class Calculator extends Component{
    constructor(props){
      super(props)
      this.state={
          value:'',
          exepression:'',
          history:[],
          isvisible:false
      }

      this.handleOnDigit=this.handleOnDigit.bind(this)
      this.handleOnDecimal=this.handleOnDecimal.bind(this)
      this.handleOnToggleSign=this.handleOnToggleSign.bind(this)
      this.handleOnEqual=this.handleOnEqual.bind(this)
      this.handleOnHistory=this.handleOnHistory.bind(this)
      this.handleOnClear=this.handleOnClear.bind(this)
      this.handleOnAllClear=this.handleOnAllClear.bind(this)
      this.handleOnDelete=this.handleOnDelete.bind(this)
      this.handleOperation=this.handleOperation.bind(this)
      this.handleOnAllHistory=this.handleOnAllHistory.bind(this)
    }
     handleOperation=(op)=>{
        CalcData.operation(op)
        this.setState({
           value:CalcData.getValue(),
           exepression:CalcData.getExpression()
      })
    }

    handleOnDigit(nb){
        CalcData.inputDigit(nb)
        const value=CalcData.getValue()
        this.setState({
           value:value
       })
   }
   handleOnDecimal(){
    CalcData.inputDecimal()
    this.setState({value:CalcData.getValue()})
   }
 
   handleOnToggleSign(){
    CalcData.toggleSing()
    this.setState({
     value:CalcData.getValue(),
     exepression:CalcData.getExpression()
    })
   }
    handleOnEqual(){
       CalcData.equal()
       this.setState({
           value:CalcData.getValue(),
           exepression:CalcData.getExpression(),
           history:CalcData.getHistory()
           
       })
    }
    handleOnClear(){
      CalcData.clear()
      this.setState({
          value:CalcData.getValue(),
          exepression:CalcData.getExpression()
      })
    }
    handleOnAllClear(){
        CalcData.allClear()
        this.setState({
        value:CalcData.getValue(),
        exepression:CalcData.getExpression(),
        history:CalcData.getHistory()
      })
    }
   
    handleOnDelete(){
        CalcData.delete()
        this.setState({
            value:CalcData.getValue()
        })
    }
   handleOnHistory(){
       if(this.state.history.length>0){
          this.setState({
           isvisible:!this.state.isvisible
       }) 
       }
       
   }
   handleOnAllHistory(){
       CalcData.clearHistory()
       this.setState({
           history:CalcData.getHistory(),
           isvisible:!this.state.isvisible
       })
   }
    
   

    render(){
        const {isvisible,value,exepression,history}=this.state
        return(
            <div className="calculator">

                <Display 
                   value={value} 
                   exepression={exepression}
                />

                <Historyy  
                    history={this.handleOnHistory}
                />

                {!isvisible &&
                    <Keypad  
                       onDigit={this.handleOnDigit}
                       onDecimal={this.handleOnDecimal}
                       getOperation={this.handleOperation}
                       onEqual={this.handleOnEqual}
                       onClear={this.handleOnClear}
                       onAllClear={this.handleOnAllClear}
                       onDelete={this.handleOnDelete}
                       onToggleSign={this.handleOnToggleSign}
                    /> 
                }

                {isvisible &&
                   <Panel 
                        history={history} 
                        reset={this.handleOnAllHistory}
                    />
                }
            </div>
        )
    }
}
export default Calculator