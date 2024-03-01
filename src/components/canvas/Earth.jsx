import {Suspense, useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader';


const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={2.15} groundColor="black"/>
            <pointLight intensity={15}/>
            <spotLight
                position={[-20, 0, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={earth.scene}
                scale={2.5}/>
                position-y={0}
                rotation-y={ Math.PI / 2 }
        </mesh>
    )
}

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{preserveDrawingBuffer: true}}
            camera={{
                position: [-4, 3, 6],
                fov: 45,
                near: 0.1,
                far: 200
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate={true}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    )
}
export default EarthCanvas;