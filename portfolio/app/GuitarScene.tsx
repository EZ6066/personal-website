"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState} from "react";
import type { Mesh, SpotLight } from "three";
import {SpotLightHelper} from "three";
import { PresentationControls, useHelper, useGLTF, Center } from "@react-three/drei";
import { Leva,useControls } from "leva";
import CameraRig from "./CameraRig";


type ClickPoint = {
    point: {
        x: number;
        y: number;
        z: number;
    };
};
function Guitar (){
    const guitarModel = useGLTF ("/models/guitar.glb").scene; // Load only the guitar model
    return (
        <Center>
        <primitive 
            object = {guitarModel} 
            scale = {6} 
            onClick = {(event:ClickPoint)=>
                console.log(event.point)
            } //Used to get the coordinates of the click on the guitar
            />
        </Center>
    )
}

function Scene() {
    const SpotLightRef = useRef<SpotLight>(null!);
    const {lightPosition, lightAngle, lightPenumbra, lightIntensity, lightColor} = useControls({
        lightPosition: [0,6,3],
        lightAngle: 0.4,
        lightPenumbra: 0.6,
        lightIntensity: 80,
        lightColor: "#fff4e0",
        
    })

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
        <CameraRig />
        <PresentationControls>
        <Guitar/>
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