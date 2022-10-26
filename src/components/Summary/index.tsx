import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import totalImg from "../../assets/Total.svg";
import { Container } from "./styles";


export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong> R$ 1000</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>- 500</strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong> = 500</strong>
            </div>



        </Container>
    );
}