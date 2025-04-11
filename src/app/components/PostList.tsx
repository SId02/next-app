
import { Post } from '@/app/pages/about/page'; 
interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-md shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-700">{post.body.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;

