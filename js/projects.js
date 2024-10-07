let button_id=0;

function _updateclassbtn(id)
{
	button_tech[id].className="button_tech_down";
	button_tech[button_id].className="button_tech";
	button_id=id;
}

const button_tech=[
	document.getElementById("btn_All"),
	document.getElementById("btn_C"),
	document.getElementById("btn_C++"),
	document.getElementById("btn_JS"),
	document.getElementById("btn_LUA"),
	document.getElementById("btn_3D")
];

const button_tag=[
	null,
	"c",
	"c++",
	"js",
	"lua",
	"3d"
];

function Project_init()
{
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






