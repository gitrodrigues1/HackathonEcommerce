import { colors } from "../variables/colors"
import CardMenu from "../components/CardMenu"
import styled from "styled-components"

const Lista = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: ${colors.white};
    gap: 100px 0;
    font-family: "Roboto Condensed", system-ui;
    h1 {
        font-size: 10rem;
        width: 100%;
        font-family: 'onari', 'New Amsterdam', sans-serif;
        padding-top: 70px;
        text-align: center;
    }
`
const Menu = () => {
    return (
        <Lista>
            <h1>Menu</h1>
            <CardMenu nome="Sushi de Salmão" descricao="Arroz japonês temperado, fatias frescas de salmão, nori, e um toque de wasabi e gengibre." imagem="https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg?auto=compress&cs=tinysrgb&w=800" preco="25,00"/>
            <CardMenu nome="Temaki de Atum" descricao="Cone de alga nori recheado com arroz japonês, atum fresco picado, cebolinha e um toque de maionese japonesa." imagem="https://images.pexels.com/photos/27662758/pexels-photo-27662758/free-photo-of-legumes-vegetais-restaurante-jantar.jpeg?auto=compress&cs=tinysrgb&w=800" preco="22,00 (6 unidades)"/>
            <CardMenu nome="Yakissoba de Frango" descricao="Macarrão de trigo salteado com frango, vegetais frescos, como brócolis, cenoura e repolho, em um molho de soja e gengibre." imagem="https://images.pexels.com/photos/27953852/pexels-photo-27953852/free-photo-of-refeicao-comida-frango-galinha.jpeg?auto=compress&cs=tinysrgb&w=800" preco="55,00"/>
            <CardMenu nome="Sashimi de Atum" descricao="Fatias finas de atum fresco, servidas com molho shoyu, wasabi e gengibre em conserva." imagem="https://images.pexels.com/photos/17308491/pexels-photo-17308491/free-photo-of-comida-alimento-refeicao-placa.jpeg?auto=compress&cs=tinysrgb&w=800" preco="28,00"/>
            <CardMenu nome="Gyoza" descricao="Pasteizinhos de massa fina recheados com carne de porco e vegetais, servidos com molho agridoce." imagem="https://images.pexels.com/photos/4857728/pexels-photo-4857728.jpeg?auto=compress&cs=tinysrgb&w=800" preco="65,00"/>
            <CardMenu nome="Tempurá de Camarão" descricao="Camarões grandes empanados em uma massa leve e crocante, fritos e servidos com molho de soja e gengibre." imagem="https://images.pexels.com/photos/8953713/pexels-photo-8953713.jpeg?auto=compress&cs=tinysrgb&w=800" preco="12,00 (unidade)"/>
            <CardMenu nome="Onigiri" descricao="Bolinho de arroz japonês recheado com salmão grelhado e envolto em alga nori." imagem="https://images.pexels.com/photos/7262929/pexels-photo-7262929.jpeg?auto=compress&cs=tinysrgb&w=800" preco="10,00 (unidade)"/>
            <CardMenu nome="Udon" descricao="Sopa de macarrão grosso de trigo em caldo quente, servida com pedaços de frango, cebolinha e tempurá." imagem="https://images.pexels.com/photos/12669949/pexels-photo-12669949.jpeg?auto=compress&cs=tinysrgb&w=800" preco="20,00"/>
            <CardMenu nome="Takoyaki" descricao="Bolinhos de polvo cozidos em chapa, cobertos com molho takoyaki, maionese japonesa, alga nori em pó e flocos de bonito seco." imagem="https://images.pexels.com/photos/25078435/pexels-photo-25078435/free-photo-of-comida-alimento-refeicao-mulher.jpeg?auto=compress&cs=tinysrgb&w=800" preco="18,00"/>
            <CardMenu nome="Mochi" descricao="Bolinho de arroz glutinoso recheado com pasta de feijão doce (anko), com uma textura macia e elástica." imagem="https://images.pexels.com/photos/6646369/pexels-photo-6646369.jpeg?auto=compress&cs=tinysrgb&w=800" preco="25,00 (4 espetinhos)"/>
        </Lista>
    )
}

export default Menu