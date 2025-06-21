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
	constructor(pparent)
	{
		this.list=[];
		this.element= pparent.addChild("div");
		this.element.setAttribute("id","project_list");
		let ul = this.element.addChild("ul");
			ul.setAttribute("style","display:flex;gap:1em;padding:0.5em;margin:auto 15%;justify-content:space-between;flex-wrap:wrap;align-items:center;");
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
		let ul = this.element.getChild("ul");
		ul.remChildren();
		for(let i=0;i<this.length();i++)
		{
			
			if(ptag==null || this.list[i].findTag(ptag)>-1)
			{
				let li = ul.addChild("li");
					li.setAttribute("style","display:inline-block;padding:0.8em;");
					let a = li.addChild("a");
						a.setAttribute("href",this.list[i].url());
							let img = a.addChild("img");
								img.setAttribute("class","project_img");
								img.setAttribute("src",this.list[i].img());
			}
		}
	}
	getElement()
	{
		return this.element;
	}

};
