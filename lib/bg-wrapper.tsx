'use client';

import Snowfall from 'react-snowfall';

export default function BgWrapper() {
    return (
        <Snowfall 
            wind={[-0.2, 0.2]}
            speed={[0.5, 2]}
            opacity={[0.1, 0.5]}
            color="#ffffff"
            radius={[0.5, 2]}
            snowflakeCount={20}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -10,
                height: '100vh',
                width: '100vw',
            }}
        />
    )
}