 //escenario

 const scene = new THREE.Scene()
 scene.background = new THREE.Color("rgb(250, 128, 114)");
 var loader = new THREE.TextureLoader()
 scene.fog = new THREE.Fog(0xF5DDE8, 0.1, 20);
 loader.load('../img/2.jpg', function(Texture){
     scene.background = Texture
     
 });
 
 
 //camara
 
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
 
 //render
 
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize( window.innerWidth, window.innerHeight );
 document.body.appendChild( renderer.domElement );
 
 //geometrias
 //const material = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
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

const geometry = new THREE.SphereGeometry( 15, 32, 16 );

 
/*  const TextureLoader= new THREE.TextureLoader();
 const matcap = TextureLoader.load ('./texture/tet.jpg') */
 
 const material13 = new THREE.MeshNormalMaterial();
 material13.flatShading = true;
 
 
 const mesh = new THREE.Mesh( geometry, material13 );
 scene.add( mesh );
 
 const edges = new THREE.EdgesGeometry( geometry );
 const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
 scene.add( line );
 
 
 
 camera.position.z = 40;
 /* camera.position.x = 1;
 camera.position.y = 1; */
 
 
 
 //annimacion
 
  function animate() {
     mesh.rotation.y += 0.01;
     mesh.rotation.x += 0.01;
     
 
     line.rotation.y += 0.01;
     line.rotation.x += 0.01;
         
     requestAnimationFrame( animate );
     renderer.render( scene, camera );
 }
 animate(); 