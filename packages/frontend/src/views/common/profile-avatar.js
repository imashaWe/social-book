import {Avatar} from "@mui/material";
import {stringToColor} from "../../helpers/string-to-color";
import nameToTitle from "../../helpers/name-to-title";

export default function ProfileAvatar({user}) {
    const fullName = nameToTitle(`${user.fistName} ${user.lastName}`);
    return (
        <Avatar
            alt={fullName}
            src="/static/images/avatar/2.jpg"
            sx={{bgcolor: stringToColor(fullName)}}/>
    );
}
