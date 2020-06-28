import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal //as 3 propiedades necessárias para execução do modal estão abaixo
    isOpen = {!!props.selectedOption} //garante a inicialização oculta do modal
    onRequestClose = {props.handleClearSelectedOption} //Fecha a janela com o escape ou clicando no background
    contentLabel = "Opção Selecionada" //habilita para utilização de acessibilidade em mobile
    closeTimeoutMS ={200}
    className = "modal"
    >
        <h3 className = "modal__title">Opção Selecionada</h3>
        {props.selectedOption && <p className = "modal__body">{props.selectedOption}</p>}
        <button
            className = "button"
            onClick = {props.handleClearSelectedOption}
        >Okay
        </button>
    </Modal>
    );

export default OptionModal;