const math = require('mathjs');
let value=''
let result=''
let history=[]
let register=[]

export default class CalcData{
   
    static inputDigit(digit){
        if (isNaN(digit)) {
            throw Error('Only numeric input is allowed');
        }
        value+=digit;
   
    }
    
    static inputDecimal() {
        if (result !== '') {
            result = '';
            value = '';         
        }

        if (value.indexOf('.') >= 0) {
            return;
        }

        if (value === '') {
            value += '0.';
        } else {
            value += '.';
        }
    }
/*********** operation***************** */
   static operation(op){
      if(value===''){
        return
      }
       register.push(value);
       register.push(op);
       value='';

   }
  
    static toggleSing(){
        if(value===''){
            return
        }
        let val=parseInt(value*(-1));
        value=val.toString()
    }

    static equal(){
        if(value===''){
            return
        }
        register.push(value);

        const expression=register.join('');

        result=math.eval(expression);
        value=result.toString();
        const op={ex:expression.concat('='),res:result};
        history.push(op);
        register=[];
        result='';
    }

    /********************************* */
    static delete(){
        let length=value.length;
         value=value.slice(-length-1,length-1)
    }

    static clear(){
        value='';
        register=[];
    }

    static allClear(){
        this.clear()
        history=[];
    }
    static clearHistory(){
        history=[]
    }

    /***************Return value*********** */

    static getValue(){
        return value;
    }

    static getExpression(){
        return register.join('');
    }
    static getHistory(){
        return history;
    }

}