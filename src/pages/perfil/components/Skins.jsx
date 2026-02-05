import React, { useState, useEffect } from 'react';

import Skin from './Skin';

import Avatar1 from '@/assets/avatar/Rogerio_avatar.png';
import Avatar2 from '@/assets/avatar/Malu_avatar.png';
import Avatar3 from '@/assets/avatar/Tobias_avatar.png';

import '../Perfil.css';

const skinData = [
    { url: Avatar1, id: 'avatar1' },
    { url: Avatar2, id: 'avatar2' },
    { url: Avatar3, id: 'avatar3' }
];

export default function Conquistas() {
    const [selectedSkin, setSelectedSkin] = useState(null);

    useEffect(() => {
        const storedSkin = localStorage.getItem('selectedSkin');
        if (storedSkin) {
            setSelectedSkin(storedSkin);
        }
    }, []);

    const handleSkinClick = (skinId) => {
        setSelectedSkin(skinId);
        localStorage.setItem('selectedSkin', skinId);
        window.location.reload(); // Recarrega a página
    };

    return (
        <ul className='skinScroll'>
            {skinData.map((item) => (
                <li className={selectedSkin === item.id ? "selecionado" : ''} key={item.id} onClick={() => handleSkinClick(item.id)}>
                    <Skin url={item.url} />
                    {/* {selectedSkin === item.id && <span>Selecionado</span>} */}
                </li>
            ))}
        </ul>
    );
}
