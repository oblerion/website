
let html = new Html();

function fheader(html)
{
	const menu_list = [
		"home",
		"egba",
		"elyoko"
	];
	let header = html.addChild("header");
		let nav = header.addChild("nav");
			let ul = nav.addChild("ul");
				ul.setAttribute("class","ul_link");
				for(let i=0;i<menu_list.length;i++)
				{
					let li = ul.addChild("li");
						li.setAttribute("class","li_link");
					let a = li.addChild("a");
						a.editContent(menu_list[i]);
						a.setAttribute("class","link");
						a.setAttribute("id","btn_"+menu_list[i]);
				}
}

function fmain(html,pmain)
{

	let main
	if(pmain==null) 
		main = html.addChild("main");
	else
		main = pmain;
		main.setAttribute("class","main_active");
		main.setAttribute("id","main_title");
			let section = main.addChild("section");
				let h1 = section.addChild("h1");
					h1.setAttribute("class","title");
					h1.addContent("Magnus Oblerion");
				let img = section.addChild("img");
					img.setAttribute("src","./asset/canvas-nightshade-slow.png");
					img.setAttribute("class","img_title");
				let p = section.addChild("p");
					p.setAttribute("class","title_des");
					p.addContent("Autistic C/JS indiedev <br>");
					p.addContent("pixelartist, lowpoly 3d modeller <br>");
					p.addContent("7 years of 2d games, NoAI, <br>");
					p.addContent("3d and 3dmodeling start in 2023.</p> ");
	
	const list_btn = [
		"All",
		"C",
		"C++",
		"JS",
		"LUA",
		"3D"
	];
					
		let section2 = main.addChild("section");
			let ul = section2.addChild("ul");
				ul.setAttribute("class","ul_button_tech");
					for(let i=0;i<list_btn.length;i++)
					{
						let li = ul.addChild("li");
						li.setAttribute("class","li_button_tech");
							let button = li.addChild("button");
								if(i>0)
									button.setAttribute("class","button_tech");
								else
									button.setAttribute("class","button_tech_down");
								button.setAttribute("id","btn_"+list_btn[i]);
								button.addContent(list_btn[i]);
					}
			let div = section2.addChild("div");
			div.setAttribute("id","project_list");
			div.setAttribute("style","text-align:center;");
}

function ffooter(html)
{
	
	const link_list = [
		"Twitter","https://x.com/MagnusOblerion",
		"Itch.io","https://oblerion.itch.io",
		"Github","https://github.com/oblerion",
		"Artstation","https://oblerion.artstation.com",
		"Facebook","https://www.facebook.com/profile.php?id=61565835281292"
	]
	
	let footer = html.addChild("footer");
		let ul = footer.addChild("ul");
			ul.setAttribute("class","ul_link");
			for(let i=0;i<link_list.length;i+=2)
			{
				let li = ul.addChild("li");
					li.setAttribute("class","li_link");
						let a = li.addChild("a");
							a.setAttribute("class","link");
							a.setAttribute("href",link_list[i+1]);
							a.addContent(link_list[i]);
			}
}

fheader(html);
fmain(html);
ffooter(html);

let button_id=0;

function Project_init()
{
	const button_tech=[
		document.getElementById("btn_All"),
		document.getElementById("btn_C"),
		document.getElementById("btn_C++"),
		document.getElementById("btn_JS"),
		document.getElementById("btn_LUA"),
		document.getElementById("btn_3D")
	];

	function _updateclassbtn(id)
	{
		button_tech[id].className="button_tech_down";
		button_tech[button_id].className="button_tech";
		button_id=id;
	}

	const button_tag=[
		null,
		"c",
		"c++",
		"js",
		"lua",
		"3d"
	];

	let projectlist = new ProjectList("project_list");
	// 2024
	projectlist.add("egba-engine","./asset/MlEygI.png","https://oblerion.itch.io/gba-engine",["c","2024"]);
	projectlist.add("elyoko","./asset/dUagsX.png","https://oblerion.itch.io/elyoko",["c","2024"]);
	projectlist.add("meca-frelion","./asset/ZvGh+s.png","https://oblerion.itch.io/meca-frelion",["3d","2024"]);
	projectlist.add("matoran","./asset/PmRAtW.png","https://oblerion.itch.io/matoran-model",["3d","2024"]);
	projectlist.add("skyboard","./asset/ClWgNA.png","https://oblerion.itch.io/skyboard-minetest",["lua","3d","2024"]);
	projectlist.add("legion5","./asset/yf5dlD.png","https://oblerion.itch.io/legion5-fox-on-the-run",["lua"]);

	// 2023
	projectlist.add("clashounit","./asset/3osmOw.png","htpps://oblerion.itch.io/clash-of-unit",["lua","2023"]);

	// 2022
	projectlist.add("love2djs","./asset/Hw4tmq.png","https://oblerion.itch.io/love2djs",["js","2022"]);
	projectlist.add("anothernight","./asset/M6rGeD.png","https://oblerion.itch.io/another-night",["js","2022"]);

	// 2020
	projectlist.add("consoledit","./asset/CxFWHN.png","https://oblerion.itch.io/consoledit",["c","c++","2020"]);
	projectlist.add("voxelpack","./asset/w52W5A.png","https://oblerion.itch.io/3d-voxel-asset",["3d"]);
	projectlist.add("pomodoro","./asset/uTfcGe.png","https://oblerion.itch.io/my-pomodoro-timer",["lua","2020"]);
	projectlist.filter();
	
	button_tech[0].className="button_tech_down";
	for(let i=0;i<button_tech.length;i++)
	{
		button_tech[i].onclick=function()
		{
			//button_id=0;
			_updateclassbtn(i);
			projectlist.filter(button_tag[i]);
			
		}
	}
}

Project_init();

//----------------------- header logic
document.getElementById("btn_home").onclick=function()
{
	html.getChild("main").editContent("");
	fmain(html,html.getChild("main"));
	Project_init();
		
}
document.getElementById("btn_egba").onclick=function()
{
	html.getChild("main").editContent("");
}
