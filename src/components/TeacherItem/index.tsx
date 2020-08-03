import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/3603724?s=460&u=4734a0c7cf6b77dd28d295e4bc96afe6d32bc1af&v=4"
          alt="Alexandre"
        />
        <div>
          <strong>Alexandre Finger</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusias das melhores tecnolgias de quimica avancada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratorio e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosōes.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
