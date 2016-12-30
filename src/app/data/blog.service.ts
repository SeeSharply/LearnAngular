import { Injectable } from '@angular/core';

import { Blog,BLOGS } from './blog';

@Injectable()
export class BlogService {
  getBlogs(): Blog[] {
    return BLOGS;
  }
  getSelectedBlog(id:number):Blog
  {
     return this.getBlogs().find(x=>x.id==id);
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
