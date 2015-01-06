var dungeonJson = "[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,3,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,3,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,2,3,0,0,0,0,0,0,0,3,3,0,0,0,1,1,1,1,1,1,1,1,1,1,0,3,3,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,3,0,0,0,0,0,0,0,0,3,3,0,0,1,1,1,1,1,1,1,1,1,1,0,3,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,3,0,0,1,1,1,1,1,0,0,3,3,0,1,1,1,1,1,1,1,1,1,1,0,3,3,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,3,3,0,1,1,1,1,1,0,0,0,3,0,1,1,1,1,1,1,1,1,1,1,0,0,3,3,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,3,0,1,1,1,1,1,0,0,3,3,0,1,1,1,1,1,1,1,1,1,1,0,0,0,3,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,3,0,1,1,1,1,1,2,3,3,0,0,1,1,1,1,1,1,1,1,1,1,0,3,3,3,0],[0,0,0,0,0,3,3,2,1,1,1,1,1,0,0,1,1,1,1,1,1,0,3,3,0,1,1,1,1,1,0,3,0,0,0,1,1,1,1,1,1,1,1,1,1,0,3,0,0,0],[0,0,0,0,3,3,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0,0,1,1,1,1,1,0,3,0,0,0,1,1,1,1,1,1,1,1,1,1,0,3,0,0,0],[0,0,0,0,3,0,0,0,1,1,1,1,1,0,0,3,3,3,3,3,0,0,3,0,0,1,1,1,1,1,0,3,0,0,0,1,1,1,1,1,1,1,1,1,1,0,3,0,0,0],[0,0,3,3,3,0,0,0,1,1,1,1,1,0,3,3,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,3,0,0],[0,0,3,0,0,0,0,0,1,1,1,1,1,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,3,3,3,0,0,0,0,0,0,0,0,3,3,0],[0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0],[0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,1,1,1,1,1,1,1,1,1,0,3,3,3,3,0,3,3,0,0,0,0,0,0,0,0,0,0,0,3,0],[0,3,0,0,0,1,1,1,1,1,1,1,1,0,3,3,0,0,0,0,1,1,1,1,1,1,1,1,1,0,3,0,0,0,0,0,3,0,0,0,1,1,1,1,1,1,1,0,3,0],[0,3,0,0,0,1,1,1,1,1,1,1,1,0,3,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,3,3,0,0,0,0,3,3,3,0,1,1,1,1,1,1,1,0,3,0],[0,3,3,3,0,1,1,1,1,1,1,1,1,0,3,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,3,3,3,0,0,0,0,3,0,1,1,1,1,1,1,1,0,3,0],[0,0,0,3,0,1,1,1,1,1,1,1,1,0,3,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,3,0,1,1,1,1,1,1,1,0,3,0],[0,0,0,3,0,1,1,1,1,1,1,1,1,0,3,3,0,0,0,0,0,3,3,3,0,0,3,3,3,3,0,0,0,0,0,0,3,3,3,2,1,1,1,1,1,1,1,0,3,0],[0,0,3,3,0,1,1,1,1,1,1,1,1,0,0,3,3,3,0,0,0,3,0,3,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,3,0],[0,3,3,0,0,1,1,1,1,1,1,1,1,0,0,0,0,3,0,0,3,3,0,3,0,3,3,0,3,3,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,3,0,0,0,1,1,1,1,1,1,1,1,0,0,0,3,3,3,3,3,0,0,3,3,3,0,0,3,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,3,0,0,0,1,1,1,1,1,1,1,1,2,3,3,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,3,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,0,0,3,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,3,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,0,0,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,3,0],[0,0,0,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,3,3,0,3,0],[0,0,3,3,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,3,0,3,0],[0,3,3,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,3,3,3,0],[0,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,0,0],[0,3,3,3,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,3,0],[0,0,0,0,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,3,3,3,3,0,0,0,3,0,0,0,3,3,3,3,0,0,3,2,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,3,0],[0,0,0,3,0,0,3,3,3,3,3,0,0,3,3,0,0,3,0,0,3,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,0,0],[0,0,0,3,3,0,0,0,0,0,3,0,0,3,0,0,3,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,0,0],[0,0,0,0,3,3,0,0,0,0,3,3,3,3,0,0,3,0,0,0,3,3,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,3,0],[0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,3,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,0,0,3,0,0,0,0,0,3,3,3,0,0,0,0,3,0,3,3,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,0,0,3,0,0,0,0,0,3,0,3,0,0,0,0,3,3,3,0,0,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,0,0,3,3,3,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,3,0],[0,0,0,0,0,0,0,3,3,0,3,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,0,0],[0,0,0,0,0,0,0,0,3,0,3,0,0,3,3,3,0,0,0,0,3,3,3,0,3,3,3,3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0],[0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,3,3,3,3,3,3,0,3,3,3,0,0,3,3,3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]";

/****************************************
 * Scene
 ****************************************/

var width = 1280, height = 720;

var world = new CANNON.World();
world.gravity.set(0, -9.81, 0);
world.broadphase = new CANNON.NaiveBroadphase();

scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 10000);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.shadowMapEnabled = true;
$(".container").append(renderer.domElement);

/****************************************
 * World Objects
 ****************************************/

var world_objects = [];

// physics material
var physicsMaterial = new CANNON.Material("slipperyMaterial");
var physicsContactMaterial = new CANNON.ContactMaterial(
		physicsMaterial,
		physicsMaterial,
		0.4, // friction coefficient
		0.3  // restitution
	);
world.addContactMaterial(physicsContactMaterial);

var add_box = function(options) {
	var halfExtents = new CANNON.Vec3(options['size']['x']/2, options['size']['y']/2, options['size']['z']/2);
	var geometry = new THREE.BoxGeometry(halfExtents.x*2,halfExtents.y*2,halfExtents.z*2);
	var body = new CANNON.RigidBody(options['mass'], new CANNON.Box(halfExtents));
	options['geometry'] = geometry;
	options['body'] = body;
	add_object(options);
}

var add_ball = function(options) {
	var shape = new CANNON.Sphere(options['size']/2);
	var geometry = new THREE.SphereGeometry(shape.radius, options['divisions'], options['divisions']);
	var body = new CANNON.RigidBody(options['mass'], shape);
	options['geometry'] = geometry;
	options['body'] = body;
	add_object(options);
}

var add_object = function(options) {
	var material = new THREE.MeshPhongMaterial({
		color: options['material']['color'],
		perPixel: options['material']['perPixel'],
		specular: options['material']['specular'],
		shininess: options['material']['shininess'],
		map: options['material']['map']
	});

	var mesh = new THREE.Mesh(options['geometry'], material);

	options['world'].add(options['body']);
	options['scene'].add(mesh);
	options['body'].position.set(options['pos']['x'],options['pos']['y'],options['pos']['z']);
	mesh.position.set(options['pos']['x'],options['pos']['y'],options['pos']['z']);

	mesh.castShadow = options['castShadow'];
	world_objects.push({body: options['body'], mesh: mesh});
}

var add_plane = function(options) {
	var shape = new CANNON.Plane();
	var body = new CANNON.RigidBody( 0, shape, physicsMaterial );
	body.quaternion.setFromAxisAngle( new CANNON.Vec3( options['rot']['x'], options['rot']['y'], options['rot']['z'] ), options['rot']['amount'] );
	body.position.set( options['pos']['x'], options['pos']['y'], options['pos']['z'] );
	options['world'].add(body);

	var geometry = new THREE.PlaneGeometry( options['width'], options['height'] );
	geometry.applyMatrix( new THREE.Matrix4().makeRotationAxis( new THREE.Vector3( options['rot']['x'], options['rot']['y'], options['rot']['z'] ), options['rot']['amount'] ) );

	var material = new THREE.MeshPhongMaterial({
		color: options['material']['color'],
		perPixel: options['material']['perPixel'],
		specular: options['material']['specular'],
		shininess: options['material']['shininess'],
		map: options['material']['map']
	});

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( options['pos']['x'], options['pos']['y'], options['pos']['z']);
	mesh.castShadow = options['castShadow'];
	mesh.receiveShadow = options['receiveShadow'];
	options['scene'].add( mesh );
}

// Heavy red box
add_box({
	world: world,
	world_objects: world_objects,
	scene: scene,
	material: { color: 0xff4444, perPixel: true, specular: 0, shininess: 0, map: null },
	size: { x: 1, y: 1, z: 1 },
	mass: 400,
	pos: { x: -2, y: 1, z: 0 },
	castShadow: true
});

// Green ball
add_ball({
	world: world,
	world_objects: world_objects,
	scene: scene,
	material: { color: 0x44ff44, perPixel: true, specular: 0x7777777, shininess: 60, map: null },
	divisions: 24,
	size: 1,
	mass: 100,
	pos: { x: 0, y: 1, z: 0 },
	castShadow: true
});


var dungeon = JSON.parse(dungeonJson);
var dungeonWidth = dungeon[0].length;
var dungeonHeight = dungeon.length;
var dungeonScale = 3.1;
console.log("Dungeon: ("+dungeonWidth+","+dungeonHeight+")");

// Floor
add_plane({
	world: world,
	scene: scene,
	material: { color: 0xbbbbaa, perPixel: true, specular: 0x555555, shininess: 0, map: null },
	width: dungeonWidth * dungeonScale,
	height: dungeonHeight * dungeonScale,
	pos: { x: 0, y: 0, z: 0 },
	rot: { x: 1, y: 0, z: 0, amount: -Math.PI/2 },
	castShadow: false,
	receiveShadow: true
});

var WALL = 0,
	FLOOR = 1,
	DOOR = 2,
	TUNNEL = 3;

for(var y=0; y<dungeonHeight; y++) {
	for(var x=0; x<dungeonWidth; x++) {
		if(dungeon[y][x] == WALL) {
			// if this wall doesn't touch any tunnels or rooms, exclude it so it doesn't slow things down
			if(
				y == 0 || x == 0 ||
				y == dungeonHeight-1 || x == dungeonWidth-1 ||
				dungeon[y][x-1] != WALL ||
				dungeon[y][x+1] != WALL ||
				dungeon[y-1][x] != WALL ||
				dungeon[y+1][x] != WALL
				) {
					add_box({
						world: world,
						world_objects: world_objects,
						scene: scene,
						material: { color: 0x333333, perPixel: false, specular: 0, shininess: 0, map: null },
						size: { x: 1 * dungeonScale, y: 1 * dungeonScale, z: 1 * dungeonScale },
						mass: 0,
						pos: { x: x*dungeonScale - (dungeonWidth*dungeonScale)/2, y: 0, z: y*dungeonScale - (dungeonHeight*dungeonScale)/2 },
						castShadow: false
					});
				}
		} else if(dungeon[y][x] == FLOOR) {

		} else if(dungeon[y][x] == DOOR) {
			
		} else if(dungeon[y][x] == TUNNEL) {
			
		}
	}
}

/****************************************
 * Lighting
 ****************************************/

var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.castShadow = true;
directionalLight.shadowDarkness = 1;
directionalLight.shadowCameraNear = 0.5;
directionalLight.shadowCameraFar = 100;
directionalLight.shadowCameraLeft = -5;
directionalLight.shadowCameraRight = 5;
directionalLight.shadowCameraTop = 5;
directionalLight.shadowCameraBottom = -5;
scene.add(directionalLight);

/****************************************
 * Controls
 ****************************************/

var time = Date.now();

var player = new Player(camera);
scene.add(player.getObject());
world.add(player.getBody());
world.addContactMaterial(player.getContactMaterial());

var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
if (havePointerLock) {
	var element = document.body;

	var pointerlockchange = function ( event ) {
		if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
			player.enabled = true;
			blocker.style.display = 'none';
		} else {
			player.enabled = false;

			blocker.style.display = '-webkit-box';
			blocker.style.display = '-moz-box';
			blocker.style.display = 'box';

			instructions.style.display = '';
		}
	}

	var pointerlockerror = function ( event ) {
		instructions.style.display = '';
	}

	// Hook pointer lock state change events
	document.addEventListener( 'pointerlockchange', pointerlockchange, false );
	document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
	document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

	document.addEventListener( 'pointerlockerror', pointerlockerror, false );
	document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
	document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

	instructions.addEventListener( 'click', function ( event ) {
		instructions.style.display = 'none';

		// Ask the browser to lock the pointer
		element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

		if ( /Firefox/i.test( navigator.userAgent ) ) {
			var fullscreenchange = function ( event ) {
				if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {
					document.removeEventListener( 'fullscreenchange', fullscreenchange );
					document.removeEventListener( 'mozfullscreenchange', fullscreenchange );
					element.requestPointerLock();
				}
			}

			document.addEventListener( 'fullscreenchange', fullscreenchange, false );
			document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

			element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
			element.requestFullscreen();
		} else {
			element.requestPointerLock();
		}
	}, false );
} else {
	instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
}

/****************************************
 * Starting
 ****************************************/

var dt = 1/60;

var render = function() {
	requestAnimationFrame(render);

	world.step(dt);

	world_objects.forEach(function(obj) {
		obj['body'].position.copy(obj['mesh'].position);
		obj['body'].quaternion.copy(obj['mesh'].quaternion);
	});

	player.update(Date.now() - time);

	renderer.render(scene, camera);

	time = Date.now();
};

render();
