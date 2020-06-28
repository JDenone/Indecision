import React from 'react';
import AddOption from './AddOptions';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class Indecisionapp extends React.Component{
  state = {
    options:[],
    selectedOption: undefined
  };  
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options:[] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
      
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Entre com um valor de item válido.';      
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Esta opção já existe';
    }

    this.setState((prevState) => ({options:prevState.options.concat(option)}));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options }));  
        }
      } catch (e) {
       //NADA A FAZER 
      } 
    }
  
    componentDidUpdate(PrevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      }
    }
  
    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  
    render() {
      const subtitle = 'Coloque sua vida nas mão de um computador.';
  
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className = "container">
          <Action 
            hasOptions = {this.state.options.length > 0}
            handlePick = {this.handlePick}
          />
          <div className="widget">
            <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
            handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption = {this.handleClearSelectedOption}
        />
      </div>
      );
    }
}
  
Indecisionapp.defaultProps = {
    options: []
};