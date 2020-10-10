import React from 'react';

import "./styles.css";

const NewLetter = () => (
    <div className="newsLetter">
        <h2>Namah no seu e-mail</h2>
        
        <p>Assine nossa newsletter</p>

        <input type='text' placeholder="Seu e-mail" className="textEmail" />
        <button>ASSINAR</button>

        <p className="privacityTerms">
            Ao clicar em “assinar”, você concorda em receber
            e e-mails do Espaço Namah a aceita nossos Termos de Uso
            e nossas Políticas de Privacidade.
        </p>
    </div>
);

export default NewLetter;