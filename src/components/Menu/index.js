import React from 'react';
import Logo from  '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';
// import Button from '../components/ButtonLink';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="WbFlix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

            {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}

            {/* <Button as="a" className="ButtonLink" href="/">
                Novo vídeo

            </Button> */}


        </nav>
               
        
    );

}
    export default Menu; 