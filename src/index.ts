import * as THREE from 'three';
import './index.css';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

cube.position.z = -5;
cube.rotation.x = 10;
cube.rotation.y = 5;

renderer.render(scene, camera);

const animate = () => {
  cube.rotation.x += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
