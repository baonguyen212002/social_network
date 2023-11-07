import { CircleAvatar } from "../circle_avatar";

export default function UserAvatarStory({
  url,
  size,
  haveSeenBefore,
}) {
  return (
    <div
      className={
        !haveSeenBefore
          ? "p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-600 rounded-full"
          : "border-[1px] rounded-full"
      }
    >
      <div className="p-[2px] bg-white rounded-full">
        <CircleAvatar url={url} size={size} onClick={() => console.log("")} />
      </div>
    </div>
  );
}
