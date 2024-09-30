let scale = 1;
let scene_id=0;
let projectlist = new ProjectList("project_list");
projectlist.add("egba-engine","./asset/MlEygI.png","https://oblerion.itch.io/gba-engine",["c"]);
projectlist.add("elyoko","./asset/dUagsX.png","https://oblerion.itch.io/elyoko",["c"]);
projectlist.add("love2djs","./asset/Hw4tmq.png","https://oblerion.itch.io/love2djs",["js"]);
projectlist.add("meca-frelion","./asset/ZvGh+s.png","https://oblerion.itch.io/meca-frelion",["3d"]);
projectlist.add("matoran","./asset/PmRAtW.png","https://oblerion.itch.io/matoran-model",["3d"]);
projectlist.add("consoledit","./asset/CxFWHN.png","https://oblerion.itch.io/consoledit",["c","c++"]);
projectlist.add("voxelpack","./asset/w52W5A.png","https://oblerion.itch.io/3d-voxel-asset",["3d"]);
projectlist.filter();

document.getElementById("btn_all").onclick=function()
{
	scene_id=0;
	projectlist.filter();
}
document.getElementById("btn_C++").onclick=function()
{
	scene_id=1;
	projectlist.filter("c++");
}
document.getElementById("btn_C").onclick=function()
{
	scene_id=1;
	projectlist.filter("c");
}
document.getElementById("btn_JS").onclick=function()
{
	scene_id=2;
	projectlist.filter("js");
}
document.getElementById("btn_3D").onclick=function()
{
	scene_id=3;
	projectlist.filter("3d");
}
	
