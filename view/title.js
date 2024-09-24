import {love} from "../js/love2d.js"
import {imglink,textlink} from "../js/lib.js"

const str_title = "  Magnus Oblerion";
const str_des = [
"Autistic C/JS indiedev",
"pixelartist, lowpoly 3d modeller",
"7 years of 2d games, NoAI,",
"3d and 3dmodeling start in 2023."
];
const str_link = [
	"  Twitter","News, tips and project devlog","https://x.com/MagnusOblerion",
	"  Itch.io","games and engines","https://oblerion.itch.io",
	"  Github","Source code of project","https://github.com/oblerion",
	"Artstation","3d models","https://oblerion.artstation.com",
	" Bluesky","X like","https://bsky.app/profile/magnusoblerion.bsky.social"
	//"Newgrounds","https://magnusoblerion.newgrounds.com"
];
const sizefont_title = 40;
const sizefont_link = 26;
const sizefont_txt = 20;

function getsize(text,size)
{
	return text.length*(size*0.5);
}

export function title_draw(img1,scale)
{
	love.graphics_setColor(0,0,0,255);
	love.graphics_print(str_title,
	(love.graphics_getWidth()-getsize(str_title,sizefont_title*scale))/2,
	40,0,sizefont_title*scale);

	imglink(img1,
	(love.graphics_getWidth()-img1.getWidth()*scale)/2,
	70,"https://oblerion.itch.io/",scale,scale);
	love.graphics_setColor(60,60,60,255);
	for (let i=0;i<str_des.length;i++)
	{
		let txtX = (love.graphics_getWidth()-getsize(str_des[i],sizefont_txt*scale))/2;
		let txtY = 70+img1.getHeight()*scale+30;
		love.graphics_print(str_des[i],txtX,txtY+(i*sizefont_txt*scale),0,sizefont_txt*scale);
	}

	for (let i=0;i<str_link.length;i+=3)
	{
		love.graphics_setColor(80,80,180,255);
		let txtX = (love.graphics_getWidth()-getsize(str_link[i],sizefont_link*scale))/2;
		let txtY = 70+img1.getHeight()*scale+130;
		textlink(str_link[i],txtX,
		txtY+(i*(sizefont_link*0.8)*scale),sizefont_link*scale,str_link[i+2]);
 		txtX = (love.graphics_getWidth()-getsize(str_link[i+1],sizefont_txt*scale))/2;
		love.graphics_setColor(30,30,130,255);
		love.graphics_print(str_link[i+1],txtX,
		txtY+(i*(sizefont_link*0.8)*scale+10)+10,0,sizefont_txt*scale);
	}
}
