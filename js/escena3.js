 //escenario

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xAD77FC);
var loader = new THREE.TextureLoader()
/* scene.fog = new THREE.Fog(0xffffff, 0.05, 70); */
loader.load('../img/metal.jpg', function(Texture){
    scene.background = Texture

});

//camara

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias


class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {

		super();

		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}

}

const path = new CustomSinCurve( 10 );
const geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );


const material7 = new THREE.MeshStandardMaterial()
material7.color.set("#F29AA0")
material7.metalness = 1;
material7.roughness = 0;


const ambientalight = new THREE.AmbientLight(0xF29AA0, 8);
scene.add(ambientalight)

const pointlight = new THREE.PointLight(0xF29AA0, 10)
scene.add(pointlight)
pointlight.position.set(5, 5, 5)


const cube = new THREE.Mesh( geometry, material7 );
scene.add( cube );


camera.position.z = 40;
/* mera.position.x = 1;
camera.position.y = 1;
 */


//annimacion

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;    
 
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate(); 
