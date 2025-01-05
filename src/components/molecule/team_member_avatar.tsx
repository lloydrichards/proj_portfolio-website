import { TeamMember } from "@/types/domain";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../atom/avatar";

export const TeamMemberAvatar: FC<TeamMember> = ({ name, image, role }) => {
  const fallback = name
    .split(" ")
    .map((c) => c.at(0))
    .join("");
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <strong>{name}</strong> {`(${role})`}
    </div>
  );
};
