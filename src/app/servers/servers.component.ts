import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selecter: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server has been created.";
  serverName = 'Default Name';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreationStatus = "Server successfully created with name " + this.serverName;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = event.target.value;
  // }

}
