import { OrbitControls } from "@react-three/drei";
import Phoenix from "./World/Phoenix";
import { Tree } from "./World/Tree";
import { WoodenFence } from "./World/WoodenFence";
import Lights from "./World/Lights";
import Environments from "./World/Environment";
import { Perf } from "r3f-perf";
import Sign from "./World/Sign";
import WelcomeText from "./World/WelcomeText";

const Experience = () => {

    return (
        <>
            <Lights/>
            <Perf />
            <OrbitControls target={[0, 1, 0.5]}/>
            <Environments />
            <Phoenix />
            <Sign position={[0, -2, 0]}>
                <WelcomeText />
            </Sign>
            <Tree position={[1, -2, 2]} scale={0.02}/>
            <WoodenFence position={[1.3, -2, 1]}/>
            <WoodenFence position={[-1.3, -2, 1]}/>
            <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow>
                <planeGeometry attach="geometry" args={[12, 12]} />
                <meshStandardMaterial attach="material" color="green" />
            </mesh>
        </>
    )
}

export default Experience;
