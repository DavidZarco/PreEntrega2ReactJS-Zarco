import React from "react";


import "./style.css";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemDetailContainer/>
    </>
  );
}
