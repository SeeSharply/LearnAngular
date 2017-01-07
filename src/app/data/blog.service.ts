import { Injectable } from '@angular/core';
import {Http,Response ,Headers} from "@angular/http";

import 'rxjs/Rx';

import { Blog,BLOGS } from './blog';

@Injectable()
export class BlogService {
  private apiUrl="app/blogs";
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http:Http){}

  getBlogs():Promise<Blog[]> {
    return this.http.get(this.apiUrl)
    .toPromise()
    .then(r=> r.json().data as Blog[]); //BLOGS;
  }
  getSelectedBlog(id:number):Promise<Blog>
  {
    let blog=new Blog();
    return this.getBlogs().then(blogs=>blogs.find(x=>x.id==id));
  }

  create(title: string):Promise<Blog> {
     return this.http
      .post(this.apiUrl, JSON.stringify({title: title}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data);
      
  }

  editBlog(blog:Blog)
  {
    let editBlog= BLOGS.find(x=>x.id==blog.id);
    editBlog=blog;
  }
  addBlog(blog:Blog):string
  {
    var maxId=0;
    BLOGS.forEach(x=>{
        if(x.id>maxId)
          maxId=x.id;
     });
     blog.id=maxId;
     if(blog.title.length==0)
     {
       return "title 不能未空";
     }
     else{
       BLOGS.push(blog);
       return "success";
     }
  }
}
