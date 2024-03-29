export interface CardData {
    code: string,
    image: string,
    images: {
        svg: string,
        png: string
    },
    value: string,
    suit: string
}

export const fetchDeckData = async () => {

    let cards: CardData[] = [];

    try {
        const response = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52");
        const data = await response.json();
        cards = data.cards;

    } catch (error: any) {
        console.log(error.message);
    }

    return cards;
};
