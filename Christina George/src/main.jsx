import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HackSphereLanding from './HackSphereLanding.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HackSphereLanding />
  </StrictMode>,
);