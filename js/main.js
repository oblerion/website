let button_id=0;
let projectlist = new ProjectList("project_list");
projectlist.add("egba-engine","./asset/MlEygI.png","https://oblerion.itch.io/gba-engine",["c"]);
projectlist.add("elyoko","./asset/dUagsX.png","https://oblerion.itch.io/elyoko",["c"]);
projectlist.add("love2djs","./asset/Hw4tmq.png","https://oblerion.itch.io/love2djs",["js"]);
projectlist.add("meca-frelion","./asset/ZvGh+s.png","https://oblerion.itch.io/meca-frelion",["3d"]);
projectlist.add("matoran","./asset/PmRAtW.png","https://oblerion.itch.io/matoran-model",["3d"]);
projectlist.add("consoledit","./asset/CxFWHN.png","https://oblerion.itch.io/consoledit",["c","c++"]);
projectlist.add("voxelpack","./asset/w52W5A.png","https://oblerion.itch.io/3d-voxel-asset",["3d"]);
projectlist.filter();

const button_tech=[
	document.getElementById("btn_all"),
	document.getElementById("btn_C"),
	document.getElementById("btn_C++"),
	document.getElementById("btn_JS"),
	document.getElementById("btn_3D")
];

const button_tag=[
	null,
	"c",
	"c++",
	"js",
	"3d"
];

function _updateclassbtn(id)
{
	button_tech[id].className="button_tech_down";
	button_tech[button_id].className="button_tech";
	button_id=id;
}

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
let main_id = 0;
const mainArray=[
	document.getElementById("main_title"),
	document.getElementById("main_egba")
];
document.getElementById("btn_home").onclick=function()
{
	if(main_id!=0)
	{
		mainArray[main_id].className="main_unactive";
		mainArray[0].className="main_active";
		main_id=0;
	}	
}
document.getElementById("btn_egba").onclick=function()
{
	if(main_id!=1)
	{
		mainArray[main_id].className="main_unactive";
		mainArray[1].className="main_active";
		main_id=1;
	}
}
