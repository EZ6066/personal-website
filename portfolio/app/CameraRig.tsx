"use client";
import { useRef, useEffect } from "react";
import type { RefObject } from "react";
import { MathUtils, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

const OVERVIEW_POSITION = new Vector3(0, 0, 5);
const BODY_POSITION = new Vector3(0, -1.54, 0.5);
const NECK_POSITION = new Vector3(0, 2.14, 0.5);

type CameraRigProps = {
    progress: RefObject<number>;
    setIsZoomed: (isZoomed: boolean) => void;
}

function ScrollControls({progress, setIsZoomed}: CameraRigProps) {

    const smoothProgress = useRef<number>(0);

    useEffect(()=>{
        const onWheel = (event:WheelEvent)=>{ // Controls the scrolling up and down
            const step = progress.current >= 1? 0.01: 0.02;

            if (event.deltaY > 0){
                progress.current += step;
            } else {
                progress.current -= step;
            }
            progress.current = MathUtils.clamp(progress.current, 0, 2);
            setIsZoomed(progress.current >= 0.3);
        };

        window.addEventListener("wheel", onWheel);
        return () =>{
            window.removeEventListener("wheel", onWheel);
        };
    },[progress, setIsZoomed]);

    useFrame((state, delta)=>{
        smoothProgress.current = MathUtils.damp(smoothProgress.current, progress.current, 2, delta);
        if (smoothProgress.current >= 1){ // Controls the scrolling up and down
            state.camera.position.lerpVectors(BODY_POSITION, NECK_POSITION, smoothProgress.current - 1);
        }
        else{ // Controls the zooming in and out
            state.camera.position.lerpVectors(OVERVIEW_POSITION, BODY_POSITION, smoothProgress.current);
        }
    })

    return (
        null
    )
}

export default function CameraRig({progress, setIsZoomed}: CameraRigProps) {
    return (
        <ScrollControls progress = {progress} setIsZoomed = {setIsZoomed}/>
    )
}