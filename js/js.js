$(function(){
//	单向链表
//	function node(ele){
//		this.ele=ele;
//		this.next=null;
//	};
//	
//	function LList(){
//		this.head=new node("head");
//		this.find=function(item){
//			var currNode=this.head;
//			while(currNode.ele!=item){
//				currNode=currNode.next;
//			};
//			return currNode;
//		};
//		this.insert=function(newEle,item){
//			var newNode=new node(newEle);
//			var current=this.find(item);
//			newNode.next=current.next;
//			current.next=newNode;
//		};
//		this.findprevious=function(item){
//			var  currnode=this.head;
//			while(!(currnode.next==null)&&(currnode.next.ele!=item)){
//				currnode=currnode.next;
//			};
//			return currnode;
//		};
//		this.remove=function(item){
//			var prevnode=this.findprevious(item);
//			if(!(prevnode.next==null)){
//				prevnode.next=prevnode.next.next;
//			};
//		};
//		this.display=function(){
//			var currNode=this.head;
//			while(!(currNode.next==null)){
//				console.log(currNode.next.ele);
//				currNode=currNode.next;
//			};
//		};
//	};
//	
//	var test=new LList();
//	test.insert("body","head")
//	test.insert("c","body")
//	test.insert("d","c")
//	test.insert("e","d")
//	console.log(test.findprevious("c"));
//	test.remove("c")
//	test.display();
//	
	
//	双向链表
//	function node(ele){
//		this.ele=ele;
//		this.next=null;
//		this.previous=null;
//	};
//	
//	function LList(){
//		this.head=new node("head");
//		this.find=function(item){
//			var currNode=this.head;
//			while(currNode.ele!=item){
//				currNode=currNode.next;
//			};
//			return currNode;
//		};
//		this.insert=function(newEle,item){
//			var newNode=new node(newEle);
//			var current=this.find(item);
//			newNode.next=current.next;
//			newNode.previous=current;
//			current.next=newNode;
//		};
//		this.findprevious=function(item){
//			var  currnode=this.head;
//			while(!(currnode.next==null)&&(currnode.next.ele!=item)){
//				currnode=currnode.next;
//			};
//			return currnode;
//		};
//		this.remove=function(item){
////			var prevnode=this.findprevious(item);
////			if(!(prevnode.next==null)){
////				prevnode.next=prevnode.next.next;
////			};
//			var currnode=this.find(item);
//			if(!(currnode.next==null)){
//				currnode.previous.next=currnode.next;
//				currnode.next.previous=currnode.previous;
//				currnode.next=null;
//				currnode.previous=null;
//			};
//		};
//		this.display=function(){
//			var currNode=this.head;
//			while(!(currNode.next==null)){
//				console.log(currNode.next.ele);
//				currNode=currNode.next;
//			};
//		};
//		this.findlast=function(){
//			var currnode=this.head;
//			while(currnode.next!=null){
//				currnode=currnode.next;
//			};
//			return currnode;
//		};
//		this.dispreverse=function(){
//			var currnode=this.findlast();
//			while(currnode.previous!=null){
//				console.log(currnode.ele);
//				currnode=currnode.previous;
//			};
//		};
//	};
//	
//	var test=new LList();
//	test.insert("b","head");
//	test.insert("c","b");
//	test.insert("d","c");
//	console.log(test.find('c'))
//	test.display();
//	test.dispreverse();
//	console.log(test.findlast().ele);
//	test.remove("c");
//	test.display();
	
	
	//	循环链表
	function node(ele){
		this.ele=ele;
		this.next=null;
	};
	
	function LList(){
		this.head=new node("head");
		this.head.next=this.head;
		this.find=function(item){
			var currNode=this.head;
			while(currNode.ele!=item){
				currNode=currNode.next;
			};
			return currNode;
		};
		this.insert=function(newEle,item){
			var newNode=new node(newEle);
			var current=this.find(item);
			newNode.next=current.next;
			current.next=newNode;
		};
		this.findprevious=function(item){
			var  currnode=this.head;
			while(!(currnode.next==null)&&(currnode.next.ele!=item)){
				currnode=currnode.next;
			};
			return currnode;
		};
		this.remove=function(item){
			var prevnode=this.findprevious(item);
			if(!(prevnode.next==null)){
				prevnode.next=prevnode.next.next;
			};
		};
		this.display=function(){
			var currNode=this.head;
			while(currNode.next!=null&&currNode.next.ele!="head"){
				console.log(currNode.next.ele);
				currNode=currNode.next;
			};
		};
		this.shibing=function(n,m,num){
			while(n<m){
				n++;
				test.insert(n,n-1);
				if(n%num==0){
					console.log(n);
				};
		};
			
		};
	};
	
	var test=new LList();
	var a=1;
	test.insert(a,"head");
//	function shibing(){
//		while(a<10){
//			a++;
//			test.insert(a,a-1);
//			if(a%3==0){
////				test.remove(a);
//				console.log(a)
//			};
//			
//		};
//	};
//	shibing();
	test.shibing(a,40,3)
	test.display();
})
	
