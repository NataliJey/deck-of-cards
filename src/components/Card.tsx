import './Card.css';

interface Props {
    code: string;
    image: string;
}
export function Card(props: Props) {

    return (
        <div className="card-box">
            <img className="card" src={props.image} alt={props.code}/>
        </div>
    )
}