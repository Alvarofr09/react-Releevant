import React from "react";
import { createRoot } from "react-dom/client";
import * as Componets from "./main"; // Importa el componente Profile desde su ubicación
const container = document.getElementById("root");

// Renderiza el componente Profile dentro del contenedor con id 'root'
const root = createRoot(container);
root.render(
	<>
		<Componets.Profile />
		<Componets.ShoppingList />
		<h1>Los controladores se actualizan separadamente</h1>
		<Componets.MyButton />
		<Componets.MyButton />

		<Componets.ButtonComp />
	</>
);
