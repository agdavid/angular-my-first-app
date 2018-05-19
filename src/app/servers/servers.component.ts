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
  serverName = '';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreationStatus = "Server successfully created.";
  }

  onUpdateServerName(event: Event) {
    this.serverName = event.target.value;
  }

}
