import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);
//camera position (x, y, z)
camera.position.set(1000, 1000, 1000);

//lights

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft global light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5,10, 7.5);
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(-5, 5, 5);
scene.add(pointLight);

//Orbit controls 

const Orbit_control = new OrbitControls(camera, renderer.domElement);
Orbit_control.enableDamping = true;
// Orbit_control.target.set(0,0,0);
Orbit_control.update();

// load a 3D model
const loader = new FBXLoader();

loader.load( 'models/Gaming_Pc.fbx', function ( fbx ) {
 // fbx.scale.setScalar(0.5); //Scale the model (Because its huge)
  scene.add( fbx );

}, undefined, function ( error ) {

  console.error( error );

} );


function animate(time) {
  Orbit_control.update();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);