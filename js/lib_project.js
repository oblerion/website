// need love2d.js
class Project
{
	constructor(pname,pimg,purl,ptags)
	{
		this._name=pname;
		this._img=pimg;
		this._url=purl;
		this._tags=[];
		if(typeof(ptags)=="object")
		for(let i=0;i<ptags.length;i++)
			this._tags.push(ptags[i]);
	}
	findTag(tag)
	{
		for(let i=0;i<this._tags.length;i++)
		{
			if(tag==this._tags[i]) return i;
		}
		return -1;
	}
	url()
	{
		return this._url;
	}
	img()
	{
		return this._img;
	}
};

class ProjectList
{
	constructor(pid)
	{
		this.list=[];
		this.element=document.getElementById(pid);
		this.filter();
	}

	add(pname,pimg,purl,ptags)
	{
		this.list.push(new Project(pname,pimg,purl,ptags));
	}

	length()
	{
		return this.list.length;
	}
	
	filter(ptag)
	{
		let str = "";
		if(ptag==null)
		{
			for(let i=0;i<this.length();i++)
			{
				str = str + "<a href="+'"'+this.list[i].url()+'"'+"><img src="+'"'+this.list[i].img()+'"'+"/></a>";
			}
		}
		else
		{
			for(let i=0;i<this.length();i++)
			{
				if(this.list[i].findTag(ptag)>-1)
				str = str + "<a href="+'"'+this.list[i].url()+'"'+"><img src="+'"'+this.list[i].img()+'"'+"/></a>";
			}

		}
		this.element.innerHTML=str;
	}

};
