import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import {scene} from './index'


 function Progress(){
   console.log('loading');
   const progressInfo=document.getElementsByClassName('progressInfo')[0];
   progressInfo.style.visibility = 'visible';
 }

export const gltfLoader2 = new GLTFLoader()
    gltfLoader2.load('./scene.gltf', (gltf) => {
      const root = gltf.scene;
     
      root.position.x=-2;
      root.rotation.y=Math.PI;
      scene.add(root);
      
      const progressInfo=document.getElementsByClassName('progressInfo')[0];
      progressInfo.style.visibility = 'hidden';
     
    }, Progress())

   