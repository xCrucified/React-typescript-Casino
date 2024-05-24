import React from "react"
import './Styles/MainStyle.css'
import ReactSimplyCarousel from 'react-simply-carousel';
import { Button } from "antd";

const Main: React.FC = () => {
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    const rollTheReel = () => {
        return setActiveSlideIndex((x) => (x + 6) % (Math.random() * 10)); // Assuming you have 10 slides, change 10 to the total number of slides you have
    };
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex} //how many items i've roll 'random'
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    style: {
                        visibility: 'hidden',
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    style: {
                        visibility: 'hidden',
                    },
                }}
                responsiveProps={[
                    {
                        itemsToShow: 3,
                        itemsToScroll: 1,
                        minWidth: 768,
                    },
                ]}
                speed={400}
                easing="linear"
            >
                <div style={{ width: 300, height: 300, background: '#ff80ed' }}>
                    slide 0
                </div>
                <div style={{ width: 300, height: 300, background: '#065535' }}>
                    slide 1
                </div>
                <div style={{ width: 300, height: 300, background: '#000000' }}>
                    slide 2
                </div>
                <div style={{ width: 300, height: 300, background: '#133337' }}>
                    slide 3
                </div>
                <div style={{ width: 300, height: 300, background: '#ffc0cb' }}>
                    slide 4
                </div>
                <div style={{ width: 300, height: 300, background: '#ffffff' }}>
                    slide 5
                </div>
                <div style={{ width: 300, height: 300, background: '#ffe4e1' }}>
                    slide 6
                </div>
                <div style={{ width: 300, height: 300, background: '#008080' }}>
                    slide 7
                </div>
                <div style={{ width: 300, height: 300, background: '#ff0000' }}>
                    slide 8
                </div>
                <div style={{ width: 300, height: 300, background: '#e6e6fa' }}>
                    slide 9
                </div>
            </ReactSimplyCarousel>
            <Button
                style={{ 
                    alignSelf: 'center', 
                    marginTop: '23px', 
                    width: 100 
                }} 
                onClick={rollTheReel}>
                <p>Spin</p>
            </Button>
        </div>
    );
}

export default Main;