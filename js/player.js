app.scene.player={
	init:function(){
		return this.setPlayer();
	},
	setPlayer:function(){
		var cubeGeometry = new THREE.CubeGeometry( 20, 20, 20 );
		var crateMaterial = new THREE.MeshLambertMaterial( { color:0xaa0000} );

		var crate = new THREE.Mesh( cubeGeometry, crateMaterial );
		crate.position.set(0,0,0);
		crate.name="myObject";
		return crate;
	}
}