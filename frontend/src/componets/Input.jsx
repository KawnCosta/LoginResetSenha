// Componente de input reutilizável
export default function Input({ tipo = 'text', valor, aoMudar, placeholder, classExtra = '' }) {
    return (
        <input
            type="{tipo}"
            value={valor}
            onChange={aoMudar}
            placeholder={placeholder}
            className={`input ${classExtra}`}
        />
    );
}