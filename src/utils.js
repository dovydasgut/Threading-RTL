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

// Helper function to organize replies and activities into a chronological feed
// Activities appear between parent replies (threads), never interrupting subreplies
// Activities are auto-generated from subreplies - each subreply creates an activity
export const organizeRepliesWithActivities = (replies) => {
  const threads = organizeRepliesIntoThreads(replies);

  // Create a map of reply id to reply for quick lookup
  const replyMap = new Map();
  replies.forEach(reply => {
    replyMap.set(reply.id, reply);
  });

  // Create feed items from threads
  const feedItems = threads.map(thread => ({
    type: 'thread',
    timestamp: thread.parent.timestamp,
    data: thread
  }));

  // Generate activities from subreplies
  // Each subreply creates an activity notification
  threads.forEach(thread => {
    thread.subReplies.forEach(subreply => {
      const parent = thread.parent;
      feedItems.push({
        type: 'activity',
        timestamp: subreply.timestamp,
        data: {
          id: `activity-${subreply.id}`,
          type: 'reply_activity',
          timestamp: subreply.timestamp,
          authorUserNumber: subreply.userNumber,
          authorIsOJ: subreply.userType === 'OJ',
          targetUserNumber: parent.userNumber,
          targetIsOJ: parent.userType === 'OJ',
          targetReplyId: parent.id,
          subreplyId: subreply.id,
          duration: subreply.duration
        }
      });
    });
  });

  // Sort all items chronologically by timestamp
  feedItems.sort((a, b) => a.timestamp - b.timestamp);

  return feedItems;
};
