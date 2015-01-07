var dungeonJson = "[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,3,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,3,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,2,3,0,0,0,0,0,0,0,3,3,0,0,0,1,1,1,1,1,1,1,1,1,1,0,3,3,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,3,0,0,0,0,0,0,0,0,3,3,0,0,1,1,1,1,1,1,1,1,1,1,0,3,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,3,0,0,1,1,1,1,1,0,0,3,3,0,1,1,1,1,1,1,1,1,1,1,0,3,3,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,3,3,0,1,1,1,1,1,0,0,0,3,0,1,1,1,1,1,1,1,1,1,1,0,0,3,3,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,3,0,1,1,1,1,1,0,0,3,3,0,1,1,1,1,1,1,1,1,1,1,0,0,0,3,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,3,0,1,1,1,1,1,2,3,3,0,0,1,1,1,1,1,1,1,1,1,1,0,3,3,3,0],[0,0,0,0,0,3,3,2,1,1,1,1,1,0,0,1,1,1,1,1,1,0,3,3,0,1,1,1,1,1,0,3,0,0,0,1,1,1,1,1,1,1,1,1,1,0,3,0,0,0],[0,0,0,0,3,3,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0,0,1,1,1,1,1,0,3,0,0,0,1,1,1,1,1,1,1,1,1,1,0,3,0,0,0],[0,0,0,0,3,0,0,0,1,1,1,1,1,0,0,3,3,3,3,3,0,0,3,0,0,1,1,1,1,1,0,3,0,0,0,1,1,1,1,1,1,1,1,1,1,0,3,0,0,0],[0,0,3,3,3,0,0,0,1,1,1,1,1,0,3,3,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,3,0,0],[0,0,3,0,0,0,0,0,1,1,1,1,1,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,3,3,3,0,0,0,0,0,0,0,0,3,3,0],[0,0,3,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0],[0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,1,1,1,1,1,1,1,1,1,0,3,3,3,3,0,3,3,0,0,0,0,0,0,0,0,0,0,0,3,0],[0,3,0,0,0,1,1,1,1,1,1,1,1,0,3,3,0,0,0,0,1,1,1,1,1,1,1,1,1,0,3,0,0,0,0,0,3,0,0,0,1,1,1,1,1,1,1,0,3,0],[0,3,0,0,0,1,1,1,1,1,1,1,1,0,3,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,3,3,0,0,0,0,3,3,3,0,1,1,1,1,1,1,1,0,3,0],[0,3,3,3,0,1,1,1,1,1,1,1,1,0,3,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,3,3,3,0,0,0,0,3,0,1,1,1,1,1,1,1,0,3,0],[0,0,0,3,0,1,1,1,1,1,1,1,1,0,3,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,3,0,1,1,1,1,1,1,1,0,3,0],[0,0,0,3,0,1,1,1,1,1,1,1,1,0,3,3,0,0,0,0,0,3,3,3,0,0,3,3,3,3,0,0,0,0,0,0,3,3,3,2,1,1,1,1,1,1,1,0,3,0],[0,0,3,3,0,1,1,1,1,1,1,1,1,0,0,3,3,3,0,0,0,3,0,3,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,3,0],[0,3,3,0,0,1,1,1,1,1,1,1,1,0,0,0,0,3,0,0,3,3,0,3,0,3,3,0,3,3,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,3,0,0,0,1,1,1,1,1,1,1,1,0,0,0,3,3,3,3,3,0,0,3,3,3,0,0,3,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,3,0,0,0,1,1,1,1,1,1,1,1,2,3,3,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,3,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,0,0,3,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,3,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,3,0],[0,0,0,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,3,0],[0,0,0,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,3,3,0,3,0],[0,0,3,3,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,3,0,3,0],[0,3,3,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,3,3,3,0],[0,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,0,0],[0,3,3,3,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,3,0],[0,0,0,0,3,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,3,3,3,3,0,0,0,3,0,0,0,3,3,3,3,0,0,3,2,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,3,0],[0,0,0,3,0,0,3,3,3,3,3,0,0,3,3,0,0,3,0,0,3,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,0,0],[0,0,0,3,3,0,0,0,0,0,3,0,0,3,0,0,3,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,0,0],[0,0,0,0,3,3,0,0,0,0,3,3,3,3,0,0,3,0,0,0,3,3,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,3,0],[0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,3,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,0,0,3,0,0,0,0,0,3,3,3,0,0,0,0,3,0,3,3,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,0,0,3,0,0,0,0,0,3,0,3,0,0,0,0,3,3,3,0,0,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,3,0],[0,0,0,0,0,3,3,3,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,3,0],[0,0,0,0,0,0,0,3,3,0,3,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,3,0,0],[0,0,0,0,0,0,0,0,3,0,3,0,0,3,3,3,0,0,0,0,3,3,3,0,3,3,3,3,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0],[0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,3,3,3,3,3,3,0,3,3,3,0,0,3,3,3,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]";

/****************************************
 * Scene
 ****************************************/

var width = 1280, height = 720;

var world = new CANNON.World();
world.gravity.set(0, -9.81, 0);
world.broadphase = new CANNON.NaiveBroadphase();

scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);

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

/*
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
*/

var dungeon = JSON.parse(dungeonJson);
var dungeonWidth = dungeon[0].length;
var dungeonHeight = dungeon.length;
var dungeonScale = 3;
console.log("Dungeon: ("+dungeonWidth+","+dungeonHeight+")");

// Floor
add_plane({
	world: world,
	scene: scene,
	material: { color: 0x998866, perPixel: true, specular: 0x555555, shininess: 0, map: null },
	width: dungeonWidth * dungeonScale,
	height: dungeonHeight * dungeonScale,
	pos: { x: 0, y: 0, z: 0 },
	rot: { x: 1, y: 0, z: 0, amount: -Math.PI/2 },
	castShadow: false,
	receiveShadow: true
});

// Ceiling
add_plane({
	world: world,
	scene: scene,
	material: { color: 0x88bbff, perPixel: true, specular: 0x555555, shininess: 0, map: null },
	width: dungeonWidth * dungeonScale,
	height: dungeonHeight * dungeonScale,
	pos: { x: 0, y: dungeonScale*3/2, z: 0 },
	rot: { x: 1, y: 0, z: 0, amount: Math.PI/2 },
	castShadow: false,
	receiveShadow: true
});

var WALL = 0,
	FLOOR = 1,
	DOOR = 2,
	TUNNEL = 3;

var startingLocations = [];

for(var y=0; y<dungeonHeight; y++) {
	for(var x=0; x<dungeonWidth; x++) {
		if(dungeon[y][x] == WALL) {
			// scale walls to the right
			if(x > 0 && dungeon[y][x-1] == WALL) {
				continue;
			} else {
				xScale = 1;
				for(var i = 1; x + i < dungeonWidth; i++) {
					if(dungeon[y][x + i] == WALL) {
						xScale++;
					} else {
						break;
					}
				}
				add_box({
					world: world,
					world_objects: world_objects,
					scene: scene,
					material: { color: 0x333333, perPixel: false, specular: 0, shininess: 0, map: null },
					size: { x: xScale * dungeonScale, y: dungeonScale*3, z: dungeonScale },
					mass: 0,
					pos: { x: (x - dungeonWidth/2 + xScale/2)*dungeonScale, y: 0, z: (y - dungeonHeight/2)*dungeonScale },
					castShadow: false
				});
			}
		} else if(dungeon[y][x] == FLOOR) {
			if(dungeon[y][x-1] == FLOOR &&
				dungeon[y][x+1] == FLOOR &&
				dungeon[y-1][x] == FLOOR &&
				dungeon[y+1][x] == FLOOR) {

				startingLocations.push({ x: x, y: y });
			}
		} else if(dungeon[y][x] == DOOR) {
		} else if(dungeon[y][x] == TUNNEL) {
		}
	}
}

/****************************************
 * Lighting
 ****************************************/

var skyColorHex = 0xffffff;
var groundColorHex = 0xffffff;
var intensity = 0.05;
var hl = new THREE.HemisphereLight(skyColorHex, groundColorHex, intensity);
scene.add(hl);

/****************************************
 * Controls
 ****************************************/

var time = Date.now();

var player = new Player(camera);
scene.add(player.getObject());
world.add(player.getBody());
world.addContactMaterial(player.getContactMaterial());

var startingLocation = startingLocations[Math.floor(Math.random()*startingLocations.length)];
player.setPosition(
	(startingLocation['x']-dungeonWidth/2)*dungeonScale + dungeonScale/2,
	dungeonScale,
	(startingLocation['y']-dungeonHeight/2)*dungeonScale + dungeonScale/2
);

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
		element.requestPointerLock();
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
