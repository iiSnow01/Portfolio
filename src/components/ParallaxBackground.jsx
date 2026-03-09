import { motion, useScroll, useTransform } from 'framer-motion'
import { useApp } from '../context/AppContext'

const ParallaxBackground = () => {
    const { theme } = useApp()
    const { scrollY } = useScroll()

    // Parallax speeds: Elements move at different rates as user scrolls 
    // y1 moves very fast upwards
    const y1 = useTransform(scrollY, [0, 4000], [0, -1500]);
    // y2 moves moderately upwards
    const y2 = useTransform(scrollY, [0, 4000], [0, -1000]);
    // y3 moves slowly upwards
    const y3 = useTransform(scrollY, [0, 4000], [0, -600]);
    // y4 moves backwards for opposite parallax
    const y4 = useTransform(scrollY, [0, 4000], [0, 400]);

    // Use softer colors for light theme blobs, and deep space feeling for dark
    const isLight = theme === 'light';

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }} aria-hidden="true">
            {/* Abstract Blurred Blobs for deep aesthetic */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: isLight ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.08)',
                    filter: 'blur(100px)',
                    y: y1
                }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    top: '40%',
                    right: '5%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: isLight ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.08)',
                    filter: 'blur(120px)',
                    y: y2
                }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    top: '80%',
                    left: '15%',
                    width: '450px',
                    height: '450px',
                    borderRadius: '50%',
                    background: isLight ? 'rgba(236, 72, 153, 0.12)' : 'rgba(236, 72, 153, 0.06)',
                    filter: 'blur(100px)',
                    y: y3
                }}
            />

            {/* Floating Geometric Particles */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '25%',
                    width: '80px',
                    height: '80px',
                    border: '2px solid var(--accent-primary)',
                    opacity: isLight ? 0.3 : 0.15,
                    borderRadius: '20px',
                    y: y2
                }}
            />

            <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: '10%',
                    width: '40px',
                    height: '40px',
                    border: '3px solid var(--accent-secondary)',
                    opacity: isLight ? 0.4 : 0.2,
                    borderRadius: '50%',
                    y: y1
                }}
            />

            <motion.div
                style={{
                    position: 'absolute',
                    top: '85%',
                    right: '20%',
                    width: '60px',
                    height: '60px',
                    border: '2px dashed var(--text-tertiary)',
                    opacity: isLight ? 0.3 : 0.2,
                    rotate: 45,
                    y: y4
                }}
            />
        </div>
    );
};

export default ParallaxBackground;
