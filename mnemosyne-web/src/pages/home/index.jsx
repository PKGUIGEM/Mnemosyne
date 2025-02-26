import { useEffect, useState } from "react";
import Header from "../../components/header";
import "./home.css";
import memory from "../../services/memory";



const Home = () => {

    const [memories, setMemories] = useState([]);

    useEffect(() => {

        getMemoriesList();

    }, [])

    const getMemoriesList = async () => {

        const lista = await memory.getMemories();

        console.log("Lista: ", lista);

        setMemories(lista);

    }

    return (
        <>

            <Header></Header>

            <main clasName="app-main">
    <h1>Criar memória</h1>

    <p clasName="feedback"></p>

    <div clasName="form-container">
        <label>
            <span>Título</span>
            <input type="text" placeholder="Insira o título aqui." />
        </label>

        <label>
            <span>Descrição</span>
            <textarea placeholder="Insira a descrição aqui."></textarea>
        </label>

        <label htmlfor="file-input" clasName="file">
            <span>Imagens</span>
            <span clasName="input-file-button">Adicionar imagem</span>
            <input id="file-input" type="file" multiple />
            <span clasName="no-images">Nenhuma imagem no momento.</span>
            <div clasName="images-container"></div>
        </label>
    </div>

    <button clasName="create-memory-btn">Criar memória</button>
</main>

<footer clasName="app-footer">
    <p>Mnemosyne - Ariel Paixão dos Santos</p>
</footer>


            <main clasNameName="app-main">

                <h1>Meus momentos</h1>

                <div clasNameName="memories-container">

                    {memories.map((memory, index) => (

                        <a key={index} href={`/memory?id${memory.id}`}>


                            <div clasNameName="memory-card">

                                <div clasNameName="image" style={{ backgroundImage: `url(${memory.images[0]})` }}></div>

                                <h2>{memory.title}</h2>

                                <p>{memory.description}</p>

                            </div>
                        
                        </a>
                  
                    ))}
                </div>

            </main>

            <footer clasNameName="app-footer">

                <p>Mnemosyne - Ariel Paixão dos Santos</p>

            </footer>
        </>
    );
}

export default Home;