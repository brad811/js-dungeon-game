function Player(camera) {
	var maxSpeed = 5;
	var acceleration = 0.4;
	var jumpVelocity = 12;
	var mouseSpeed = 0.002;
	var scope = this;

	var q = new THREE.Quaternion();
	var vectorX = new THREE.Vector3(1,0,0);
	var vectorY = new THREE.Vector3(0,1,0);
	var vectorZero = new THREE.Vector3(0,0,0);

	var pitchObject = new THREE.Object3D();
	pitchObject.add(camera);

	var yawObject = new THREE.Object3D();
	yawObject.position.z = 3;
	yawObject.position.y = 2;
	yawObject.add(pitchObject);

	var physicsMaterial = new CANNON.Material("bodyMaterial");
	var physicsContactMaterial = new CANNON.ContactMaterial(
			physicsMaterial,
			physicsMaterial,
			0.0, // friction coefficient
			0.1  // restitution
		);
	var mass = 82
	var radius = 0.5;
	var sphereShape = new CANNON.Sphere(radius);
	var cannonBody = new CANNON.RigidBody(mass,sphereShape,physicsMaterial);
	cannonBody.position.set(0,2,3);
	cannonBody.linearDamping = 0;

	var quat = new THREE.Quaternion();

	var moveForward = false;
	var moveBackward = false;
	var moveLeft = false;
	var moveRight = false;

	//var isOnObject = false;
	var canJump = false;

	cannonBody.addEventListener("collide",function(e){
		canJump = true;
	});

	/****************************************
	 * Head and Body
	 ****************************************/

	var height = 1.5;

	var bodyBaseY = height*0.4;
	var bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xff8844, perPixel: true, specular: 0x222222, shininess: 10 });
	var bodyGeometry = new THREE.BoxGeometry(0.7, height*0.8, 0.3);
	var bodyMesh = new THREE.Mesh( bodyGeometry, bodyMaterial );
	scene.add(bodyMesh);
	bodyMesh.position.set(0,bodyBaseY,-3);
	bodyMesh.castShadow = true;

	var headBaseY = height*0.95;
	var headGeometry = new THREE.BoxGeometry(height*0.2, height*0.2, height*0.2);
	var headMesh = new THREE.Mesh( headGeometry, bodyMaterial );
	scene.add(headMesh);
	headMesh.position.set(0,headBaseY,-3);
	headMesh.castShadow = true;

	/****************************************
	 * Movement
	 ****************************************/

	var velocity = cannonBody.velocity;
	var PI_2 = Math.PI / 2;

	/****************************************
	 * Flashlight
	 ****************************************/
	var spotLightTarget = new THREE.Object3D();
	spotLightTarget.castShadow = false;
	scene.add(spotLightTarget);

	var spotLight = new THREE.SpotLight(0xffffff, 1);
	spotLight.shadowDarkness = 1;

	spotLight.shadowCameraNear = 0.5;
	spotLight.shadowCameraFar = 100;
	spotLight.shadowCameraLeft = -5;
	spotLight.shadowCameraRight = 5;
	spotLight.shadowCameraTop = 5;
	spotLight.shadowCameraBottom = -5;
	//spotLight.shadowCameraVisible = true;

	spotLight.target = spotLightTarget;
	scene.add(spotLight);

	var onMouseMove = function(event) {
		if (scope.enabled === false) return;

		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

		yawObject.rotation.y -= movementX * mouseSpeed;
		pitchObject.rotation.x -= movementY * mouseSpeed;

		pitchObject.rotation.x = Math.max( - PI_2, Math.min( PI_2, pitchObject.rotation.x ) );
	};

	var onKeyDown = function(event) {
		switch (event.keyCode) {
			case 38: // up
			case 87: // w
				moveForward = true;
				break;

			case 37: // left
			case 65: // a
				moveLeft = true; break;

			case 40: // down
			case 83: // s
				moveBackward = true;
				break;

			case 39: // right
			case 68: // d
				moveRight = true;
				break;

			case 32: // space
				if(canJump && scope.enabled) {
					velocity.y += jumpVelocity;
					canJump = false;
				}
				break;
		}
	};

	var onKeyUp = function (event) {
		switch(event.keyCode) {
			case 38: // up
			case 87: // w
				moveForward = false;
				break;

			case 37: // left
			case 65: // a
				moveLeft = false;
				break;

			case 40: // down
			case 83: // s
				moveBackward = false;
				break;

			case 39: // right
			case 68: // d
				moveRight = false;
				break;
		}
	};

	document.addEventListener('mousemove', onMouseMove, false);
	document.addEventListener('keydown', onKeyDown, false);
	document.addEventListener('keyup', onKeyUp, false);

	this.enabled = false;

	this.getObject = function() {
		return yawObject;
	};

	this.getBody = function() {
		return cannonBody;
	}

	this.getContactMaterial = function() {
		return physicsContactMaterial;
	}

	this.isOnObject = function(boolean) {
		isOnObject = boolean;
		canJump = boolean;
	};

	this.getDirection = function(vector) {
		// assumes the camera itself is not rotated
		var direction = new THREE.Vector3( 0, 0, -1 );
		var rotation = new THREE.Euler( 0, 0, 0, "YXZ" );

		rotation.set( pitchObject.rotation.x, yawObject.rotation.y, 0 );
		vector.copy( direction ).applyEuler( rotation );
	};

	var inputVelocity = new THREE.Vector3();

	var playerDirection = vectorZero;
	this.update = function(delta) {
		delta *= 0.1;

		inputVelocity.set(0,0,0);

		if(scope.enabled) {
			if ( moveForward ){
				inputVelocity.z = -acceleration * delta;
			}
			if ( moveBackward ){
				inputVelocity.z = acceleration * delta;
			}

			if ( moveLeft ){
				inputVelocity.x = -acceleration * delta;
			}
			if ( moveRight ){
				inputVelocity.x = acceleration * delta;
			}
		}

		// Convert velocity to world coordinates
		quat.setFromEuler(new THREE.Euler(pitchObject.rotation.x, yawObject.rotation.y, 0));
		inputVelocity.applyQuaternion(quat);

		// Add to the object
		velocity.x += inputVelocity.x;
		velocity.z += inputVelocity.z;

		velocity.y -= 0.6;

		if(!moveRight && !moveLeft && !moveForward && !moveBackward) {
			velocity.x *= 0.8;
			velocity.z *= 0.8;
		}

		var speed = Math.sqrt(velocity.x*velocity.x + velocity.z*velocity.z);
		if( speed > maxSpeed) {
			velocity.x *=  maxSpeed/speed;
			velocity.z *=  maxSpeed/speed;
		}

		// Let's not just asymptotically approach zero
		//if(Math.abs(velocity.x) < 0.01) { velocity.x = 0.0; }
		//if(Math.abs(velocity.z) < 0.01) { velocity.z = 0.0; }

		cannonBody.position.copy(yawObject.position);
		yawObject.position.y += height - radius;

		player.getDirection(playerDirection);
		this.updateFlashlight(playerDirection);
		this.updateBody(playerDirection);
	};

	this.updateFlashlight = function(direction) {
		spotLight.position.x = yawObject.position.x + direction.x * 0.1;
		spotLight.position.y = yawObject.position.y + direction.y * 0.1;
		spotLight.position.z = yawObject.position.z + direction.z * 0.1;

		spotLightTarget.position.x = yawObject.position.x + direction.x * 2;
		spotLightTarget.position.y = yawObject.position.y + direction.y * 2;
		spotLightTarget.position.z = yawObject.position.z + direction.z * 2;
	};

	this.updateBody = function(direcion) {
		bodyMesh.rotation.y = yawObject.rotation.y;

		headMesh.quaternion.multiplyQuaternions(new THREE.Quaternion(), new THREE.Quaternion());
		q.setFromAxisAngle(vectorX, pitchObject.rotation.x);
		headMesh.quaternion.multiplyQuaternions(q, headMesh.quaternion);
		q.setFromAxisAngle(vectorY, yawObject.rotation.y);
		headMesh.quaternion.multiplyQuaternions(q, headMesh.quaternion);

		bodyMesh.position.y = bodyBaseY + yawObject.position.y - height;
		headMesh.position.y = headBaseY + yawObject.position.y - height;

		bodyMesh.position.x = yawObject.position.x;
		bodyMesh.position.z = yawObject.position.z;

		headMesh.position.x = yawObject.position.x;
		headMesh.position.z = yawObject.position.z;
	};
}