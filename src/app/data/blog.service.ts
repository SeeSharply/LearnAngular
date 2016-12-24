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
}
