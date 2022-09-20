import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-post",
	templateUrl: "./post.component.html",
	styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {

	// incoming from parent component
	@Input() fromParent:string | undefined;
	
	// outgoing to parent
	childMessage:string = "passing data from app-post (child) to app-root (parent)"

	// incoming from child components

	// outgoing to child components

	// local
	title: string = "List of Posts";
	postListData:string = "string coming from post component";

	constructor() {}

	ngOnInit(): void {}
}
