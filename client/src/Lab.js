import React from 'react';
import ReactDOM from 'react-dom/client';
import './Lab.css';
import Note from './Note';
import reportWebVitals from './pages/reportWebVitals';
import { json, redirect } from "react-router-dom";


const Lab = () => {

  return (
    
      <React.StrictMode>
        <Note />
      </React.StrictMode>
    

  );

};

export default Lab;
reportWebVitals();



export async function labLoader({ request, params }) {
  if (localStorage.getItem("isLoggedIn") === null) return redirect("/login");
  return json({ status: 200 });
}

