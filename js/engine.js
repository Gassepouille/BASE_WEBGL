app.scene.engine={
	init:function(){
		 window.requestAnimFrame = (function(){
	      return  window.requestAnimationFrame       || 
	              window.webkitRequestAnimationFrame || 
	              window.mozRequestAnimationFrame    || 
	              window.oRequestAnimationFrame      || 
	              window.msRequestAnimationFrame     || 
	              function( callback ){
	                window.setTimeout(callback, 1000 / 60);
	              };
	    })();
	    (function gameLoop(){
	    	requestAnimFrame(gameLoop);
	    	app.scene.engine.gameRender(app.settings);
	    })()
	},
	gameRender:function(settings){
		settings.renderer.render(settings.scene, settings.camera );
		settings.player.rotation.x+=0.01;
		settings.player.rotation.y+=0.05;

	}
}