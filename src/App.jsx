

import './Reset.css'
import './App.css'
import CardAproveds from './components/Card'
import FormNota from './components/Form'
import { useState } from 'react'
import { alunos } from './data/data'

function App() {

    const [alunosSituacao, setAlunosSituacao] = useState(alunos)

    return (
        <>
            <div className='mainDiv'>
                <FormNota setAlunosSituacao={setAlunosSituacao} alunosSituacao={alunosSituacao}/>
                <CardAproveds alunosSituacao={alunosSituacao}/>

            </div>
        </>
    )
}

export default App
