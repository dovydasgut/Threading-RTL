import { userColors } from './data';

// Get random color based on seed (user number)
export const getRandomColor = (seed) => userColors[seed % userColors.length];

// Helper function to organize replies into threads
export const organizeRepliesIntoThreads = (replies) => {
  const threads = [];
  const replyMap = new Map();

  // First pass: identify all parent replies and create thread structure
  replies.forEach(reply => {
    if (reply.parentId === null) {
      // This is a parent reply, start a new thread
      threads.push({
        parent: reply,
        subReplies: []
      });
      replyMap.set(reply.id, threads[threads.length - 1]);
    }
  });

  // Second pass: add sub-replies to their parent threads
  replies.forEach(reply => {
    if (reply.parentId !== null) {
      const parentThread = replyMap.get(reply.parentId);
      if (parentThread) {
        parentThread.subReplies.push(reply);
      }
    }
  });

  // Sort sub-replies by timestamp within each thread
  threads.forEach(thread => {
    thread.subReplies.sort((a, b) => a.timestamp - b.timestamp);
  });

  return threads;
};
