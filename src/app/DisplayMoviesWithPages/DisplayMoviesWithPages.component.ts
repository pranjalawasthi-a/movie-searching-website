import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router} from '@angular/router';
import { MoviedataService } from '../services/moviedata.service';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SearchresultComponent } from '../searchresult/searchresult.component';


@Component({
  selector: 'app-DisplayMoviesWithPages',
  templateUrl: './DisplayMoviesWithPages.component.html',
  styleUrls: ['./DisplayMoviesWithPages.component.css']
})
export class DisplayMoviesWithPagesComponent implements OnInit {

  constructor(
    private route:Router,
    private activeroute: ActivatedRoute,
    private userMovie:MoviedataService
    ) {}

  movies:any;
  movieshow:any;
  totalresults:any;
  numofpages:any;
  pageArr:any=[];
  pagenum=-1;
  moviename:any;
  moviecopy:any;
  pagenumber:any; 
  isChecked:boolean=false;

  ngOnInit(): void {
    
      this.activeroute.params.subscribe(params => {
      
      this.moviename=params['searchterm'];
      this.pagenumber=params['pageno'];
      if(!this.pagenumber)
      {
         this.pagenumber=1;
      }
      if(this.moviename )
      { 
         
         this.userMovie.movielist(this.moviename,this.pagenumber).subscribe((data:any)=>{
           

          if(!data?.search)
        {
          console.log(data);
          this.route.navigate(["search/","MovieNotFound"]);
        }
        
          this.movies=data.search;
                  
          console.log(data);
          this.totalresults=data.totalResults;
          this.numofpages = Math.ceil(this.totalresults / 10);
          for(let i=0 ;i<this.numofpages;i++)
          {
           this.pageArr[i]=i+1;
          }
        })
      }
    
  });
  }


//   this.moviecopy=data.Search.map((ele:any)=>{ 
            
            
        //   let ele2 = {title:ele.Title};
        //   let ele3 = {year:ele.Year};
        //     // console.log(ele2);
        //     // console.log(ele3);
        //    // return ele2;
        //  });
        //  console.log(data);
        
        // if(!data?.Search)
        // {
          //console.log(data);
          // this.route.navigate(["search/","MovieNotFound"]);
        // }

  // ConvertToCamel(moviecopy:any)
  // {
   
  //  for(const [key, value] of Object.entries(moviecopy))
  //  {
  //    if(key=="Title"){
  //     key="title";
  //    }
  //  }
  // }

  checkyear(year:string)
  {
    var y: number = +year;
   // console.log(2012<y);
    return 2012<y;
  }

  GoForRouting(name:any)
  {
    this.route.navigate(["search/",name,"overview"]);
  }
  sendingmoviename(pagenumber:any){
    const searchterm = this.activeroute.snapshot.paramMap.get('searchterm')
    this.route.navigate(["search/",searchterm,"page",pagenumber]);
  }
    
}
 

// search/movie/overview