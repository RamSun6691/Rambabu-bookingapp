import React from "react";
import "./App.css";
import BookingApp from "./components/BookingApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoreData from "./components/StoreData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingApp />} />
        <Route path="/storelist" element={<StoreData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
