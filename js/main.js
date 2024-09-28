let title_img = love.graphics_newImage("asset/canvas-nightshade-slow.png");
let os = love.system_getOs()
let scale = 1;
let scene_id=0;

document.getElementById("btn_title").onclick=function()
{
	scene_id=0;
}
document.getElementById("btn_C").onclick=function()
{
	scene_id=1;
}
document.getElementById("btn_JS").onclick=function()
{
	scene_id=2;
}
document.getElementById("btn_3D").onclick=function()
{
	scene_id=3;
}
	
love.load=function()
{
	if(love.window_getWidth()<300) scale = 0.6;
	else if(love.window_getWidth()<400) scale = 0.7;
	else if(love.window_getWidth()<800) scale = 0.8;


	if(love.window_getWidth()<=800)
		love.window_setMode(
			love.window_getWidth()-20,
			550*(scale - 0.05));
	else
		love.window_setMode(800,550);
	love.window_setTitle("magnus oblerion website"); 
	love.graphics_setFont("Pixelify Sans");
}
love.update=function(dt)
{

}

love.draw=function()
{	
	
	//let sv = document.getElementById("tech-select").value;
	switch(scene_id)
	{
		case 0:
			title_draw(title_img,scale);
		break;
		case 1:
			love.graphics_setColor(0,0,0,255);
			love.graphics_print("scene1",23,23,15);
		break;
		case 2:

		break;
		case 3:

		break;
		default:;
	}		


}
