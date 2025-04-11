
'use client';

import { useState, useEffect } from 'react';
import PostList from '../../components/PostList';
import ShowMoreButton from '../../components/ShowMoreButton';

export interface Post {
  id: number;
  title: string;
  body: string;
}

const ITEMS_PER_PAGE = 6; // Initial number of items to display

const AboutPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showMoreVisible, setShowMoreVisible] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
        setVisiblePosts(data.slice(0, ITEMS_PER_PAGE));
        setShowMoreVisible(data.length > ITEMS_PER_PAGE);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred.');
        }
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleShowMore = () => {
    const nextBatch = posts.slice(visiblePosts.length, visiblePosts.length + ITEMS_PER_PAGE);
    setVisiblePosts((prevVisiblePosts) => [...prevVisiblePosts, ...nextBatch]);
    if (visiblePosts.length + ITEMS_PER_PAGE >= posts.length) {
      setShowMoreVisible(false);
    }
  };

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error loading posts: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">This is the about page of our application.</p>

      <h2 className="text-xl font-semibold mb-2">Our Blog Posts</h2>
      <PostList posts={visiblePosts} />

      {showMoreVisible && (
        <div className="flex justify-center mt-4">
          <ShowMoreButton onClick={handleShowMore} />
        </div>
      )}
    </div>
  );
};

export default AboutPage;