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
