const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// Función para generar cubos alineados horizontalmente
function generateAlignedCubes() {
    const cubes = [];
    const numCubes = Math.floor(Math.random() * 5) + 1;  // Genera un número aleatorio de cubos entre 1 y 5
    const spacing = 2;  // Espaciado entre los cubos

    for (let i = 0; i < numCubes; i++) {
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x0077ff, wireframe: true } );
        const cube = new THREE.Mesh( geometry, material );

        // Alineamos los cubos horizontalmente con una separación constante
        cube.position.x = i * spacing - ((numCubes - 1) * spacing) / 2;  // Alineación centrada
        cube.position.y = 0;  // Mantener la posición Y en 0
        cube.position.z = 0;  // Mantener la posición Z en 0

        cubes.push(cube);  // Almacena el cubo en el arreglo
        scene.add(cube);    // Añade el cubo a la escena
    }

    return cubes;  // Devuelve el array de cubos
}

const cubes = generateAlignedCubes();  // Llama a la función para generar los cubos alineados

camera.position.z = 10;

function animate() {
    // Rota todos los cubos generados aleatoriamente
    cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });

	
    renderer.render( scene, camera );
}
