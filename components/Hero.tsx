'use client'

import { useRef, useMemo, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Sparkles as Sparkles3D, Points, PointMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ScrambleText from '@/components/ui/scramble-text'
import Link from 'next/link'
import * as THREE from 'three'

/* ── Shader Background ── */
// Enhanced shader for deeper, more "void-like" feel
function ShaderPlane() {
  const mesh = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#00F0FF') },
      uColor2: { value: new THREE.Color('#FF006E') },
      uColor3: { value: new THREE.Color('#050510') }, // Darker base
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  )

  useFrame((state) => {
    if (mesh.current) {
      const material = mesh.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.elapsedTime * 0.2
      material.uniforms.uMouse.value.lerp(new THREE.Vector2(mouse.x, mouse.y), 0.05)
    }
  })

  return (
    <mesh ref={mesh} scale={[20, 12, 1]} position={[0, 0, -4]}>
      <planeGeometry args={[1, 1, 128, 128]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uMouse;
          void main() {
            vUv = uv;
            vec3 pos = position;
            float dist = distance(uv, uMouse * 0.5 + 0.5);
            float wave = sin(pos.x * 1.5 + uTime) * 0.2 + cos(pos.y * 1.5 + uTime * 0.5) * 0.2;
            pos.z += wave + (1.0 - smoothstep(0.0, 0.4, dist)) * 0.5;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform vec3 uColor3;
          varying vec2 vUv;
          
          void main() {
            vec2 uv = vUv;
            // More complex noise pattern
            float n1 = sin(uv.x * 5.0 + uTime * 0.5) * cos(uv.y * 4.0 - uTime * 0.2);
            float n2 = cos(uv.x * 8.0 - uTime * 0.3) * sin(uv.y * 8.0 + uTime * 0.1);
            float noise = n1 * 0.5 + n2 * 0.5;
            
            vec3 color = mix(uColor3, uColor1, smoothstep(-0.8, 0.8, n1) * 0.15);
            color = mix(color, uColor2, smoothstep(-0.8, 0.8, n2) * 0.15);
            
            // Vignette
            float dist = distance(uv, vec2(0.5));
            color *= 1.0 - dist * 0.8;
            
            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  )
}

/* ── "Neural Mesh" Geometry ── */
function NeuralMesh() {
  const points = useRef<THREE.Points>(null)

  // Generate random points in a sphere shell
  const particlesPosition = useMemo(() => {
    const count = 2000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const r = 2.5 + Math.random() * 0.5 // Shell

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }

    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group position={[2, 0, 0]} rotation={[0, 0, 0.2]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Points ref={points} positions={particlesPosition} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#00F0FF"
            size={0.03}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.6}
          />
        </Points>
        {/* Core Node */}
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.1} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshBasicMaterial color="#FFFFFF" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
    </group>
  )
}

/* ── Hero Content ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden flex items-center">
      {/* Three.js Background - Touch Action None to prevent scroll locking on mobile if interactive */}
      <div className="absolute inset-0 z-0 touch-none pointer-events-none md:pointer-events-auto">
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            dpr={[1, 1.5]} // Optimize for pixel ratio
            gl={{ powerPreference: 'high-performance', preserveDrawingBuffer: false, antialias: false }}
          >
            <ShaderPlane />
            <NeuralMesh />

            {/* Ambient Particles */}
            <Sparkles3D
              count={60}
              scale={12}
              size={3}
              speed={0.2}
              opacity={0.4}
              color="#FF006E"
            />
            <Sparkles3D
              count={40}
              scale={10}
              size={2}
              speed={0.5}
              opacity={0.3}
              color="#FFFFFF"
            />

            <ambientLight intensity={2} />
          </Canvas>
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
      <div className="noise-overlay z-0 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-32 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div variants={itemVariants}>
              <Badge variant="brutal" className="mb-6 gap-2 w-fit">
                <Sparkles className="h-3.5 w-3.5" />
                ENTERPRISE GENAI TRANSFORMATION
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl xl:text-display-xl"
            >
              <span className="text-foreground block">REIMAGINE</span>
              <span className="gradient-text block">ENTERPRISE</span>
              <span className="text-foreground block">GROWTH WITH</span>
              <span className="text-brutal-cyan text-glow-cyan block">
                <ScrambleText text="GENAI" scrambleDuration={2000} />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Optylize helps growth-stage companies move from GenAI strategy to
              production outcomes with hands-on execution, secure architecture,
              and measurable business value.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="brutal" size="xl" className="w-full sm:w-auto gap-2 text-base">
                  REQUEST A DEMO
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button variant="brutal-outline" size="xl" className="w-full sm:w-auto gap-2 text-base">
                  EXPLORE SERVICES
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats Card - Hidden on very small screens if needed, or stacked */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* 3D element placeholder area for mobile layout visualization */}
            <div className="lg:hidden h-64 w-full" />

            <div className="brutal-card bg-card/80 backdrop-blur-md p-6 md:p-8 animate-in fade-in zoom-in duration-1000 slide-in-from-right-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brutal-cyan">
                PROVEN RESULTS
              </p>
              <h2 className="mt-3 text-2xl font-extrabold uppercase text-foreground">
                STRATEGY → PRODUCTION
              </h2>
              <div className="mt-7 space-y-4">
                {[
                  { label: 'Enterprise Deployments', value: '50+' },
                  { label: 'Client Retention', value: '96%' },
                  { label: 'Avg. ROI Delivered', value: '340%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between border-[2px] border-brutal-cyan/30 bg-brutal-cyan/5 px-4 py-3"
                  >
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-lg font-extrabold text-brutal-cyan">{stat.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-brutal-cyan" />
                High-impact roadmap delivered in the first two weeks.
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
