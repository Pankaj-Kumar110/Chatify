import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4001",
    methods: ["GET", "POST"],
  },
});

// Store online users with their socket IDs
const users = {};

// Function to get receiver's socket ID
export const getReceiverSocketId = (receiverId) => {
  return users[receiverId];
};

// Listen for new socket connections
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  // Store the user's ID with their socket ID
  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;
  }

  // Send the list of online users to all connected clients
  io.emit("getOnlineUsers", Object.keys(users));

  // Listen for new messages
  socket.on("sendMessage", ({ senderId, receiverId, message }) => {
    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      // Update message status to "delivered"
      const messageData = {
        senderId,
        receiverId,
        message,
        status: "delivered",  // Default status
        timestamp: new Date(),
      };

      // Emit message to the recipient
      io.to(receiverSocketId).emit("receiveMessage", messageData);
    }
  });

  // Listen for "message seen" event
  socket.on("messageSeen", ({ messageId, receiverId }) => {
    const senderSocketId = getReceiverSocketId(receiverId);

    if (senderSocketId) {
      // Notify the sender that the message has been seen
      io.to(senderSocketId).emit("messageSeenConfirmation", { messageId });
    }
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete users[userId];
    io.emit("getOnlineUsers", Object.keys(users));
  });
});

export { app, io, server };
