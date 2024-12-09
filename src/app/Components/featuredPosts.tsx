import React from "react";
export default function FeaturedPosts() {
    const posts = [
      {
        image: '/fixed-height.jpg', // Replace with the path to your images
        title: 'Loudest à la Madison #1 (L\'integral)',
        date: '22 April 2021',
        comments: '10 comments',
      },
      {
        image: '/image2.jpg',
        title: 'Loudest à la Madison #1 (L\'integral)',
        date: '22 April 2021',
        comments: '10 comments',
      },
      {
        image: '/image3.jpg',
        title: 'Loudest à la Madison #1 (L\'integral)',
        date: '22 April 2021',
        comments: '10 comments',
      },
    ];
  
    return (
      <section className="my-12">
        <h2 className="text-center text-3xl font-bold">Featured Posts</h2>
        <p className="text-center text-gray-500">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {posts.map((post, index) => (
            <div key={index} className="border rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">NEW</span>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-400">Google &middot; Trending &middot; New</div>
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-gray-600 mt-2">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                  <div>{post.date}</div>
                  <div>{post.comments}</div>
                </div>
                <a href="#" className="text-blue-500 mt-4 inline-block">Learn More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  