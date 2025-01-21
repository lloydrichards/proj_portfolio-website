import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../atom/avatar";
import { TeamMember } from "@/services/db/schema/team_member";

export const TeamMemberAvatar: FC<TeamMember> = ({
  firstName,
  lastName,
  imgUrl,
  role,
}) => {
  const fallback = `${firstName[0]}${lastName[0]}`;
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={imgUrl || undefined} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <strong>
        {firstName} {lastName}
      </strong>{" "}
      {`(${role})`}
    </div>
  );
};
