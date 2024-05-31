import React from "react"
import './Styles/MainStyle.css'
import ReactSimplyCarousel from 'react-simply-carousel';
import { Button } from "antd";

const Main: React.FC = () => {
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    const rollTheReel = () => {
        const random = Math.floor(Math.random() * 24);
        setActiveSlideIndex((x) => (x + random) % 18);
    };
    return (
        <div style={{
            display: 'flex',
            gap: 20,
            flexDirection: 'column',
        }}>
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
                <div style={{ width: 300, height: 300, background: '#ff80ed' }}>
                    slide 0
                </div>
                <div style={{ width: 300, height: 300, background: '#065535' }}>
                    slide 1
                </div>
                <div style={{ width: 300, height: 300, background: '#1d1e1e' }}>
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
                <div style={{ width: 300, height: 300, background: '#ff80ed' }}>
                    slide 0
                </div>
                <div style={{ width: 300, height: 300, background: '#065535' }}>
                    slide 1
                </div>
                <div style={{ width: 300, height: 300, background: '#1d1e1e' }}>
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
            <Button className="roll-btn"
            type="text"
                style={{ 
                    alignSelf: 'center', 
                    width: 200,
                }} 
                onClick={rollTheReel}>
                <p>Spin</p>
            </Button>
        </div>
    );
}

export default Main;