import { alunos } from '../data/data';
import './Card.css';

function CardAproveds() {
    return (
        <ul className="CardDiv">
            {alunos.map((aluno) => (
                <li className='CardList' key={aluno.id}>
                    <img src={aluno.img} alt={aluno.name} />
                    <div className='alunosInfo'>
                        <p><b>Aluno:</b> {aluno.name}</p>
                        
                        <span><b>Status:</b> {aluno.status}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CardAproveds;