import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,NavigationEnd,Router} from '@angular/router';
import { filter, take } from 'rxjs';
import { MoviedataService } from '../services/moviedata.service';


@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor(
    private route:Router,
    private activeroute: ActivatedRoute,
  ) 
  { }
  moviename:any;
  movie="";
  ngOnInit(): void {
    this.activeroute.params.subscribe(params => {
      
      this.movie=params['searchterm'];
      if(this.movie=='MovieNotFound')
      {
        this.movie="";
      }
    });

    // this.route.events.subscribe(value => {
    //   if(value instanceof NavigationEnd)    
    //     console.log(this.route.url.toString());
    //     this.movie=this.route.url.split("/")[2]
    //     console.log(this.movie);
    //   });
  
  }

  
  gotoroute(){

  this.route.navigate(["search/",this.movie ]);
  }

}
