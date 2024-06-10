import React from "react";
import './Styles/MainStyle.css';
import ReactSimplyCarousel from 'react-simply-carousel';
import { Button } from "antd";
import { ISlot } from "../data/interfaces/ISlot";
import { slides } from "../data/Slides";

const Main: React.FC = () => {
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    const [balance, setBalance] = React.useState(100);

    const rollTheReel = () => {
        const random = Math.floor(Math.random() * 24);
        setActiveSlideIndex((x) => (x + random) % slides.length);

        if(activeSlideIndex >= 5) 
            setBalance(balance + 10);
        else 
            setBalance(balance - 10);
    };

    return (
        <div className="carousel-container">
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={5}
                forwardBtnProps={{
                    style: {
                        visibility: 'hidden',
                    },
                }}
                backwardBtnProps={{
                    style: {
                        visibility: 'hidden',
                    },
                }}
                responsiveProps={[
                    {
                        itemsToShow: 5,
                        minWidth: 768,
                    },
                ]}
                speed={200}
                easing="linear"
            >
                {slides.map((slide: ISlot) => (
                    <div
                    key={slide.id}
                    className="carousel-slide"
                    style={{
                        background: slide.backgroundColor,
                    }}
                >
                    <img src={slide.src} alt={slide.label} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                </div>
                ))}
            </ReactSimplyCarousel>
            <Button className="roll-btn"
                type="text"
                onClick={rollTheReel}
                disabled={balance < 10}
            >
                Spin
            </Button>
            <div className="active-slide-index">
                Active Slide Index: {activeSlideIndex}
            </div>
            <div className="balance">
                Balance: ${balance}
            </div>
        </div>
    );
}

export default Main;
