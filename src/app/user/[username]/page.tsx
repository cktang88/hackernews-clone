import Link from "next/link";

export default function UserProfile({
  params,
}: {
  params: { username: string };
}) {
  // In a real app, you'd fetch user data here based on the username
  const userData = {
    username: params.username,
    created: "April 11, 2020",
    karma: 166,
    about: "(user specified bio)",
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User: {userData.username}</h1>
      <div className="space-y-2">
        <p>created: {userData.created}</p>
        <p>karma: {userData.karma}</p>
        <p>about: {userData.about}</p>
        <div className="space-x-4">
          <Link
            href={`/user/${userData.username}/submissions`}
            className="text-blue-500 hover:underline"
          >
            submissions
          </Link>
          <Link
            href={`/user/${userData.username}/comments`}
            className="text-blue-500 hover:underline"
          >
            comments
          </Link>
          <Link
            href={`/user/${userData.username}/favorites`}
            className="text-blue-500 hover:underline"
          >
            favorites
          </Link>
        </div>
      </div>
    </div>
  );
}
