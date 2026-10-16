"use client";
import { useRef, useEffect } from "react";
import { MathUtils, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

const OVERVIEW_POSITION = new Vector3(0, 0, 5);
const BODY_POSITION = new Vector3(0, -1.54, 0.5);

function ScrollControls() {

    const progress = useRef<number>(0);
    const smoothProgress = useRef<number>(0);

    useEffect(()=>{
        const onWheel = (event:WheelEvent)=>{
            if (event.deltaY > 0){
                progress.current += 0.02;
            } else {
                progress.current -= 0.02;
            }
            progress.current = MathUtils.clamp(progress.current, 0, 1);
            //console.log(progress.current);
        };
        window.addEventListener("wheel", onWheel);
        return () =>{
            window.removeEventListener("wheel", onWheel);
        };
    },[]);

    useFrame((state, delta)=>{
        smoothProgress.current = MathUtils.damp(smoothProgress.current, progress.current, 4, delta);
        state.camera.position.lerpVectors(OVERVIEW_POSITION, BODY_POSITION, smoothProgress.current);
        
    })

    return (
        null
    )
}

export default function CameraRig() {
    return (
        <ScrollControls />
    )
}