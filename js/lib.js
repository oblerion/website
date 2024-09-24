import {love} from "./love2d.js"

export function collide(x,y,w,h,x2,y2,w2,h2)
{
	return (x<x2+w2 && y<y2+h2 && x2<x+w && y2<y+h);	
}

export function textbutton(text,x,y,size)
{
	let col = -1;
	let mx = love.mouse_getX();
	let my = love.mouse_getY();
	let lastcolor = love.graphics_getColor();
	let lt = love.touch_getTouches(); 
	if(lt.length>0)
	{
		for(let i=0;i<lt.length;i++)
		{
			let t = love.touch_getPosition(lt[i]);
			if(collide(t.x,t.y,5,5,x,y,
			text.length*(size*0.5),size))
			{
				col = 1;
			}
		}
	}
	if(collide(mx,my,8,8,x,y,text.length*(size*0.5),size))
	{
		col = 0;
		love.graphics_setColor(0,0,0,100);
		if(love.mouse_isDown(1))
			col=1;
	}
	love.graphics_print(text,x,y,0,size);
	love.graphics_setColor(lastcolor);
	return col;
}
export function textlink(text,x,y,size,url)
{
	let col = false;

	if(textbutton(text,x,y,size)==1)
	{
		love.system_openURL(url);
		col = true;
	}
	return col;
}
export function imglink(img,x,y,url,sw,sh)
{
	let col = false
	let mx = love.mouse_getX();
	let my = love.mouse_getY();
	let lsw = 1;
	let lsh = 1;
	if(sw!=null) lsw=sw;
	if(sh!=null) lsh=sh;
	love.graphics_draw(img,x,y,0,img.getWidth()*lsw,img.getHeight()*lsh);
	let lt = love.touch_getTouches();
	if(lt.length>0)
	{
		for(let i=0;i<lt.length;i++)
		{
			let t = love.touch_getPosition(lt[i]);
			if(collide(t.x,t.y,5,5,x,y,
			img.getWidth()*lsw,img.getHeight()*lsh))
			{
				col = true;
			}
		}
	}
	if(collide(mx,my,10,10,x,y,img.getWidth()*lsw,img.getHeight()*lsh))
	{
		col=true;
		love.graphics_setColor(255,255,255,100);
		love.graphics_rectangle("fill",x,y,img.getWidth()*lsw,img.getHeight()*lsh);
		love.graphics_setColor(255,255,255,255);
		if(love.mouse_isDown(1))
			love.system_openURL(url);
	}		
	return col;
}
