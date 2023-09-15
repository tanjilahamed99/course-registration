import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/Card";
import PropTypes from 'prop-types';

const Cards = ({ handleCart }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="w-[90%] md:w-[60%] lg:w-[71%] xl:w-[75%] mx-auto md:pl-4 lg:pl-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    cards.map((card, idx) => <Card key={idx} card={card} handleCart={handleCart}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    handleCart: PropTypes.func
};



export default Cards;