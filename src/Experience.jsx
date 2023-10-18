import Phoenix from "./World/Phoenix";
import { Tree } from "./World/Tree";

const Experience = () => {

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Phoenix />
            <Tree position={[4, -11, 0]} scale={0.1}/>
            </>
    )
}

export default Experience;
