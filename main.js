import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, //field view
    window.innerWidth / window.innerHeight,//aspect ratio
    0.1, //near panes
    1000 // far panes
);

//camera position(x,y,z)
camera.position.set(0,2,5);

// 5 is the length of the axis
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//grid helper(x,y) grid dimetions,
const gridHelper = new THREE.GridHelper(10,50);
scene.add(gridHelper);

//material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(geometry, material);
scene.add(box);

function animate(){
    box.rotation.x += 0.01;
    box.rotation.y +=   0.01;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate)