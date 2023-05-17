import { IoMdListBox } from "react-icons/io";
import { MdMoneyOff } from "react-icons/md";
import { BsStarHalf } from "react-icons/bs";
import { IconContext } from "react-icons";
import { db } from "../../assets/db/firebase";
import { collection, addDoc } from "firebase/firestore"
import { Grid, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const Home = () => {

  const [user, setUser] = useState({fname: '', lname: '', email: '', type: ''})

  const handleSubmit = (event) => {
    event.preventDefault()
    addDoc(collection(db, "users"), {
      first: user.fname,
      last: user.lname,
      email: user.email,
      type: user.type
    })
    console.log(user)
  }

  return (
    <>
      <section className="h-screen">
        <Grid item container xs={12} sm={12} paddingX={6} paddingBottom={6} sx={{ height: "100%" }} alignItems={"center"}>
          <Grid item container xs={12} sm={8} sx={{ height: "100%", display: 'flex' }} alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={12} sm={12}>
              <img src="/construkta.svg" className='w-36 md:w-40 lg:w-44 xl:w-48' />
            </Grid>
            <Grid item container xs={12} sm={12} sx={{ display: { xs: 'flex', sm: 'none' } }} alignItems={"center"} justifyContent={"center"} >
              <Grid item xs={6} sm={12}>
                <img src="/tools-and-material.svg" style={{ display: 'block', margin: 'auto' }} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <h1 className="font-roboto text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Consigue los mejores materiales, al precio más bajo, y en un instante.
              </h1>
            </Grid>
            <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
              <p className="font-roboto text-left text-gray-400 text-lg md:text-xl lg:text-1xl xl:text-2xl">
                Ayudamos a las personas y empresas a vender y comprar materiales de construcción de forma rápida a un precio competitivo para reducir los costos generados por la desinformación.
              </p>
            </Grid>
            <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
              <div className="flex flex-row content-start items-center">
                <a href="#form-screen" className="bg-yellow-400 text-white font-roboto py-2 px-4 rounded-xl">¡Empecemos!</a>
              </div>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={4} sx={{ height: "100%", display: { xs: 'none', sm: 'flex' } }} alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={12} sm={12}>
              <img src="/tools-and-material.svg" style={{ display: 'block', margin: 'auto' }} />
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section className="h-screen bg-gradient-to-br from-orange-500 to-yellow-300 flex flex-col">
        <div className="flex flex-col items-center justify-center grow">
          <div className="flex flex-col items-center max-w-xl px-12">
            <IconContext.Provider value={{ color: "white", size: "5em" }}>
              <IoMdListBox />
            </IconContext.Provider>
            <p className="font-roboto text-md sm:text-lg text-white mt-4 text-center">
              Ofrecemos un catálogo de productos en línea variado, que se actualiza con cada
              uno de los items de los proveedores.
            </p>
          </div>
          <div className="flex flex-col items-center w-3/4 mt-4 bg-gray-100 rounded-xl">
            <IconContext.Provider value={{ color: "black", size: "5em" }}>
              <MdMoneyOff />
            </IconContext.Provider>
            <p className="font-roboto text-md sm:text-lg text-black pt-4 text-center max-w-xl">
              Los mejores precios disponibles en tu zona. Te mostramos la opción más económica para
              cada articulo que busques.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xl py-4 px-12">
            <IconContext.Provider value={{ color: "white", size: "5em" }}>
              <BsStarHalf />
            </IconContext.Provider>
            <p className="font-roboto text-md sm:text-lg text-white pt-4 text-center">
              Te damos un informe de la calidad de cada producto en el que estes interesado. Desde opiniones
              de compradores, hasta reseñas profesionales.
            </p>
          </div>
        </div>
      </section>
      <section id="form-screen" className="h-screen bg-gray-200">
        <Grid item container xs={12} sm={12} paddingX={6} paddingBottom={6} sx={{ height: "100%" }} alignItems={"center"}>
          <Grid item container xs={12} sm={6} spacing={1} sx={{ height: "100%", display: 'flex' }} alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={12} sm={12}>
              <img src="/construkta.svg" className='w-36 md:w-40 lg:w-44 xl:w-48' />
            </Grid>
            <Grid item container xs={12} sm={12} sx={{ display: { xs: 'flex', sm: 'none' } }} alignItems={"center"} justifyContent={"center"} >
              <Grid item xs={6} sm={12}>
                <img src="/agent.png" style={{ display: 'block', margin: 'auto' }} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <h1 className="font-roboto text-xl md:text-1xl lg:text-2xl xl:text-3xl text-gray-600">Compartenos tu información de contacto.</h1>
            </Grid>
            <Grid item xs={12} sm={12}>
              <h1 className="font-roboto text-xl md:text-1xl lg:text-2xl xl:text-3xl">¡Nos comunicaremos contigo al instante!</h1>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField fullWidth variant="standard" label={"Nombre(s)"} value={user.fname} onChange={(e) => setUser({ ...user, fname: e.target.value })} id="fmane" name="fname" ></TextField>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField fullWidth variant="standard" label={"Apellido(s)"} value={user.lname} onChange={(e) => setUser({ ...user, lname: e.target.value })} id="lname" name="lname" ></TextField>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField fullWidth variant="standard" label={"Correo"} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} id="email" name="email"></TextField>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField fullWidth variant="standard" label={"Soy"} value={user.type} onChange={(e) => setUser({ ...user, type: e.target.value })} select id="types-select" name="type">
                <MenuItem key={1} value="ferreteria">Ferretería</MenuItem>
                <MenuItem key={2} value="ing-arq">Ingeniero o arquitecto</MenuItem>
                <MenuItem key={3} value="maestrobr">Maestro de obra</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} sx={{ mt: 1 }}>
              <div className="flex flex-row items-center justify-center">
                <a className="bg-yellow-400 text-white font-roboto py-2 px-6 rounded-xl" onClick={handleSubmit} style={{cursor: 'pointer'}}>Enviar</a>
              </div>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={6} sx={{ height: "100%", display: { xs: 'none', sm: 'flex' }, textAlign: 'center' }} alignItems={"center"}>
            <Grid item xs={12} sm={12}>
              <img src="/agent.png" style={{ display: 'block', margin: 'auto' }} />
            </Grid>
          </Grid>
        </Grid >
      </section >
    </>
  );
};

export default Home;
