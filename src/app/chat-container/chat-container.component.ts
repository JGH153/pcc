import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pcc-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {

	chatBoxContent = "halla<br>Balla";
	inputTextBoxData = "";

	constructor() { }

	ngOnInit() {

		//TODO start retrive loop, and merge new text

	}

	onSubmit(data){
		this.chatBoxContent += "<br><b>Greger: </b>" + this.inputTextBoxData;
		this.inputTextBoxData = "";

		//TODO send to server
	}

}
