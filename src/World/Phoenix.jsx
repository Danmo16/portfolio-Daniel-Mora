import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Phoenix = () => {
    const phoenixRef = useRef();
    const phoenixModel = useGLTF('/assets/models/phoenix/scene.gltf')
    const {animations} = phoenixModel;

    const {actions} = useAnimations(animations, phoenixRef)
    console.log(actions);

    useEffect(() => {
        const action = actions["Take 001"]
        action.play()
    }, [])

    return(
        <mesh ref={phoenixRef} position-x={4} position-y={-2} rotation-y={7} rotation-x={-0.5} scale={0.005}>
            <primitive object={phoenixModel.scene}/>
        </mesh>
    )
};

export default Phoenix;
useGLTF.preload("/assets/models/phoenix/scene.gltf");