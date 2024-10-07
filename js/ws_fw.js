
class HtmlElement
{
	constructor(ptag)
	{
		this.list = [];
		if(typeof(ptag)=="string")
		{
			this.element = document.createElement(ptag);
			this.tag=ptag;
	
		}
		else if(typeof(ptag)=="object")
		{
			this.element = ptag;
			this.tag=ptag.localName;
			for(let i=0;i<this.element.length;i++)
			{
				if(i>0)
				this.addList(this.element[i]);
			}
		}
	}
	get()
	{
		return this.element;
	}
	getContent()
	{
		return this.element.innerHTML; 
	}
	getAttribute(tag)
	{
		return this.element.getAttribute(tag);
	}
	setAttribute(name,value)
	{
		this.element.setAttribute(name,value);
	}
	editContent(content)
	{
		this.element.innerHTML = content;
	}
	addContent(content)
	{
		this.element.innerHTML = this.getContent() + content;
	}
	addList(tag)
	{
		let el = new HtmlElement(tag);
		this.list.push(el);
		return el;
	}
	addChild(tag)
	{
		let el = this.addList(tag);
		this.element.appendChild(el.get());
		return el;
	}
	getChild(ptag)
	{
		let el =  null;
		for(let i=0;i<this.list.length;i++)
		{
			if(this.list[i].tag==ptag)
			{
				el = this.list[i];
				break;
			}
		}
		return el;
	}
}

class Html extends HtmlElement
{
	constructor()
	{
		super(document.documentElement);	
	}
}
