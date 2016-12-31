import {Comment} from './comment'
export let Comments:Comment[]=[];
export class CommentService
{
    public AddComment(com:Comment)
    {
        com.id=this.GetMaxId();
        Comments.push(com);
    }
    public GetBlogComments(blogId:number):Comment[]
    {
        return Comments.filter(x=>x.blogId==blogId);
    }
    private GetMaxId():number
    {
        var maxId=1;
        Comments.forEach(x=>{
            if(x.id>maxId)
              maxId=x.id;
         });
         return maxId;
    }
}