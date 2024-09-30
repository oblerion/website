function collide(x,y,w,h,x2,y2,w2,h2)
{
	return (x<x2+w2 && y<y2+h2 && x2<x+w && y2<y+h);	
}

function getsize(text,size)
{
	return text.length*(size*0.5);
}

function printcenter(text,y,size,scale)
{
	love.graphics_print(text,
	(love.graphics_getWidth()-getsize(text,size*scale))/2,
	y,0,size*scale);
}

function printleft(text,y,size,scale)
{
	love.graphics_print(text,
	0,y,0,size*scale);
}

function printright(text,y,size,scale)
{
	love.graphics_print(text,
	(love.graphics_getWidth()-getsize(text,size*scale)),
	y,0,size*scale);
}

function textbutton(text,x,y,size)
{
	let col = -1;
	
	let mx;
	let my;
	let touches = love.touch_getTouches();
	let wsize = text.length*(size*0.55);

	if(touches.length==0)
	{
		mx = love.mouse_getX();
		my = love.mouse_getY();
		if(collide(mx,my,8,8,x,y,wsize,size))
		{
			col = 0;
			love.graphics_setColor(0,0,0,100);
			if(love.mouse_isDown(1)==true)
				col=1;
		}
	}
	else
	{
		let t = love.touch_getPosition(touches[0]);
		mx=t.x;
		my=t.y;
		if(collide(mx,my,8,8,x,y,wsize,size))
		{
			love.graphics_setColor(0,0,0,100);
			col=1;
		}
	}
	let lastcolor = love.graphics_getColor();
	love.graphics_rectangle("line",x,y-(size*0.75),wsize,size);
	love.graphics_print(text,x,y,0,size);
	love.graphics_setColor(lastcolor);
	return col;
}
function textlink(text,x,y,size,url)
{
	let col = false;

	if(textbutton(text,x,y,size)==1)
	{
		love.system_openURL(url);
		col = true;
	}
	return col;
}
function imglink(img,x,y,url,sw,sh)
{
	let col = false
	let mx;
	let my;
	let touches = love.touch_getTouches();
	let istouch=false;
	if(touches.length==0)
	{
		mx = love.mouse_getX();
		my = love.mouse_getY();
	}
	else
	{
		let t = love.touch_getPosition(0);
		mx=t.x;
		my=t.y;
		istouch=true;
	}
	let lsw = 1;
	let lsh = 1;
	if(sw!=null) lsw=sw;
	if(sh!=null) lsh=sh;
	love.graphics_draw(img,x,y,0,img.getWidth()*lsw,img.getHeight()*lsh);
	if(collide(mx,my,10,10,x,y,img.getWidth()*lsw,img.getHeight()*lsh))
	{
		col=true;
		love.graphics_setColor(255,255,255,100);
		love.graphics_rectangle("fill",x,y,img.getWidth()*lsw,img.getHeight()*lsh);
		love.graphics_setColor(255,255,255,255);
		if(istouch==true || love.mouse_isDown(1))
			love.system_openURL(url);
	}		
	return col;
}
