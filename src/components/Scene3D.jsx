import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

function FloatingIcon({ position, speed = 1, children }) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.1 * speed;
    ref.current.rotation.y += delta * 0.15 * speed;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
  });
  return <group ref={ref} position={position}>{children}</group>;
}

function mat(color) {
  return <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.3} metalness={0.4} />;
}

function CodeBrackets({ color }) {
  return (
    <group scale={0.8}>
      <mesh position={[-0.4, 0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.6, 0.1, 0.1]} />
        {mat(color)}
      </mesh>
      <mesh position={[-0.4, -0.3, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.6, 0.1, 0.1]} />
        {mat(color)}
      </mesh>
      <mesh rotation={[0, 0, -Math.PI / 7]}>
        <boxGeometry args={[0.12, 1, 0.1]} />
        {mat(color)}
      </mesh>
      <mesh position={[0.4, 0.3, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.6, 0.1, 0.1]} />
        {mat(color)}
      </mesh>
      <mesh position={[0.4, -0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.6, 0.1, 0.1]} />
        {mat(color)}
      </mesh>
    </group>
  );
}

function Gear({ color }) {
  const teeth = Array.from({ length: 8 });
  return (
    <group scale={0.65}>
      <mesh>
        <cylinderGeometry args={[0.55, 0.55, 0.25, 16]} />
        {mat(color)}
      </mesh>
      {teeth.map((_, i) => {
        const angle = (i / teeth.length) * Math.PI * 2;
        const x = Math.cos(angle) * 0.65;
        const z = Math.sin(angle) * 0.65;
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <boxGeometry args={[0.18, 0.25, 0.15]} />
            {mat(color)}
          </mesh>
        );
      })}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.3, 12]} />
        {mat(color)}
      </mesh>
    </group>
  );
}

function TerminalIcon({ color }) {
  return (
    <group scale={0.75}>
      <mesh>
        <boxGeometry args={[1.2, 0.8, 0.1]} />
        {mat(color)}
      </mesh>
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[0.25, 0.15, 0.1]} />
        {mat(color)}
      </mesh>
      <mesh position={[0, -0.72, 0]}>
        <boxGeometry args={[0.6, 0.08, 0.3]} />
        {mat(color)}
      </mesh>
    </group>
  );
}

function Crystal({ color }) {
  return (
    <mesh scale={0.6}>
      <octahedronGeometry args={[0.7, 0]} />
      {mat(color)}
    </mesh>
  );
}

function ScrollRig({ children }) {
  const group = useRef();
  const scrollY = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => { scrollY.current = window.scrollY; };
    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = scrollY.current * 0.0006;
      group.current.position.y = scrollY.current * 0.0015;
      group.current.rotation.x += (mouse.current.y * 0.15 - group.current.rotation.x) * 0.03;
      group.current.rotation.z += (-mouse.current.x * 0.15 - group.current.rotation.z) * 0.03;
    }
  });

  return <group ref={group}>{children}</group>;
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#E9C46A" />
        <pointLight position={[-5, -3, 3]} intensity={1} color="#B565D9" />
        <pointLight position={[0, 5, -5]} intensity={0.8} color="#5FB8B0" />
        <ScrollRig>
          <FloatingIcon position={[-2.6, 1.5, -2]} speed={0.6}>
            <CodeBrackets color="#E9C46A" />
          </FloatingIcon>
          <FloatingIcon position={[2.8, -1, -3]} speed={0.5}>
            <Gear color="#5FB8B0" />
          </FloatingIcon>
          <FloatingIcon position={[1.5, 2.3, -4]} speed={0.7}>
            <TerminalIcon color="#EF6F6C" />
          </FloatingIcon>
          <FloatingIcon position={[-2, -2.2, -3]} speed={0.9}>
            <Gear color="#B565D9" />
          </FloatingIcon>
          <FloatingIcon position={[3.2, 2, -5]} speed={0.4}>
            <Crystal color="#B565D9" />
          </FloatingIcon>
          <FloatingIcon position={[-3.3, -0.5, -4]} speed={0.6}>
            <Crystal color="#E9C46A" />
          </FloatingIcon>
        </ScrollRig>
      </Canvas>
    </div>
  );
}