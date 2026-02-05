import React, { useState, useEffect } from 'react';

import Skin from './Skin';

import rogerio from '@/assets/avatar/rogerio.png';
import malu from '@/assets/avatar/malu.png';
import tobias from '@/assets/avatar/tobias.png';

import '../Perfil.css';

const skinData = [
    { url: rogerio, id: 'avatar1' },
    { url: malu, id: 'avatar2' },
    { url: tobias, id: 'avatar3' }
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
