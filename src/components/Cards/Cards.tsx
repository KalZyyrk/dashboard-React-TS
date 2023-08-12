import "./Cards.css";
import {cardsData} from "../../constants/constants";
import {ICard} from "../../types/types";
import Card from "../Card/Card";

const Cards: React.FC = () => {
    return (
        <div className="Cards">
            {cardsData.map((card: ICard, id: number) => {
                return (
                    <div className="parentContainer" key={id}>
                        <Card title={card.title} color={card.color} barValue={card.barValue} value={card.value}
                              png={card.png} series={card.series}/>
                    </div>
                )

            })}
        </div>
    )
}

export default Cards;