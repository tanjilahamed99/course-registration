import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="w-[75%] ">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
                cards.map((card,idx) => <Card key={idx} card={card}></Card>)
            }
           </div>
        </div>
    );
};

export default Cards;