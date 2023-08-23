import React from "react";


import "./style.css";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ' , quantity)}/>

    </>
  );
}
