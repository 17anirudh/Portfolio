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
            snowflakeCount={45}
            style={{
                position: 'absolute',
                inset: 0,
                zIndex: -10,
            }}
        />
    )
}