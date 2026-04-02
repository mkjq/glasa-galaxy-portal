import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Environment } from "@react-three/drei";
import * as THREE from "three";

const CubeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#111111";
    ctx.fillRect(0, 0, 512, 512);
    ctx.font = "bold 120px Inter, sans-serif";
    ctx.fillStyle = "#FF00FF";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("MKQ", 256, 256);
    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <RoundedBox ref={meshRef} args={[1, 1, 1]} radius={0.1} smoothness={7}>
      <meshStandardMaterial roughness={0} map={texture} />
    </RoundedBox>
  );
};

const MKQCube = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Environment preset="studio" />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <CubeMesh />
        <OrbitControls autoRotate enableDamping enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default MKQCube;
