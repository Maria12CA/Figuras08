 //escenario

 const scene = new THREE.Scene()
 scene.background = new THREE.Color(0xF5DDE8);
 var loader = new THREE.TextureLoader()
/*  scene.fog = new THREE.Fog(0xffffff, 0.01, 10); */
 loader.load('../img/negro.jpg', function(Texture){
    scene.background = Texture
 });
 
 //camara
 
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
 
 //render
 
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize( window.innerWidth, window.innerHeight );
 document.body.appendChild( renderer.domElement );
 
 //geometrias
 const geometry = new THREE.ConeGeometry( 5, 20, 32 );

 const TextureLoader= new THREE.TextureLoader();
const matcap = TextureLoader.load ('./texture/black-and-white-details-of-moon-texture-concept.jpg')

const material13 = new THREE.MeshMatcapMaterial();
material13.matcap = matcap;
material13.flatShading = true;


const mesh = new THREE.Mesh( geometry, material13 );
scene.add( mesh );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ) );
scene.add( line );
 
 
 
 camera.position.z = 40;
 /* mera.position.x = 1;
 camera.position.y = 1;
  */
 
 
 //annimacion
 
 function animate() {
     mesh.rotation.x += 0.01;
     mesh.rotation.y += 0.01;    
     line.rotation.x += 0.01;
     line.rotation.y += 0.01;
     requestAnimationFrame( animate );
     renderer.render( scene, camera );
 }
 animate(); 
 