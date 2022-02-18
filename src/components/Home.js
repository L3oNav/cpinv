import React from "react";

import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../credenciales";
import { Button, Container, Stack, Form, Table } from "react-bootstrap";
import getAllProducts from "../functions/getAllProducts";
import ModalAñadir from "./modalAñadir";
import eliminarProductoHome from "../functions/eliminarProductoHome";
import ModalEditar from "./modalEditar";
import filtrarDatos from "../functions/filtrarDatos";

const auth = getAuth(firebaseApp);

export const Home = ({ usuarioGlobal }) => {
	const [productos, setProductos] = React.useState([]);
	const [isModalAñadir, setIsModalAñadir] = React.useState(false);
	const [isModalEditar, setIsModalEditar] = React.useState(false);
	const [productoEditar, setProductoEditar] = React.useState({});

	async function busquedaFormHandler(e) {
		e.preventDefault();
		const busqueda = e.target.busqueda.value;
		const nvosDocus = await filtrarDatos(busqueda);
		setProductos(nvosDocus);
	}

	function actualizarEstadoProductos() {
		getAllProducts().then((productos) => {
			setProductos(productos);
		});
	}

	function añadirProductoHome() {
		setIsModalAñadir(true);
	}

	React.useEffect(() => {
		actualizarEstadoProductos();
	}, []);

	return (
		<Container className="w-100">
			<ModalAñadir
				isModalAñadir={isModalAñadir}
				setIsModalAñadir={setIsModalAñadir}
				actualizarEstadoProductos={actualizarEstadoProductos}
			/>

			{productoEditar && (
				<ModalEditar
					isModalEditar={isModalEditar}
					setIsModalEditar={setIsModalEditar}
					actualizarEstadoProductos={actualizarEstadoProductos}
					productoEditar={productoEditar}
					setProductoEditar={setProductoEditar}
				/>
			)}
			<Stack
				direction="horizontal"
				className="justify-content-between w-100 p-3 text-white"
				style={{ backgroundColor: "#6c3b96" }}
			>
				<p style={{ fontSize: 22, padding: "5px" }}>
					Bienvenido, {usuarioGlobal.email}
				</p>
				<Button
					className="btn btn-light"
					style={{ fontSize: 16, padding: "5px" }}
					onClick={() => signOut(auth)}
				>
					Cerrar Sesion
				</Button>
			</Stack>
			<hr />

			<Form onSubmit={busquedaFormHandler}>
				<Stack direction="horizontal">
					<Form.Group controlId="busqueda" className="w-75 m-3">
						<Form.Control
							type="text"
							placeholder="Search by brand, CP code or Location..."
						/>
					</Form.Group>
					<Button variant="dark" type="submit">
						Find device
					</Button>
					<Button
						variant="outline-dark"
						onClick={() => {
							const input = document.getElementById("busqueda");
							input.value = "";
							actualizarEstadoProductos();
						}}
					>
						Resetear
					</Button>
				</Stack>
			</Form>
			<hr />
			<Button onClick={añadirProductoHome}>Add device</Button>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Brand</th>
						<th>Model</th>
						<th>Serial number</th>
						<th>HDD/SSD</th>
						<th>RAM</th>
						<th>Processor</th>
						<th>CP Code</th>
						<th>Condition</th>
						<th>Details</th>
						<th>Location</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{productos &&
						productos.map((producto, index) => (
							<tr
								key={index}
								className={index % 2 === 0 ? "table-secundary" : "table-light"}
							>
								<td>{index + 1}</td>
								<td>{producto.brand}</td>
								<td>{producto.model}</td>
								<td>{producto.serialNumber}</td>
								<td>{producto.hdd}</td>
								<td>{producto.ram}</td>
								<td>{producto.processor}</td>
								<td>{producto.cpCode}</td>
								<td>{producto.condition}</td>
								<td>{producto.details}</td>
								<td>{producto.location}</td>
								<td>
									<Button
										variant="dark"
										onClick={() => {
											setProductoEditar({ ...producto });
											setIsModalEditar(true);
										}}
									>
										Edit
									</Button>
									<Button
										variant="danger"
										onClick={() => {
											eliminarProductoHome(producto);
											actualizarEstadoProductos();
										}}
									>
										Delete
									</Button>
								</td>
							</tr>
						))}
				</tbody>
			</Table>
		</Container>
	);
};
export default Home;
