import "./CSS/file.css";

export default function BotonEnlace(props) {
  return <a target="_blank" rel="noreferrer" className="Boton-enlace" href={props.enlace}>{props.name}</a>;
}
