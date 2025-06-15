import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal0 from './Modal0.jsx';
import Modal1 from './Modal1.jsx';
import Modal2 from './Modal2.jsx';
import Modal3 from './Modal3.jsx';
import Modal4 from './Modal4.jsx';
import './estilos.css'

function CardFamosos(props){
    return(
        <div className="carito">
            <table border='3' >
                <tr>
                    <th>
                        <img src="../public/AdamSandler.webp" alt="" className="imagen"/>
                    </th>
                </tr>
                <tr><div className="texto">Adam Sandler</div></tr>
            </table>
            <table border='3'>
                <tr>
                    <th>
                        <img src="../public/johnnyDepp.webp" alt="" className="imagen"/>
                    </th>
                </tr>
                <tr><div className="texto">Johnny Depp</div></tr>
            </table>
            <table border='3'>
                <tr>
                    <th>
                        <img src="../public/WillSmith.webp" alt="" className="imagen"/>
                    </th>
                </tr>
                <tr><div className="texto">Will Smith</div></tr>
            </table>
            
        </div>
    );
}
function ModalPelis(props){
    return(
        <div className="botones">
            <Modal0></Modal0>
            <Modal1></Modal1>
            <Modal2></Modal2>
            <Modal3></Modal3>
            <Modal4></Modal4>
        </div>
    );
}

function Principal(props){
    return(
        <div className="layout">
            <div className="caja1">
                <h1>TITULO EXAMEN (tarea 8)</h1>
            </div>
            <div className="caja2">
                <h2>MENU</h2>
                <ul>
                    <li>
                        {/* en la otra fila se puso "/" aqui tambien pa que se vinculen po */}
                        <Link to="/">Principal</Link>
                    </li>
                    <li>
                        <Link to="/pag2">Peliculas</Link>
                    </li>
                    
                </ul>
            </div>
            <div className="caja3">
                <Routes>
                    <Route path="/" element={<CardFamosos></CardFamosos>}></Route> //poner solo "/" hace que sea por defecto
                    <Route path="/pag2" element={<ModalPelis></ModalPelis>}></Route>
                    //en la llaves "{}" se pone un componente
                </Routes>
            </div>
            <div className="caja4">
                <h1>Bryan Paul Patty Tancara</h1>
            </div>
            <div className="caja">
                <h1>PROGRAMACION WEB II TELLEZ</h1>
            </div>
        </div>
    );
}
export default Principal;