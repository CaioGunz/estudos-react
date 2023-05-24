
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e Desgin',
        'Mobile',
        'inovação e Gestão',
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTimes] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                />
                <CampoTexto 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)} 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                />
                <CampoTexto 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Times" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTimes(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario