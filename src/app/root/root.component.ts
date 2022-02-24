import { Component, OnInit } from '@angular/core';

@Component({
selector: 'my-root',
templateUrl: './root.component.html',
styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

isListPresented: boolean = true;

onOffBtnText='show'
constructor() { }

showHideList()
{
    this.isListPresented=!this.isListPresented
    if(!this.isListPresented)
    {
        this.onOffBtnText="show"
    }
    else
    this.onOffBtnText="hide"
    
}
ngOnInit(): void {
}

}