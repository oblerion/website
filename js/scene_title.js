
const str_title = "  Magnus Oblerion";
const str_des = [
"Autistic C/JS indiedev",
"pixelartist, lowpoly 3d modeller",
"7 years of 2d games, NoAI,",
"3d and 3dmodeling start in 2023."
];
/*const str_link = [
	"C project","","./",
	"Js project","games and engines","https://oblerion.itch.io",
	"3d","Source code of project","https://github.com/oblerion",
	"Artstation","3d models","https://oblerion.artstation.com",
	" Bluesky","X like","https://bsky.app/profile/magnusoblerion.bsky.social"
	//"Newgrounds","https://magnusoblerion.newgrounds.com"
];*/
const sizefont_title = 40;
const sizefont_link = 26;
const sizefont_txt = 20;



function title_draw(img1,scale)
{
	love.graphics_setColor(51,204,204,255);
	love.graphics_rectangle("fill",0,0,
	love.graphics_getWidth(),
	love.graphics_getHeight());
	love.graphics_setColor(0,0,0,255);
	printcenter(str_title,40,sizefont_title,scale);

	love.graphics_draw(img1,
	(love.graphics_getWidth()-img1.getWidth()*scale)/2,70,0,img1.getWidth()*scale,img1.getHeight()*scale);
	love.graphics_setColor(60,60,60,255);
	for (let i=0;i<str_des.length;i++)
	{
		let txtY = 70+img1.getHeight()*scale+30;
		printcenter(str_des[i],txtY+(i*sizefont_txt*scale),sizefont_txt,scale);
	}
}
