import React from 'react';

const Action = (props) => (
      <div>
        <button 
          className="big-button"
          onClick = {props.handlePick}
          disabled = {!props.hasOptions}
        >
          O que vou fazer?
        </button>
      </div>
    );

export default Action;