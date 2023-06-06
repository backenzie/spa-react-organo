import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import "./Formulario.css";

export const Formulario = () => {
  const times = ["League of Legends", "CS-GO", "Valorant", "World of warcraft"];

  return (
    <section className="formulario">
      <form onSubmit={(evento) => evento.preventDefault()}>
        <h2>Preencha os dados para criar o card de jogador</h2>
        <CampoTexto
          obrg={true}
          label="Nome"
          placeholder="Digite aqui seu nome"
        />
        <CampoTexto obr={true} label="Elo" placeholder="Digite aqui seu elo" />
        <CampoTexto label="Imagem" placeholder="Escolha sua melhor imagem" />
        <ListaSuspensa obrg={true} itens={times} label="Time" />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
