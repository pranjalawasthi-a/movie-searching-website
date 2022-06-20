import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private route:Router,
    private activeroute: ActivatedRoute
    ) {}

   isOnOverviewPage:boolean=false;
   currentPage:any = ""
   last="";
   ngOnInit(){
  //  console.log( this.activeroute.snapshot.params)
    this.route.events.subscribe(value => {
      if(value instanceof NavigationEnd)    
     //   console.log(this.route.url.toString());
        this.last=this.route.url.split("/")[3];
        if(this.last=="overview")
        this.isOnOverviewPage=true;
        else
        this.isOnOverviewPage=false;
       // this.isOnOverviewPage=this.route.url.split("/")[-1] === "overview";
   //     console.log(this.isOnOverviewPage);
      });
      // this.activeroute.snapshot.subscribe((params:any)=>{
      //   this.currentPage = params;
      //   if(params['movie']){
      //     this.isOnOverviewPage=true;
      //   }
      // })
   }
}
