import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, MessageSquareIcon } from "lucide-react";
import Link from "next/link";

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  votes: number;
  replies: Comment[];
}

const mockComments: Comment[] = [
  {
    id: 1,
    author: "user1",
    content: "This is a great article!",
    timestamp: "2 hours ago",
    votes: 10,
    replies: [
      {
        id: 2,
        author: "user2",
        content: "I agree, very informative.",
        timestamp: "1 hour ago",
        votes: 5,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    author: "user3",
    content: "I have a different perspective on this.",
    timestamp: "3 hours ago",
    votes: 7,
    replies: [],
  },
];

const CommentCard: React.FC<{ comment: Comment; depth: number }> = ({
  comment,
  depth,
}) => (
  <Card className={`mb-4 ml-${depth * 4}`}>
    <CardContent className="p-4">
      <div className="flex items-center space-x-2 mb-2">
        <span className="font-bold">{comment.author}</span>
        <span className="text-gray-500 text-sm">{comment.timestamp}</span>
      </div>
      <p className="mb-2">{comment.content}</p>
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <ArrowUpIcon className="w-4 h-4" />
        <span>{comment.votes} points</span>
        <MessageSquareIcon className="w-4 h-4" />
        <span>{comment.replies.length} replies</span>
      </div>
    </CardContent>
  </Card>
);

const renderComments = (comments: Comment[], depth: number = 0) => (
  <>
    {comments.map((comment) => (
      <React.Fragment key={comment.id}>
        <CommentCard comment={comment} depth={depth} />
        {comment.replies.length > 0 &&
          renderComments(comment.replies, depth + 1)}
      </React.Fragment>
    ))}
  </>
);

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 block">
        ← Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">
        Post {params.id}: A brief history of Dell Unix (2008)
      </h1>
      <div className="mb-8">
        <p className="text-gray-700">
          This is where the content of the post would go. For now, it's just a
          placeholder.
        </p>
      </div>
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      {renderComments(mockComments)}
    </div>
  );
}
