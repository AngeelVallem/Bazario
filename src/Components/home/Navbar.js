import React from 'react';
import '../../assets/main.css';


function Navbar() {
    return (
        <nav>
            <div className="container-navbar" >

                <div class="content-search">
                    <a href="#" className="logo">Bazar.io</a>
                    <input type="text" className="search" placeholder=" Busca atuendos..." />
                    <div className="col-start-3 m-auto flex">
                        <a href="#" className="text-xl text-white font-bold m-auto mr-6 font-roboto hover:text-black" >Registro/Inicio Sesion</a>
                        <a href="#" className="text-xl text-white font-bold m-auto font-roboto hover:text-black" >Carrito(0)</a>
                    </div>
                </div>

            </div>

            <div className="sub-menu bg-paleta-200">
                    <a href="#" className="link text-lg text-white">Inicio</a>
                    <a href="#" className="link text-lg text-white">Tiendas</a>
                    <a href="#" className="link text-lg text-white">Subtiendas</a>
                </div>
        </nav>

    );
}

export default Navbar;