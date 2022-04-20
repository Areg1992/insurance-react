import React from "react";
import './App.scss';
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Reports from "./pages/Reports";

function App() {
    return (
        <div>
            <Header/>
            <SideBar/>
            <main>
                <Reports/>
            </main>
        </div>
    );
}

export default App;