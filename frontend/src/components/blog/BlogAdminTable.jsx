import React from 'react';
import { Link } from 'react-router-dom';

export const BlogAdminTable = ({ blogs, onDelete, isDeletingId }) => {
  if (!blogs.length) {
    return (
      <div className="rounded-[2rem] border border-dashed border-orange-500/30 bg-black/30 p-8 text-center text-orange-100/70">
        No blogs found yet. Create your first article from the admin panel.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-orange-500/20 bg-black/30">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-orange-100">
          <thead className="bg-orange-400/10 text-orange-200">
            <tr>
              <th className="px-5 py-4">Title</th>
              <th className="px-5 py-4">Slug</th>
              <th className="px-5 py-4">Author</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-t border-orange-500/10">
                <td className="px-5 py-4 font-medium text-white">{blog.title}</td>
                <td className="px-5 py-4 text-orange-100/75">{blog.slug}</td>
                <td className="px-5 py-4">{blog.author}</td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      blog.isPublished
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-amber-500/20 text-amber-300'
                    }`}
                  >
                    {blog.isPublished ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={`/admin/blogs/edit/${blog._id}`}
                      className="rounded-full border border-orange-400 px-4 py-2 text-xs font-semibold transition hover:bg-orange-400 hover:text-black"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => onDelete(blog._id)}
                      disabled={isDeletingId === blog._id}
                      className="rounded-full border border-red-400 px-4 py-2 text-xs font-semibold text-red-200 transition hover:bg-red-500 hover:text-white disabled:opacity-70"
                    >
                      {isDeletingId === blog._id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
