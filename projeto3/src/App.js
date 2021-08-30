import React,{useState} from 'react';
import './App.css';
import { Modal } from './components/Modal';

const JogosArrayBanco = 
[
  {
    id: 1,
    nomeJogo: "DOTA 2",
    imagemUrl:"https://wallpapercave.com/wp/wp2532627.jpg",
    trailerUrl: "https://www.youtube.com/embed/tMzpLnQtVuE",
  },
  {
    id: 2,
    nomeJogo: "Valorant",
    imagemUrl:"https://images6.alphacoders.com/107/1072679.jpg",
    trailerUrl:"https://www.youtube.com/embed/IhhjcB2ZjIM",
  },
  {
    id: 3,
    nomeJogo: "The Witcher 3 - Wild Hunt",
    imagemUrl:"https://images5.alphacoders.com/424/424912.jpg",
    trailerUrl: "https://www.youtube.com/embed/vuOPN4MpLaM",
  
  },
  {
    id: 4,
    nomeJogo: "Red Dead Redemption 2",
    imagemUrl:"https://imagebee.org/games/red-dead-redemption-2/red-dead-redemption-2-2-1920x1080.jpg",
    trailerUrl: "https://www.youtube.com/embed/MwDJjFP_Ovg",
  
  },
];

function ListaJogos () {

  const [selectItem,setSelectItem] = useState();
  const [GameList, setGameList] = useState(JogosArrayBanco.sort((a, b) => (a.nomeJogo > b.nomeJogo ? 1 : -1))); 
  const [showModal,setShowModal] = useState(false);
  const selected =(item) =>{
    setSelectItem(item);
    setShowModal(true);
  }
    return (
      <>
      <h1>Lista de Filmes:</h1>
        <div className="cardGames">
            <div className="cardContent">
            <ul>
                {GameList.map((f) => (
                    <li key={f.id}>
                        <h3>{f.nomeJogo}</h3>
                        <img src={f.imagemUrl} alt={"Capa do Jogo" + f.nomeJogo}/>
                        <button onClick={()=>selected(f)}>Saiba Mais</button>
                    </li>
                ))}
            </ul>
            </div>
            <Modal selectedGame={selectItem} showModal={showModal} setShowModal={setShowModal} />
        </div>
      </>
    );
};

export default ListaJogos;