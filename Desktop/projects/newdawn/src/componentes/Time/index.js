import { Integrantes } from "../Integrantes";
import "./Time.css";

export const Time = (props) => {
  return props.integrante.length > 0 ? (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
      <div className="colaboradores">
        {props.integrante.map((card) => (
          <Integrantes
            corDeFundo={props.corPrimaria}
            key={card.name}
            nome={card.name}
            elo={card.elo}
            imagem={card.image}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};
