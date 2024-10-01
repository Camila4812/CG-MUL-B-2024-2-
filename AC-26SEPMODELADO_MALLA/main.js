import * as THREE from 'three';

// Configuración básica de la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//textura
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('textura.jpg'); // Ruta a la imagen de textura

// Crear un material con la textura cargada
const materialConTextura = new THREE.MeshBasicMaterial({ map: texture });

// Crear un cubo
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Verde
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Crear una esfera


const geometry1 = new THREE.SphereGeometry(1, 32, 32); // Radio, segmentos en ancho, segmentos en alto
const material1 = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true }); // Material básico con wireframe
const sphere = new THREE.Mesh(geometry1, material1);
sphere.position.x = 3;
scene.add(sphere);

// Crear un toro (dona)
const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
//const torusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Azul
const torus = new THREE.Mesh(torusGeometry, materialConTextura);
torus.position.x = -3; // Colocar el toro un poco a la izquierda del cubo
scene.add(torus);

// Posicionar la cámara
camera.position.z = 10;

// Velocidades aleatorias de rotación y movimiento
const randomValues = () => (Math.random() - 0.5) * 0.1; // Valores aleatorios entre -0.05 y 0.05

const cubeSpeed = { rotationX: randomValues(), rotationY: randomValues(), moveX: randomValues(), moveY: randomValues() };
const sphereSpeed = { rotationX: randomValues(), rotationY: randomValues(), moveX: randomValues(), moveY: randomValues() };
const torusSpeed = { rotationX: randomValues(), rotationY: randomValues(), moveX: randomValues(), moveY: randomValues() };

// Función de animación
function animate() {
    requestAnimationFrame(animate);

    // Rotación y movimiento del cubo
    cube.rotation.x += cubeSpeed.rotationX;
    cube.rotation.y += cubeSpeed.rotationY;
    cube.position.x += cubeSpeed.moveX;
    cube.position.y += cubeSpeed.moveY;

    // Rotación y movimiento de la esfera
    sphere.rotation.x += sphereSpeed.rotationX;
    sphere.rotation.y += sphereSpeed.rotationY;
    sphere.position.x += sphereSpeed.moveX;
    sphere.position.y += sphereSpeed.moveY;

    // Rotación y movimiento del toro
    torus.rotation.x += torusSpeed.rotationX;
    torus.rotation.y += torusSpeed.rotationY;
    torus.position.x += torusSpeed.moveX;
    torus.position.y += torusSpeed.moveY;

    // Renderizar la escena
    renderer.render(scene, camera);
}

// Iniciar la animación
animate();
