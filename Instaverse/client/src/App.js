import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import Home from "./components/Home";
import styles from "./styles";
import AppBar from "./components/AppBar";
import AuthForm from "./components/AuthForm";
import { DatabaseTwoTone } from "@ant-design/icons";

const { Footer } = Layout;

const App = () => {
	const d = new Date();
	const [date, _] = useState(d.getFullYear());
	return (
		<BrowserRouter>
			<Layout style={styles.layout}>
				<AppBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/authform' element={<AuthForm />} />
				</Routes>
				<Footer style={styles.footer}>{date} Instaverse</Footer>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
