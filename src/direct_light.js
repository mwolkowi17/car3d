import * as THREE from 'three';

const color = 0xFFFFFF;
const intensity = 1.5;
export const light2 = new THREE.DirectionalLight(color, intensity);
light2.position.set(-5,- 10, 10);
light2.target.position.set(0, 0, 0);

export const light3 = new THREE.DirectionalLight(color, intensity);

light3.position.set(-3,10,4);
light3.target.position.set(0,0,0);

export const light4 = new THREE.DirectionalLight(color, intensity)

light4.position.set(7,5,-10);
light4.target.position.set(0,0,0);

export const light5 = new THREE.AmbientLight(color,3);

