import { Component, OnInit } from '@angular/core';
import {Client} from "elasticsearch-browser";

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
      requestTimeout: Infinity,
      body: 'hello JavaSampleApproach!'
    });
  }

}
