import React from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>YC Service Catalogue</h1>
            </header>

            <main>
                <ProductList />
            </main>

            <footer className="footer">
                &copy; 2026 YC Service. Tous droits réservés.
            </footer>
        </div>
    );
}

export default App;