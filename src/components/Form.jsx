
import { useState } from 'react';
import './Form.css'


function FormNota({setAlunosSituacao, alunosSituacao}) {
    const [formData, setFormData] = useState({
        name: '',
        img: '',
        note1: '',
        note2: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);

        const situacao = Number(formData.note1) + Number(formData.note2) >= 7 ? "aprovado" : "reprovado"

        const newCard = {
            name: formData.name,
            img: formData.img,
            status: situacao
        }
        // console.log(newCard)
        
        setAlunosSituacao([...alunosSituacao, newCard])

    };

    return (
        <div className='formDiv'>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <br/>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                
                <label>
                    URL da imagem:
                    <br/>
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                    />
                </label>
                
                <label>
                    Nota 1:
                    <br/>
                    <input
                        type="number"
                        name="note1"
                        value={formData.note1}
                        onChange={handleChange}
                    />
                </label>
                
                <label>
                    Nota 2:
                    <br/>
                    <input
                        type="number"
                        name="note2"
                        value={formData.note2}
                        onChange={handleChange}
                    />
                </label>
                
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormNota;