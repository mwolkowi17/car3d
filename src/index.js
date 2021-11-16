import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import { light2, light3, light4, light5 } from './direct_light.js';
import {gltfLoader2} from './loader'

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0x000000);

scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);
scene.add(light4);
scene.add(light4.target);
scene.add(light5);



camera.position.z = 8;
camera.position.y = 1.5;

const controls = new OrbitControls( camera, renderer.domElement );


controls.update();

controls.autoRotate=false;
const clock= new THREE.Clock();

const animate = function () {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    
  
    controls.update();
    
};


animate();