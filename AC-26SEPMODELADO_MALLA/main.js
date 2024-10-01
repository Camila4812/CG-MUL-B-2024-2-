import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const geometry1 = new THREE.SphereGeometry(1, 32, 32); // Radio, segmentos en ancho, segmentos en alto
const material1 = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true }); // Material básico con wireframe
const sphere = new THREE.Mesh(geometry1, material1);
camera.position.z = 5;
scene.add(sphere);

// Cambiar la posición de la esfera
sphere.position.x = 2;  // Mover la esfera 2 unidades en el eje X
sphere.position.y = 1;  // Mover la esfera 1 unidad en el eje Y
sphere.position.z = -3; // Mover la esfera 3 unidades hacia atrás en el eje Z

function animate() {

	sphere.rotation.x += 0.01;
    sphere.rotation.y+=0.01;
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene,camera);

}