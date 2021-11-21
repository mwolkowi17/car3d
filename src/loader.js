import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import {scene} from './index'

/*const onProgress = function ( xhr ) {
  if ( xhr.lengthComputable ) {
    var percentComplete = xhr.loaded / xhr.total * 100;
    console.log( Math.round(percentComplete, 2) + '% downloaded' );
  }
};*/
 function Progress(){
   console.log('loading');
   const progressInfo=document.getElementsByClassName('progressInfo')[0];
   progressInfo.style.visibility = 'visible';
   /*progressInfo.className='progressInfo';
   progressInfo.textContent = 'loading';
   progressInfo.style.color = 'white';
   progressInfo.style.backgroundColor='red';*/
  
 }

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
      const progressInfo=document.getElementsByClassName('progressInfo')[0];
      progressInfo.style.visibility = 'hidden';
     
    }, Progress())

   