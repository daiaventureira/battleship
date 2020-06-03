import React from 'react';
import './index.scss';

class Column extends React.Component{
    
    state={}
    constructor(){
        super();
        this.selectElement = this.selectElement.bind(this);
    }
    selectElement(col){
        this.props.recebe(this.props.index, col);
    }
    
    render(){
        const column = this.props.column;
        const keeper = this.props.keeper;
        const array = [];
       

        for(let i = 0; i<11; i++){        
            if(keeper[i]===0){
                array.push(<div key={array} onClick={this.selectElement.bind(this, i)} className="tile"></div>)
            }else if(column[i]=== 0){
                array.push(<div key={array} onClick={this.selectElement.bind(this, i)} className="tile water"></div>)
            }else{
            array.push(<div key={array} onClick={() => {this.selectElement.bind(this, i)}} className="tile ship"></div>);            }  
        }

        return<div onClick={this.state.selectElement}  className="column">{array}</div>
    }
}
export default Column;