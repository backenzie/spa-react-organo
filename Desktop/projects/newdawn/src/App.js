import { useState } from "react";
import Banner from "./componentes/Banner";
import { Formulario } from "./componentes/Formulario";
import { Time } from "./componentes/Time";
import { Rodape } from "./componentes/Rodape";

function App() {
  const [cards, setCards] = useState([]);

  const times = [
    {
      nome: "Clash of Clans",
      corPrimaria: "#57C278",
      corSecundaria: "#57C278",
    },
    {
      nome: "League of Legends",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "CS-GO",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Valorant",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "World of warcraft",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
  ];

  function aoAdicionarCard(novoCard) {
    setCards([...cards, novoCard]);
  }

  return (
    <div className="app">
      <Banner />;
      <Formulario
        timesName={times.map((time) => time.nome)}
        aoCadastrar={(novoCard) => aoAdicionarCard(novoCard)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          name={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          integrante={cards.filter(
            (integrante) => integrante.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
