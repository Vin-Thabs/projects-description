import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// Orbit COntrols
const orbit_controls = new OrbitControls(camera, renderer.domElement);
orbit_controls.target.set(0,1,0);
orbit_controls.update();

//Loading the model
const glbLoader = new GLTFLoader();
  glbLoader.load('scene.gltf', (root) => {
    scene.add(root.scene);
  }, undefined, (error) => {
    console.error("Error Loading GLTF:", error);
  });

// light for shading
const light = new THREE.DirectionalLight(0xffffff, 4);
light.position.set(2, 2, 2);
scene.add(light);


function animate () {
  requestAnimationFrame(animate);
  orbit_controls.update(); // update the controls per frame
  renderer.render(scene, camera);
}
animate();