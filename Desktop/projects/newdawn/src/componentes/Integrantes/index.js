import "./Integrantes.css";

export const Integrantes = ({ name, image, elo, corDeFundo }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={image} alt="imagem de perfil" />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{elo}</h5>
      </div>
    </div>
  );
};
