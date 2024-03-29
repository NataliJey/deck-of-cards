import './CardSettingsModal.css';
import {useState} from "react";

interface Props {
    visible: boolean;

    onApply: (settings: Settings) => void;
    onCancel: () => void;

    mix: boolean;
    spades:boolean;
    diamonds: boolean;
    clubs: boolean;
    hearts: boolean;
}

export interface Settings {
    mix: boolean;
    spades:boolean;
    diamonds: boolean;
    clubs: boolean;
    hearts: boolean;
}

export function CardSettingsModal(props: Props) {
    const [spades, setSpades] = useState<boolean>(props.spades);
    const [diamonds, setDiamonds] = useState<boolean>(props.diamonds);
    const [clubs, setClubs] = useState<boolean>(props.clubs);
    const [hearts, setHearts] = useState<boolean>(props.hearts);
    const [mix, setMix] = useState<boolean>(props.mix);

    let visible: boolean = props.visible;

    if (!visible) {
        return null;
    }

    return (
        <div className="modal-box">
                Настроить отображение мастей:
                <label>
                    <input type="checkbox" name="spades" checked={spades} onChange={(event) => {setSpades(event.currentTarget.checked)}}/>
                    Пики
                </label>
                <label>
                    <input type="checkbox" name="diamonds" checked={diamonds} onChange={(event) => {setDiamonds(event.currentTarget.checked)}}/>
                    Бубны
                </label>
                <label>
                    <input type="checkbox" name="clubs" checked={clubs} onChange={(event) => {setClubs(event.currentTarget.checked)}}/>
                    Трефы
                </label>
                <label>
                    <input type="checkbox" name="hearts" checked={hearts} onChange={(event) => {setHearts(event.currentTarget.checked)}}/>
                    Черви
                </label>
                Дополнительные настройки:
                <label>
                    <input type="checkbox" name="mix" checked={mix} onChange={(event) => {setMix(event.currentTarget.checked)}}/>
                    Перемешать
                </label>
            <div className="box-btn">
                <button className="btn-modal" onClick={() => {props.onCancel()}}>Отмена</button>
                <button className="btn-modal" onClick={() => {props.onApply(
                    {
                        spades:spades,
                        diamonds: diamonds,
                        clubs: clubs,
                        hearts: hearts,
                        mix: mix
                    }
                )}}>Применить</button>
            </div>
        </div>
    )
}