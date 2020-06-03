import React from 'react';
import './index.scss';
import Column from './Column.js';

class Design extends React.Component{

    state={counterWater:70,counter:23, keeper: Array(11).fill().map(()=> Array(11).fill(0)),arr: Array(11).fill().map(()=> Array(11).fill(0))}

    constructor(){
        super();
        this.colocaBarquinho = this.colocaBarquinho.bind(this);
        this.recebe = this.recebe.bind(this);

        let arr = this.state.arr;
        const ships = [1, 3, 4,8, 1, 3, 2, 1];
        var soma = 0;
        for(let i = 0; i<ships.length; i++){
            this.colocaBarquinho(arr, ships[i], i+1);
            soma = soma+ships[i];
        }
    }

    colocaBarquinho(arr, tam, nomeDoBarquinho){
        let row = Math.floor(Math.random()*arr.length);
        let col = Math.floor(Math.random()*arr.length);

        if(arr.length - col - tam < 0) {
            return this.colocaBarquinho(arr, tam, nomeDoBarquinho);
        }
        for(let k = 0; k<tam;k++){
            if(arr[row][col+k]!== 0){
                return this.colocaBarquinho(arr, tam, nomeDoBarquinho);
            }  
        }
        for(let i = 0; i<tam; i++){
            arr[row][col+ i]= nomeDoBarquinho;
        }       
    }
    recebe(row, col){

        const arr = this.state.arr;

        if(arr[row][col]!== 0){
            if(this.state.counter === 1){
                window.location.reload(true);
                return alert('ganhou');
            }
            this.setState({
                counter: this.state.counter-1
             });           
        }
        if(this.state.keeper[row][col]===0 && arr[row][col]===0){

            if(this.state.counterWater === 1){
                window.location.reload(true);
                return alert('Você perdeu');
            } 
            this.setState({ 
                counterWater: this.state.counterWater-1
            }); 
        }
        this.setState(state => {
            state.keeper[row][col] = 1;
            return  {keeper: state.keeper}
            
        });
    }
    render(){ 
       const array = [];
        for(let i = 0; i<=10; i++){
            array.push(<Column key={array} column={this.state.arr[i]} keeper={this.state.keeper[i]} index={i} recebe={this.recebe}/>);
        } 

    return <div>
        <div className="container board"> {array}</div>
        <p className="counterShip"> Ships left: {this.state.counter}</p>
        <p className="counterShip"> Chances left: {this.state.counterWater}</p>
        </div>
    }
}

export default Design;