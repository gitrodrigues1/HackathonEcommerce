import * as T from './style';
import { TiShoppingCart } from "react-icons/ti";

const CardMenu = () => {
    return(
        <T.Card>
            <T.ImageBox className="img-box">
                <img src="https://images.pexels.com/photos/13869890/pexels-photo-13869890.jpeg" alt="Imagem de comida japones"/>
            </T.ImageBox>
            <T.Content className='content'>
                <h2>Temaki de Atum</h2>
                <p> Cone de alga nori recheado com arroz japonês, atum fresco picado, cebolinha e um toque de maionese japonesa. <br /> <br /> <b>Preço R$:18,00 (unidade)</b></p>
                <T.Carrinho href="#">
                    <TiShoppingCart className='icon'/>
                    Colocar no carrinho
                </T.Carrinho>
            </T.Content>
        </T.Card>
    );
}

export default CardMenu;