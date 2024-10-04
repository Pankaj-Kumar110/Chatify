// import React from "react";

// function Message({ message }) {
//   const authUser = JSON.parse(localStorage.getItem("ChatApp"));
//   const itsMe = message.senderId === authUser.user._id;

//   const chatName = itsMe ? " chat-end" : "chat-start";
//   const chatColor = itsMe ? "bg-blue-500" : "";

//   const createdAt = new Date(message.createdAt);
//   const formattedTime = createdAt.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
//   return (
//     <div>
//       <div className="p-4">
//         <div className={`chat ${chatName}`}>
//           <div className={`chat-bubble text-white ${chatColor}`}>
//             {message.message}
//           </div>
//           <div className="chat-footer">{formattedTime}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Message;




import React from "react";
import { makeStyles } from "@mui/styles";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme) => {
  const radius = theme.spacing(2.5);
  const size = theme.spacing(4);
  const rightBgColor = theme.palette.primary.main;

  return {
    avatar: {
      width: size,
      height: size,
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1)
    },
    msg: {
      padding: theme.spacing(1, 2),
      borderRadius: 4,
      marginBottom: 4,
      display: "inline-block",
      wordBreak: "break-word",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: "14px",
    },
    left: {
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      backgroundColor: theme.palette.grey[300],
    },
    right: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      backgroundColor: rightBgColor,
      color: theme.palette.common.white,
    },
  };
});

function Message({ message }) {
  const classes = useStyles();
  const authUser = JSON.parse(localStorage.getItem("ChatApp")) || {};
  const itsMe = message.senderId === authUser.user?._id;

  const formattedTime = new Date(message.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex p-2 ${itsMe ? "justify-end" : "justify-start"}`}>
      {!itsMe && (
        <Avatar
          alt="User Avatar"
          src="data:image/png;base64,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"
          className={classes.avatar}
        />
      )}
      <div className={`${classes.msg} ${itsMe ? classes.right : classes.left}`}>
        <Typography variant="body2">{message.message}</Typography>
      </div>
      {itsMe && (
        <Avatar
          alt="User Avatar"
          src="data:image/png;base64,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"
          className={classes.avatar}
        />
      )}
      <div className="text-xs text-gray-500 ml-1 self-end">{formattedTime}</div>
    </div>
  );
}

export default Message;





