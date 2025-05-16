"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

const ThreeScene = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive 3D Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore this interactive 3D sphere that showcases my passion for creating 
            engaging web experiences. Built with Three.js and React Three Fiber.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[500px] w-full rounded-2xl overflow-hidden border border-white/10"
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 1, 1]} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="#4B0082"
                  attach="material"
                  distort={0.5}
                  speed={1.5}
                  roughness={0}
                />
              </Sphere>
              <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
                Three.js
              </span>
              <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
                React Three Fiber
              </span>
              <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
                WebGL
              </span>
              <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
                Interactive 3D
              </span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Drag to rotate • Hover to interact • Experience the power of modern web technologies
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThreeScene; 