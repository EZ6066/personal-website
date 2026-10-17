"use client";
import { Canvas } from "@react-three/fiber";
import { useRef, useState} from "react";
import type { SpotLight } from "three";
import {SpotLightHelper} from "three";
import { PresentationControls, useHelper, useGLTF, Center } from "@react-three/drei";
import { Leva, useControls } from "leva";
import CameraRig from "./CameraRig";

// type ClickPoint = {
//     point: {
//         x: number;
//         y: number;
//         z: number;
//     };
// };

type GuitarProps = {
    onClick: () => void;
}

function Guitar ({onClick}: GuitarProps){
    const guitarModel = useGLTF ("/models/guitar.glb").scene; // Load only the guitar model
    return (
        <Center>
        <primitive 
            object = {guitarModel} 
            scale = {6} 
            onClick = {onClick}
            // onClick = {(event:ClickPoint)=>
            //     console.log(event.point)
            // }//Used to get the coordinates of the click on the guitar
            />
        </Center>
    )
}

function Scene() {
    const progress = useRef<number>(0);
    const SpotLightRef = useRef<SpotLight>(null!);
    const {lightPosition, lightAngle, lightPenumbra, lightIntensity, lightColor} = useControls({
        lightPosition: [0,6,3],
        lightAngle: 0.4,
        lightPenumbra: 0.6,
        lightIntensity: 80,
        lightColor: "#fff4e0",
        
    })
    const [isZoomed, setIsZoomed] = useState(false);

    useHelper(SpotLightRef, SpotLightHelper); // Show the spot light helper

    return (    
        <>
        <ambientLight intensity = {0.05} />
        <spotLight 
            position = {lightPosition}
            angle = {lightAngle}
            penumbra = {lightPenumbra}
            intensity = {lightIntensity}
            color = {lightColor}
            ref = {SpotLightRef} 
            
        />
        <CameraRig
            progress = {progress}
            setIsZoomed = {setIsZoomed}
        />
        <PresentationControls 
            snap enabled = {!isZoomed}
        >
        <Guitar
            onClick = {()=>{
                if (!isZoomed) {
                    progress.current = 1;
                    setIsZoomed(true);
                }
            }}
        />
        </PresentationControls>
        </>
    )
}

export default function GuitarScene() {
    return (
        <>
        <Leva hidden/> {/* Hide the leva panel */}
        <Canvas>
            <Scene />
        </Canvas>
        </>
    )
}