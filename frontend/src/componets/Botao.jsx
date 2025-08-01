// Componente de botão reutilizável
export default function Botao ({ tipo = 'button', texto, onClick, classExtra = '' }) {
    return (
       <button type={tipo} className={`btn ${classExtra}`} onClick={onClick}>
              {texto}
       </button>
    );
}