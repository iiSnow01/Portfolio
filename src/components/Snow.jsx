import React from 'react';

const Snow = () => {
    const [snowflakes] = React.useState(() => {
        return Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 4 + 3}s`, // 3s to 7s
            animationDelay: `${Math.random() * 5}s`, // 0s to 5s
            opacity: Math.random() * 0.4 + 0.2, // 0.2 to 0.6
            width: `${Math.random() * 6 + 4}px`, // 4px to 10px
        }));
    });

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 50,
            overflow: 'hidden'
        }} aria-hidden="true">
            <style>
                {`
                @keyframes fall {
                    0% {
                        transform: translateY(-10vh) translateX(0px);
                    }
                    50% {
                        transform: translateY(50vh) translateX(15px);
                    }
                    100% {
                        transform: translateY(110vh) translateX(-15px);
                    }
                }
                .snowflake {
                    position: absolute;
                    top: -10vh;
                    background: #94a3b8; /* Slate gray to be visible on light theme */
                    border-radius: 50%;
                    animation-name: fall;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    filter: blur(1px);
                }
                `}
            </style>
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: flake.left,
                        width: flake.width,
                        height: flake.width,
                        opacity: flake.opacity,
                        animationDuration: flake.animationDuration,
                        animationDelay: flake.animationDelay
                    }}
                />
            ))}
        </div>
    );
};

export default Snow;
