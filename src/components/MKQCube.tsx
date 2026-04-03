import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Environment } from "@react-three/drei";
import * as THREE from "three";
import mkqLogo from "@/assets/MKQ.png";

const CubeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(mkqLogo, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 16;
      setTexture(tex);
    });
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <RoundedBox ref={meshRef} args={[1.2, 1.2, 1.2]} radius={0.08} smoothness={8}>
      <meshStandardMaterial
        roughness={0.05}
        metalness={0.3}
        map={texture}
        color={texture ? "#ffffff" : "#1a1a2e"}
      />
    </RoundedBox>
  );
};

const MKQCube = () => {
  return (
    <>
    <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] mx-auto mt-8">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 3], fov: 45 }}
            gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
          >
            <Environment preset="studio" />
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[-3, 2, 3]} color="#a855f7" intensity={2} />
            <CubeMesh />
            <OrbitControls
              autoRotate
              autoRotateSpeed={2}
              enableDamping
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
};

export default MKQCube;
