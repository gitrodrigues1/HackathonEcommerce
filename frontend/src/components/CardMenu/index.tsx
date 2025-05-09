import * as T from './style'
import { TiShoppingCart } from "react-icons/ti"

interface props {
    nome: string;
    descricao: string;
    imagem: string;
    preco: string;
}

const CardMenu: React.FC<props> = ({nome, descricao, imagem, preco}) => {
    return(
        <T.Card>
            <T.ImageBox className="img-box">
                <img src={imagem} alt="Imagem de comida japones"/>
            </T.ImageBox>
            <T.Content className='content'>
                <h2>{nome}</h2>
                <p> {descricao} <br /> <br /> <b>Preço R$: {preco}</b></p>
                <T.Carrinho>
                    <TiShoppingCart className='icon'/>
                    Colocar no carrinho
                </T.Carrinho>
            </T.Content>
        </T.Card>
    );
}

export default CardMenu;