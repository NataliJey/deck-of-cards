import './Board.css';
import {CardData} from "../api/deckAPI";
import {Card} from "./Card";

interface Props {
    cards: CardData[];
}
export function Board(props: Props) {

    const boardItems = props.cards.map((card) => (
        <Card key={card.code} image={card.image} code={card.code}/>
    ));

    return (
        <div className="board">
            {boardItems}
        </div>
    )
}