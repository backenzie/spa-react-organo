import "./CampoTexto.css";

export const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        required={props.obrg}
        placeholder={`${props.placeholder}...`}
        onChange={(evento) => props.alteredValue(evento.target.value)}
        value={props.valor}
      ></input>
    </div>
  );
};
