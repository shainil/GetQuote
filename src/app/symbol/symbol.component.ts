import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {

  constructor(private service:SharedService) { }

  symbol:any;
  quote:boolean = false;
  iserr:boolean = false;
  err:string = "";
  lookupfield:string = "Symbol Lookup";

  ngOnInit(): void {
    
   // this.getSymbol();
  }

  OnTextFocus(){
    this.lookupfield="";
    this.iserr = false;
  }

  getSymbol(){
    if(this.lookupfield == "" || this.lookupfield == "Symbol Lookup"){
      this.iserr = true;
      this.quote = false; 
    }
    else{
    this.service.getSymbol().subscribe(data=>{  
        this.symbol = data;
        this.quote = true; 
    })  
  } 
  }

 
 
}
