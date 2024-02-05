import { useState } from "react";

const user = {
	name: "Hedy Lamarr",
	imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
	imageSize: 90,
};

const products = [
	{ title: "Col", isFruit: false, id: 1 },
	{ title: "Ajo", isFruit: false, id: 2 },
	{ title: "Manzana", isFruit: true, id: 3 },
];

export function Profile() {
	return (
		<>
			<h1>{user.name}</h1>
			<img
				className="avatar"
				src={user.imageUrl}
				alt={"Foto de " + user.name}
				style={{
					width: user.imageSize,
					height: user.imageSize,
				}}
			/>
		</>
	);
}

export function ShoppingList() {
	const listItems = products.map((product) => (
		<li
			key={product.id}
			style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
		>
			{product.title}
		</li>
	));

	return <ul>{listItems}</ul>;
}

export function MyButton() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return <button onClick={handleClick}> Hiciste clic {count} veces</button>;
}

export function ButtonComp() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div>
			<h1>Contadores que se actualizan separadamente</h1>
			<MyButtonCompartido count={count} onClick={handleClick} />
			<MyButtonCompartido count={count} onClick={handleClick} />
		</div>
	);
}

export function MyButtonCompartido({ count, onClick }) {
	return <button onClick={onClick}>Hiciste clic {count} veces</button>;
}
