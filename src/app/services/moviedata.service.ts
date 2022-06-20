import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, convertToParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';
import { map}from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviedataService {

  constructor(private http:HttpClient) { }
  url="https://www.omdbapi.com/";
  val:any;
  movielistname:any;
  moviearr:any; 
  moviecopy:any;
  // get movie(){
  //  return this.movielistname;
  // }
 
  
  
  movielist(movieName:any,pagenumber:any){
    let newobj;
        return this.http.get(this.url+"?s="+movieName+"&apikey=3e2e0d38"+"&page="+pagenumber)
        .pipe(
          map((data:any)=>{
       
              if(data && data.Search){
                      this.moviecopy=data.Search.map((ele:any)=>{ 
                      newobj={
                      title:ele.Title,
                      year:ele.Year,
                      imdbId:ele.imdbID,
                      poster:ele.Poster
                    } 
                      return newobj;
                 }); 
                 //console.log(this.moviecopy);
                 return {search:this.moviecopy,totalResults:data.totalResults};
                // return observer.next(this.moviecopy);
            } 
            return {};
        })
        )
      }
       // return observer.next({});
   // })
  
    // return 
    // console.log(cusobj1);
   // return observer.next();
   // return this.http.get(this.url+"?s="+movieName+"&apikey=3e2e0d38"+"&page="+pagenumber);
    // this.moviearr.subscribe((data:any)=>{
      
    //   this.moviecopy=data.Search.map((ele:any)=>{ 
    //          //  console.log(this.moviearr);
    //     let ele2 = {title:ele.Title};
    //     let ele3 = {year:ele.Year};
       
    //      // console.log(ele2);
    //      // return ele2;
    //    });
    //    console.log(this.moviecopy);
    // })
   
  

    //   this.val.Search.map((ele:any)=>{ 
         
            
    //       let ele2 = {title:ele.Title};
    //       let ele3 = {year:ele.Year};
    //         console.log(ele2);
    //         console.log(ele3);
           
    //      });
    //  return this.val;
   
  //   let newobj;
  //   return Observable.create((observer:any) => {
  //      this.http.get(this.url+"?s="+movieName+"&apikey=3e2e0d38"+"&page="+pagenumber).subscribe((data:any)=>{
  //      console.log(data.Search);
  //            if(data){
  //                    this.moviecopy=data.Search.map((ele:any)=>{ 
  //                    newobj={
  //                    title:ele.Title,
  //                    year:ele.Year,
  //                    imdbid:ele.imdbID,
  //                    poster:ele.Poster
  //                  } 
  //                    return newobj;
  //               });
  //               console.log(this.moviecopy);
  //               return observer.next(this.moviecopy);
  //          }
  //      })
   
  //      return observer.next({});
  //  })

      
  
  gettingmovie(movieName:any)
  {
      
     this.movielistname = movieName;
      
    return this.http.get(this.url+"?i="+movieName+"&apikey=3e2e0d38");
  }
}
