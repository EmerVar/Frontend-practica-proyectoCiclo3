import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { Link } from "react-router-dom"


import sala1 from '../../assets/img/productos/Sala1.jpg';
import sala2 from '../../assets/img/productos/Sala2.jpg';
import sala3 from '../../assets/img/productos/Sala3.jpg';
import sala4 from '../../assets/img/productos/Sala4.jpg';
import sala5 from '../../assets/img/productos/Sala5.jpg';
import sala6 from '../../assets/img/productos/Sala6.jpg';
import sala7 from '../../assets/img/productos/Sala7.jpg';
import sala8 from '../../assets/img/productos/Sala8.jpg';


class Salas extends React.Component {
    render() {
        return (
    <div>
        <Navbar />
        <div className="container-fluid w-100 mb-4"  style={{margin: '150px 0 180px 0'}}>
      <h1 className="text-center text-secondary">Bienvenido al catalogo de nuestros productos</h1><br/>
      <div className="card text-center">
         <div className="card-header bg-secondary">
            <ul className="nav nav-tabs card-header-tabs">
               <li className="nav-item">
               <Link className="nav-link text-warning active" aria-current="true" to="/">Salas</Link>
                </li>
               <li className="nav-item">
                <Link className="nav-link text-warning "  to="/">Comedores</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link text-warning "  to="/">Cocinas</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link text-warning "  to="/">Armarios y Gavetas</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link text-warning "  to="/">Escritorios</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link text-warning "  to="/">Cunas</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link text-warning "  to="/">Ba??os</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link text-warning "  to="/">Otros</Link>
               </li>
            </ul>
         </div>
      </div>
      <div className="card-body bg-secondary">
         <h2 className="text-center p-3">Para una sala m??s viva</h2>
         <div className="row row-cols-1 row-cols-md-4 g-3">
            <div className="col">
               <div className="card card border-warning bg-secondary">
                  <h3 className="card-title pt-2 text-center">Sof?? en L</h3>
                  <img src={sala1} className="card-img-top" alt="Sala en L"/>
                  <div className="card-body">
                     <p className="card-text text-start">El sof?? en L es ideal para espacios amplios porque son
                        generalmente muy grandes.
                     </p>
                     <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card card border-warning bg-secondary">
                  <h3 className="card-title pt-2 text-center">Sof?? de dos cuerpos</h3>
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <img src={sala6} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                           <img src={sala7} className="d-block w-100" alt="..."/>
                        </div>
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                     </button>
                  </div>
                  <div className="card-body">
                     <p className="card-text text-start">Los sof??s de 2 o 3 cuerpos son los mas populares y b??sicos
                        de todos, se pueden adaptar a todo.
                     </p>
                     <Link to="/" className="btn btn-warning" styles="background-color: #fbb03b">Agregar a favoritos</Link>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card card border-warning bg-secondary">
                  <h3 className="card-title pt-2 text-center">Sof?? modular</h3>
                  <img src={sala3} className="card-img-top" alt="Sala en modular"/>
                  <div className="card-body">
                     <p className="card-text text-start">Los sof??s modulares son aptos para agregar plazas extras a tu
                        sala. Son muebles muy vers??tiles.
                     </p>
                     <Link to="/" className="btn btn-warning" styles="background-color: white">Agregar a favoritos</Link>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card card border-warning bg-secondary">
                  <h3 className="card-title pt-2 text-center">Sof?? cama</h3>
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <img src={sala2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                           <img src={sala5} className="d-block w-100" alt="..."/>
                        </div>
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                     </button>
                  </div>
                  <div className="card-body">
                     <p className="card-text text-start mt-2">Los sof?? camas son muebles muy pr??cticos para solucionar
                        problemas de espacio y funcionalidad.
                     </p>
                     <Link to="/" className="btn btn-warning" >Agregar a favoritos</Link>
                  </div>
               </div>
            </div>
            </div>
            </div>
        </div>
        <Footer />
 
    </div>

        );

    }   
   

}
export default Salas;