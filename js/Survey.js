/**
	*@author Mario Giorno
	*Date Started 06/28/2017
	*Date Last Modified  06/28/2017
	*
	*This script details the class objects used for the Portable Survey application.
	*/

class Survey{
	constructor(name, owner){
		this._name=name;
		this._owner=owner;
	}
	
	//Class getter/setter methods
	get name(){return this._name;}
	set name(name){this._name=name;}
	get owner(){return this._owner;}
	set owner(owner){this._owner=owner;}
	
	buildHTML(parent){
		let titleNode=document.createElement("div");
		titleNode.setAttribute("class", "qTitle");
		titleNode.innerHTML=this._name;
		let par=document.getElementById(parent);
		par.appendChild(titleNode);
	}
}

class Section{
	constructor(name,){
		this._name=name;
	}
}

class Question{
	constructor(name, type, text){
		this._name=name;
		this._type=type;
		this._text=text;
	}
	
	//Class getter/setter methods
	get name(){return this._name;}
	set name(name){this._name=name;}
	get type(){return this._type;}
	set type(type){this._name=type;}
	get text(){return this._text;}
	set text(text){this._name=text;}
	
	buildHTML(parent){
		//Create new container div for question.
		let divNode=document.createElement("div");
		divNode.setAttribute("id", "QContainer_"+this._name);
		//Create a break tag node.
		let brNode=document.createElement("br");
		//Create new form item label.
		let formItemLabelNode;
		formItemLabelNode=document.createElement("label");
		formItemLabelNode.setAttribute("class", "lblText");
		formItemLabelNode.innerHTML=this._text;
		//Create new form item.
		let formItemNode;		
		//Depending on the question type create the appropriate HTML form item.
		if(this._type=="fill-in"){
			//Create form item.
			formItemNode=document.createElement("input");
			formItemNode.setAttribute("type", "text");
			formItemNode.setAttribute("id", "Q_"+this._name);
			formItemNode.setAttribute("name", "Q_"+this._name);
			formItemNode.setAttribute("value", "");
			formItemNode.setAttribute("maxlength", "255");
		}else if(this._type=="essay"){
			//Create form item.
			formItemNode=document.createElement("textarea");
			formItemNode.setAttribute("type", "text");
			formItemNode.setAttribute("id", "Q_"+this._name);
			formItemNode.setAttribute("name", "Q_"+this._name);
			formItemNode.setAttribute("cols", "80");
			formItemNode.setAttribute("rows", "5");
			formItemNode.setAttribute("maxlength", "2048");			
		}
		//Inserting the new form item within the question container div.
		divNode.appendChild(formItemLabelNode);
		divNode.appendChild(brNode);
		divNode.appendChild(brNode);
		divNode.appendChild(formItemNode);
		//
		let par=document.getElementById(parent);
		par.appendChild(divNode);
	}
}

class Stimulus{
	constructor(name, type, uri){
		this._name=name;
		this._type=type;
		this._uri=uri;
	}
	
	//Class getter/setter methods
	get name(){return this._name;}
	set name(name){this._name=name;}
	get type(){return this._type;}
	set type(type){this._name=type;}
	get uri(){return this._uri;}
	set uri(uri){this._uri=uri;}
}

class Page{
	constructor(uri, title){
		this._uri=uri;
		this._title=title;
	}
	
	get uri(){return this._uri;}
	set uri(uri){this._uri=uri}
	get title(){return this._title;}
	set title(title){this._title=title}
}

class User{
	constructor(fname, lname, username, emailAddr){
		this._fname=fname;
		this._lname=lname;
		this._username=username;
		this._emailAddr=emailAddr;
	}
	
	//Class getter/setter methods
	get fname(){return this._fname;}
	set fname(fname){this._fname=fname;}
	get lname(){return this._lname;}
	set lname(lname){this._lname=lname;}
	get username(){return this._username;}
	set username(username){this._username=username;}
	get emailAddr(){return this._emailAddr;}
	set emailAddr(emailAddr){this._emailAddr=emailAddr;}
}