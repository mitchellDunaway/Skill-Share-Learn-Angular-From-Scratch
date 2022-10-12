import { ApplicationRef, Component, ViewChild, AfterViewInit } from "@angular/core";
import { PostComponent } from "./post/post.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {	
	
	// vars assigned here
	title:string = 'AngIntro';
	
	// incoming from child components
	@ViewChild(PostComponent) postComp: any;
	fromPostCompMessage?: string;
	emittedMessageFromPostComponent?: string;
	
	// outgoing to child components
	parentMessage:string = 'Message coming from parent component';
	
	constructor(){
	}

	receiveMessage($event: any){
		console.log($event);
		this.emittedMessageFromPostComponent = $event;
	}
	
	ngAfterViewInit(): void {
		//this.fromPostCompMessage = this.postComp.childMessage;
	}
}


