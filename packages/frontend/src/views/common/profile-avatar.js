import {Avatar} from "@mui/material";
import {stringToColor} from "../../helpers/string-to-color";
import nameToTitle from "../../helpers/name-to-title";

export default function ProfileAvatar({user}) {
    const fullName = nameToTitle(`${user.firstName} ${user.lastName}`);
    return (
        <Avatar
            sx={{bgcolor: stringToColor(fullName)}}>
            {
                `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase()
            }
        </Avatar>
    );
}
