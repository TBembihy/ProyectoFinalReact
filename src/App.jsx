import { useEffect } from "react";
import { Button, ChakraProvider, Text, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layout/MainLayout";
import { ProductsData } from "./data/productData"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItemButton from "./components/AddItemButton/AddItemButton";
import Brief from "./components/Brief/Brief";
import Checkout from "./components/Checkout/Checkout";
import Description from "./components/Description/Description";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemList from "./components/ItemList/ItemList";
import ItemQuantitySelector from "./components/ItemQuantitySelector/ItemQuantitySelector";

function App() {  
  const myPromise = new Promise((resolve, reject,) => {
    const number = 5;
    if (number === 5) {
      resolve ("El número es 5")
    } else {
      reject ("El numero no es 5");
    }
  })
  
  return (
    <ChakraProvider>
      <MainLayout>
        <ItemListContainer greeting="Bienvenidos" products={ProductsData} />
      </MainLayout>
    </ChakraProvider>

  );

  
}

export default App;