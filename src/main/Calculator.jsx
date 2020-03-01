import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

//cria-se o state fora para quando chamar a função
// para limpar a caculadora ele voltar
//para o state inicial

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
    //current vai me dizer qual indice estou manipulando
    // o valor 0 ou valor 1
}

export default class Calculator extends Component {
    //clonando o state 
    state = { ...initialState }

    constructor(props) {
        super(props) 

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        //Voltando para o state inicial
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        //se um numero ja tiver um ponto n pode adicionar outro
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        //Limpar o display para evitar os 0 a esquerda
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        //se precisar limpare o display o valor current é vazio
        // se não é o valor que de fato está no display   
        const currentValue = clearDisplay ? '' : this.state.displayValue 
        //pegando o novo valor que vai colocar no display
        //é o current + a variavel N que foi digitada
        const displayValue = currentValue + n  
        // mudar o state do app 
        this.setState({ displayValue, clearDisplay: false })

        if (n!== '.') {
            const i = this.state.current
            //convertendo displayValue parta floar e armazenando
            // na variavel
            const newValue = parseFloat(displayValue)
            const values = { ...this.state.values}
            //alterar o valor atual que está mechendo
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render() {
        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                {/*Fazendo o Display apontar para o State */}
                <Button label='AC' click={this.clearMemory} triple />
                <Button label='/' click={this.setOperation} operation />
                <Button label='7' click={this.addDigit} /> 
                <Button label='8' click={this.addDigit} /> 
                <Button label='9' click={this.addDigit} /> 
                <Button label='*' click={this.setOperation} operation  />
                <Button label='4' click={this.addDigit} /> 
                <Button label='5' click={this.addDigit} /> 
                <Button label='6' click={this.addDigit} /> 
                <Button label='-' click={this.setOperation} operation />
                <Button label='1' click={this.addDigit} /> 
                <Button label='2' click={this.addDigit} /> 
                <Button label='3' click={this.addDigit} /> 
                <Button label='+' click={this.setOperation} operation  />
                <Button label='0' click={this.addDigit} double /> 
                <Button label='.' click={this.addDigit} />
                <Button label='=' click={this.setOperation} operation />
            </div>
        )
    }
}