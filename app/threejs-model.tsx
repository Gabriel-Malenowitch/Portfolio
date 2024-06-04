import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/Addons.js";


export function ThreeJsModel() {
    const obj = useLoader(OBJLoader, '../public/pc-obj/pc.obj');

    return (
        <Canvas
            camera={{
                position: [-6, 7, 7],
            }}
        >
        <ambientLight color={"white"} intensity={0.3} />
        <primitive object={obj} />
        </Canvas>
    )
}