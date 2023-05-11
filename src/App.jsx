import {
  OrbitControls,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import Demon from "./Model/Demon";
import Content from "./components/Content/Content";
import game from "./game.json";

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 10, 0]} intensity={0.2} />
      <PerspectiveCamera theatreKey="Camera" makeDefault />
      <Demon />
    </>
  );
};

const App = () => {
  const sheet = getProject("game", { state: game }).sheet("Scene");
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={1.5}
        maxAzimuthAngle={1}
      />
      <color attach="background" args={["black"]} />
      <fog attach="fog" args={["white", 5, 30]} />
      <ScrollControls pages={5} damping={0.3} distance={0.5}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
        <Scroll html>
          <Content />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default App;
