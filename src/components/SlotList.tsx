import React from "react";
import './Styles/SlotListStyle.css';
import { slotList } from '../data/Slides';
import { ISlotList } from '../data/interfaces/ISlot';

const Slots: React.FC = () => {
    return (
        <div className="slot-container">
            {slotList.map((item: ISlotList) => (
                <div key={item.key} className="slot-game">
                    <img src={item.image} alt={item.name} className="slot-image" />
                    <div className="slot-info">
                        <p className="slot-name">{item.name}</p>
                    </div>
                    <button className="slot-button">Play</button>
                </div>
            ))}
        </div>
    );
}

export default Slots;
