import React from "react"
import './Styles/SlotListStyle.css'
interface DataType {
    key: string;
    name: string;
    image: string;
}
const data: DataType[] = [  
    {
        key: '1',
        name: 'John Brown',
        image: '',
    },
    {
        key: '2',
        name: 'Jim Green',
        image: '',
    },
    {
        key: '3',
        name: 'Joe Black',
        image: ''
    },
];
const Slots: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
        }}>
            {data.map((item) => (
                <div key={item.key} className="slot-games-style">
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Slots;