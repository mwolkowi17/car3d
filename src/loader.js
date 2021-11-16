import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import {scene} from './index'

export const gltfLoader2 = new GLTFLoader()
    gltfLoader2.load('./scene.gltf', (gltf) => {
      const root = gltf.scene;
      //const anim = gltf.animations;
      root.position.x=-2;
      root.rotation.y=Math.PI;
      scene.add(root);
      //mixer = new THREE.AnimationMixer(root);

      //action = mixer.clipAction( anim[ 0 ] )
      //action.play();
     
     
    })