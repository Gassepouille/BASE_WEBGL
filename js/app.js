app={
	init:function(){
		// init scene & objects
		var scene =this.scene.init();
		app.settings.scene=scene.scene;
		app.settings.renderer=scene.renderer;
		app.settings.axes=this.scene.axes.init();
		app.settings.pointLight=this.scene.lights.init();
		app.settings.player=this.scene.player.init();
		app.settings.camera=this.scene.camera.init(app.settings.scene);

		// add objects in scene
		app.settings.scene.add(app.settings.axes);
		app.settings.scene.add(app.settings.pointLight);
		app.settings.scene.add(app.settings.player);

		// Launch Engine
		this.scene.engine.init();

	}
}