import React from "react";
import Navbar from "../../components/container/Navbar";
import { IoMdListBox } from "react-icons/io";
import { MdMoneyOff } from "react-icons/md";
import { BsStarHalf } from "react-icons/bs";
import { IconContext } from "react-icons";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col lg:flex-row my-24 px-16 h-[61vh]">
        <div className="flex flex-col lg:max-w-xl xl:max-w-2xl">
          <h1 className="font-roboto text-5xl py-2 text-justify">Consigue los mejores materiales, al precio más bajo, y en un instante.</h1>
          <p className="py-2 text-2xl text-gray-400 text-justify">
            Ayudamos a las personas y empresas a vender y comprar materiales de construcción de forma rápida a un precio competitivo para reducir los costos generados por la desinformación.
          </p>
          <div className="flex flex-row content-start items-center pt-10">
            <a href="#form-screen" className="bg-yellow-400 text-white font-roboto py-2 px-4 rounded-xl">¡Empecemos!</a>
          </div>
        </div>
        <div className="flex grow items-center justify-center">
          <img className="hero-image" src="/tools-and-material.svg" />
        </div>
      </section>
      <section className="h-[120vh] bg-gradient-to-br from-orange-500 to-yellow-300 flex flex-col">
        <div className="flex flex-col items-center justify-center grow">
          <div className="flex flex-col items-center max-w-xl">
            <IconContext.Provider value={{color:"white", size:"5em"}}>
              <IoMdListBox/>
            </IconContext.Provider>
            <p className="font-roboto text-lg text-white mt-4 text-center">
              Ofrecemos un catálogo de productos en línea variado, que se actualiza con cada
              uno de los items de los proveedores.
            </p>
          </div>
          <div className="flex flex-col items-center w-3/4 mt-4 bg-gray-100 rounded-xl">
            <IconContext.Provider value={{color:"black", size:"5em"}}>
              <MdMoneyOff/>
            </IconContext.Provider>
            <p className="font-roboto text-lg text-black pt-4 text-center max-w-xl">
              Los mejores precios disponibles en tu zona. Te mostramos la opción más económica para
              cada articulo que busques.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xl py-4">
            <IconContext.Provider value={{color:"white", size:"5em"}}>
              <BsStarHalf/>
            </IconContext.Provider>
            <p className="font-roboto text-lg text-white pt-4 text-center">
              Te damos un informe de la calidad de cada producto en el que estes interesado. Desde opiniones
              de compradores, hasta reseñas profesionales.
            </p>
          </div>
        </div>
      </section>
      <section id="form-screen" className="h-screen bg-gray-200">
        <img className="form-image px-8 pt-10" src="/construkta.svg" />
        <div className="flex flex-row">  
          <div className="px-8 pt-8 flex flex-col">
            <div className="">
              <h1 className="font-roboto text-3xl text-gray-600">Compartenos tu información de contacto.</h1>
              <h1 className="font-roboto text-3xl">¡Nos comunicaremos contigo al instante!</h1>
            </div>
            <form className="pt-12 px-4">
              <div className="flex flex-row py-2 items-center">
                <label className="font-roboto w-48" for="fname" >Nombre(s)</label>
                <input className="w-64 h-8 rounded-lg px-2 font-roboto" type="text" id="fname" />
              </div>
              <div className="flex flex-row py-2 items-center">
                <label className="font-roboto w-48" for="lname" >Apellido(s)</label>
                <input className="w-64 h-8 rounded-lg px-2 font-roboto" type="text" id="lname" />
              </div>
              <div className="flex flex-row py-2 items-center">
                <label className="font-roboto w-48" for="email" >Correo</label>
                <input className="w-64 h-8 rounded-lg px-2 font-roboto" type="email" id="email" />
              </div>
              <div className="flex flex-row py-2 items-center">
                <label className="font-roboto w-48" for="types-select" >Soy</label>
                <select className="w-64 h-8 rounded-lg px-2 font-roboto" id="types-select" name="Type">
                  <option value="ferreteria">Ferretería</option>
                  <option value="ing-arq">Ingeniero o arquitecto</option>
                  <option value="maestrobr">Maestro de obra</option>
                </select>
              </div>
              <div className="pt-12 flex flex-row items-center justify-center">
                <input className="bg-yellow-400 text-white font-roboto py-2 px-4 rounded-xl" type="submit" value="Enviar"/>
              </div>
            </form>
          </div>
          <div className="flex flex-row grow items-center justify-center">
            <img src="/agent.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
