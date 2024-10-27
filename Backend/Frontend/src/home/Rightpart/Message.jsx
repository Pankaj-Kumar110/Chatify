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
          src="../../../public/photo.jpg"
          className={classes.avatar}
        />
      )}
      <div className={`${classes.msg} ${itsMe ? classes.right : classes.left}`}>
        <Typography variant="body2">{message.message}</Typography>
      </div>
      {itsMe && (
        <Avatar
          alt="User Avatar"
          src="../../../public/photo.jpg"
          className={classes.avatar}
        />
      )}
      <div className="text-xs text-gray-500 ml-1 self-end">{formattedTime}</div>
    </div>
  );
}

export default Message;





