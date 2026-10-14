"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState} from "react";
import type { Mesh, SpotLight } from "three";
import {SpotLightHelper} from "three";
import { OrbitControls, useHelper, useGLTF, Center } from "@react-three/drei";
import { Leva,useControls } from "leva";

function Guitar (){
    const guitarModel = useGLTF ("/models/guitar.glb").scene; // Load only the guitar model
    return (
        <Center>
        <primitive object = {guitarModel} scale = {5} />
        </Center>
    )
}

function Scene() {
    const SpotLightRef = useRef<SpotLight>(null!);
    const {lightPosition, lightAngle, lightPenumbra, lightIntensity, lightColor} = useControls({
        lightPosition: [0,6,3],
        lightAngle: 0.35,
        lightPenumbra: 0.6,
        lightIntensity: 60,
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
        <Guitar/>
        <OrbitControls />
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