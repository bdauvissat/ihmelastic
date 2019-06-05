import { Component, OnInit } from '@angular/core';
import {Client} from "elasticsearch";

declare var require: any;

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})

export class IndicesComponent implements OnInit {

  private client: Client;
  message: string = "coucou";
  constructor() { }

  ngOnInit() {
    this.client = new Client({
      host: 'http://localhost:9200',
      log: 'trace'
    });

    this.client.ping({
      requestTimeout: 30000,
    }, function (error) {
      if (error) {
        this.message = 'elasticsearch cluster is down!';
      } else {
        this.message = 'All is well';
      }
    });

  }

}
