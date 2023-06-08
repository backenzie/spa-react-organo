import { useState } from "react";
import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import "./Formulario.css";

export const Formulario = (props) => {
  const [name, setName] = useState("");
  const [elo, setElo] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  function aoSalvar(e) {
    e.preventDefault();
    props.aoCadastrar({
      name,
      elo,
      image,
      time,
    });
    setName("");
    setElo("");
    setImage("");
    setTime("");
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card de jogador</h2>
        <CampoTexto
          valor={name}
          alteredValue={(valor) => setName(valor)}
          obrg={true}
          label="Nome"
          placeholder="Digite aqui seu nome"
        />
        <CampoTexto
          valor={elo}
          alteredValue={(valor) => setElo(valor)}
          obr={true}
          label="Elo"
          placeholder="Digite aqui seu elo"
        />
        <CampoTexto
          valor={image}
          alteredValue={(valor) => setImage(valor)}
          label="Imagem"
          placeholder="Escolha sua melhor imagem"
        />
        <ListaSuspensa
          valor={time}
          alteredValue={(valor) => setTime(valor)}
          itens={props.timesName}
          label="Time"
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
