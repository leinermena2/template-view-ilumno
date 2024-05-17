"use client"
import React, { useState } from "react";
import Drawer from "./components/Drawer";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactIcon from '@mui/icons-material/ContactSupport';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerOptions = [
    { label: 'Inicio', icon: HomeIcon, onClick: () => console.log('Clicked on Inicio') },
    { label: 'Acerca de', icon: InfoIcon, onClick: () => console.log('Clicked on Acerca de') },
    { label: 'Contacto', icon: ContactIcon, onClick: () => console.log('Clicked on Contacto') }
  ];

  return (
    <div>
      <h1>¡Bienvenido a mi página de inicio!</h1>
      <button onClick={handleDrawerToggle}>Abrir/Cerrar Drawer</button>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerToggle}
        options={drawerOptions}
        position="right"
      />
    </div>
  );
}
