import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  ContactShadows,
  Sparkles,
} from "@react-three/drei";

import { Suspense, useEffect, useMemo, useRef } from "react";

function HeroSphere() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!ref.current) return;

    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.08;
    ref.current.position.y = Math.sin(t) * 0.08;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.2, 32]} />

        <MeshTransmissionMaterial
          backside
          samples={12}
          thickness={0.5}
          roughness={0.08}
          transmission={1}
          ior={1.35}
          chromaticAberration={0.06}
          anisotropy={0.2}
          distortion={0.18}
          distortionScale={0.25}
          temporalDistortion={0.15}
          clearcoat={1}
          attenuationColor="#7C83FF"
          attenuationDistance={0.5}
        />
      </mesh>
    </Float>
  );
}

function Crystal({ position, color }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

    ref.current.rotation.x += 0.004;
    ref.current.rotation.y += 0.003;

    ref.current.position.y =
      position[1] + Math.sin(t * 1.8 + position[0]) * 0.12;
  });

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.18]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        roughness={0.15}
        metalness={0.4}
      />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight position={[4, 5, 2]} intensity={2} />

      <pointLight
        position={[3, 2, 2]}
        intensity={18}
        color="#7C83FF"
      />

      <pointLight
        position={[-3, -2, 1]}
        intensity={14}
        color="#A855F7"
      />

      <spotLight
        position={[0, 5, 5]}
        intensity={20}
        angle={0.35}
        penumbra={1}
      />
    </>
  );
}

function MouseRig({ children }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const x = state.mouse.x * 0.45;
    const y = state.mouse.y * 0.25;

    group.current.rotation.y +=
      (x - group.current.rotation.y) * 0.05;

    group.current.rotation.x +=
      (-y - group.current.rotation.x) * 0.05;
  });

  return <group ref={group}>{children}</group>;
}

function ScrollRig({ children }) {
  const group = useRef();

  const scroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scroll.current =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.y =
      scroll.current * Math.PI * 1.5;

    group.current.position.y =
      -scroll.current * 0.8;

    group.current.rotation.z =
      scroll.current * 0.25;
  });

  return <group ref={group}>{children}</group>;
}

function FloatingCrystals() {
  const crystals = useMemo(
    () => [
      {
        position: [2, 1.2, -1],
        color: "#7C83FF",
      },
      {
        position: [-2, 1.5, -0.5],
        color: "#A855F7",
      },
      {
        position: [1.7, -1.5, 0.2],
        color: "#60A5FA",
      },
      {
        position: [-1.5, -1.2, -1.3],
        color: "#8B5CF6",
      },
      {
        position: [0, 2.2, -2],
        color: "#C084FC",
      },
    ],
    []
  );

  return (
    <>
      {crystals.map((item, index) => (
        <Crystal
          key={index}
          position={item.position}
          color={item.color}
        />
      ))}
    </>
  );
}

function Effects() {
  return (
    <>
      <Environment preset="city" />

      <Sparkles
        count={90}
        scale={10}
        size={2}
        speed={0.3}
      />

      <ContactShadows
        opacity={0.28}
        blur={2.8}
        scale={12}
        far={5}
        resolution={1024}
        position={[0, -1.8, 0]}
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Lights />

          <Effects />

          <MouseRig>
            <ScrollRig>
              <HeroSphere />

              <FloatingCrystals />
            </ScrollRig>
          </MouseRig>
        </Suspense>
      </Canvas>
    </div>
  );
}