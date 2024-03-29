import React, {useState, useEffect} from 'react';
import './App.css';
import {fetchDeckData} from "./api/deckAPI";
import {CardData} from "./api/deckAPI";
import {Board} from "./components/Board";
import {CardSettingsModal, Settings} from "./components/CardSettingsModal";


const App: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [cards, setCards] = useState<CardData[]>([]);
    const [settings, setSettings] = useState<Settings>({
        mix: false,
        spades: true,
        diamonds: true,
        clubs: true,
        hearts: true,
    });
    const [visible, setVisible] = useState<boolean>(false);

    let visibleCards: CardData[] = cards;

    if (!settings.spades) {
        visibleCards = visibleCards.filter((card) => card.suit !== "SPADES");
    }
    if (!settings.diamonds) {
        visibleCards = visibleCards.filter((card) => card.suit !== "DIAMONDS");
    }
    if (!settings.clubs) {
        visibleCards = visibleCards.filter((card) => card.suit !== "CLUBS");
    }
    if (!settings.hearts) {
        visibleCards = visibleCards.filter((card) => card.suit !== "HEARTS");
    }

    useEffect(() => {
        setLoading(true);
        fetchDeckData().then(value => {
            setCards(value);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (settings.mix) {
            setLoading(true);
            fetchDeckData().then(value => {
                setCards(value);
                setLoading(false);
            });
        }
    }, [settings]);

    if (loading) {
        return (
            <div className="app">
                Is loading...
            </div>
        )
    }

    return (
        <div className="app">
            <div className="content-box">
                <Board cards={visibleCards}/>
                <button className="btn" onClick={() => setVisible(true)}>Настроить колоду</button>
            </div>
            <CardSettingsModal
                visible={visible}

                onApply={(settings) => {
                    setVisible(false);
                    setSettings (settings);
                }}
                onCancel={() => setVisible(false)}

                mix={settings.mix}
                spades={settings.spades}
                diamonds={settings.diamonds}
                clubs={settings.clubs}
                hearts={settings.hearts}
            />
        </div>
    );
}

export default App;
