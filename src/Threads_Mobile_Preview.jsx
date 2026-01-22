import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Rocket, Share, Pin, ArrowDownUp, MoreHorizontal, CornerUpLeft } from 'lucide-react';

// Import icons
import {
  OJIcon,
  GuestIcon,
  CommentIcon,
  ArrowRightSmall,
} from './icons';

// Import components
import {
  ChannelTag,
  LocationItem,
  Timestamp,
  PostHeader,
  ReplyHeader,
  VoteCount,
  PostBar,
  SwipeableReply,
} from './components';

// Import data
import { mockData, OJ_COLOR } from './data';

// Import utils
import { getRandomColor, organizeRepliesIntoThreads } from './utils';

export default function ThreadingApp() {
  // For OJ, use the post's background color (green)
  const ojColor = OJ_COLOR;

  // View state: 'feed' or 'postDetail'
  const [currentView, setCurrentView] = useState('feed');
  const [selectedPost, setSelectedPost] = useState(null);

  // Post data - will be set when a post is opened
  const [post, setPost] = useState(mockData.posts[0]);

  // Thread view state
  const [openThread, setOpenThread] = useState(null); // null or { parent, subReplies }
  const [scrollBackToReplyId, setScrollBackToReplyId] = useState(null);
  const [scrollBackToParentId, setScrollBackToParentId] = useState(null);
  const mainScrollRef = useRef(null);
  const threadScrollRef = useRef(null);

  // Vote states for main post
  const [mainPostVotes, setMainPostVotes] = useState(mockData.posts[0].votes);
  const [mainPostVoteState, setMainPostVoteState] = useState('default');

  // Handle upvote
  const handleUpvote = (currentState, setVoteState, votes, setVotes) => {
    if (currentState === 'upvoted') {
      setVoteState('default');
      setVotes(votes - 1);
    } else if (currentState === 'downvoted') {
      setVoteState('upvoted');
      setVotes(votes + 2);
    } else {
      setVoteState('upvoted');
      setVotes(votes + 1);
    }
  };

  // Handle downvote
  const handleDownvote = (currentState, setVoteState, votes, setVotes) => {
    if (currentState === 'downvoted') {
      setVoteState('default');
      setVotes(votes + 1);
    } else if (currentState === 'upvoted') {
      setVoteState('downvoted');
      setVotes(votes - 2);
    } else {
      setVoteState('downvoted');
      setVotes(votes - 1);
    }
  };

  // Input state for PostBar
  const [inputValue, setInputValue] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null); // null for main thread, or { id, userNumber } for replying to specific user
  const inputRef = useRef(null);

  // Replies state - now with parentId to track sub-replies
  const [replies, setReplies] = useState((mockData.repliesByPostId[1] || []).map(reply => ({
    ...reply,
    voteState: 'default'
  })));

  // Current user's number - next chronological number after highest existing user
  const [myUserNumber] = useState(() => {
    const allReplies = Object.values(mockData.repliesByPostId).flat();
    const existingNumbers = allReplies.map(r => r.userNumber).filter(n => n !== null);
    return Math.max(...existingNumbers) + 1;
  });

  // Loading state for posting
  const [isPosting, setIsPosting] = useState(false);

  // Ref for scrolling to bottom
  const scrollContainerRef = useRef(null);
  const bottomRef = useRef(null);

  // Visual viewport height and offset state for iOS keyboard handling
  const [viewportHeight, setViewportHeight] = useState('100dvh');
  const [viewportOffset, setViewportOffset] = useState('0px');

  // Scroll to bottom helper
  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  // Handle iOS visual viewport changes (keyboard open/close)
  useEffect(() => {
    const handleViewportChange = () => {
      if (window.visualViewport) {
        const vh = window.visualViewport.height;
        const offsetTop = window.visualViewport.offsetTop;
        setViewportHeight(`${vh}px`);
        setViewportOffset(`${offsetTop}px`);
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange);
      window.visualViewport.addEventListener('scroll', handleViewportChange);
      // Set initial value
      handleViewportChange();
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
        window.visualViewport.removeEventListener('scroll', handleViewportChange);
      }
    };
  }, []);

  // Track highlighted reply (for the white overlay effect)
  const [highlightedReplyId, setHighlightedReplyId] = useState(null);

  // Refs for each reply to scroll to
  const replyRefs = useRef({});

  // Handle canceling reply to user
  const handleCancelReply = () => {
    setReplyingTo(null);
    setInputValue('');
    setIsInputActive(false);
  };

  // Handle opening a thread view
  const handleOpenThread = (parent, subReplies, lastVisibleReplyId = null, scrollToReplyId = null) => {
    // Save the reply ID that was clicked so we can scroll back to it
    // Also save parent ID as fallback if subreply is not visible
    setScrollBackToReplyId(scrollToReplyId || parent.id);
    setScrollBackToParentId(parent.id);

    // Calculate the offset of the last visible reply from the top of the viewport
    let replyOffsetFromTop = null;
    if (lastVisibleReplyId && replyRefs.current[lastVisibleReplyId]) {
      const replyElement = replyRefs.current[lastVisibleReplyId];
      const rect = replyElement.getBoundingClientRect();
      replyOffsetFromTop = rect.top;
    }

    // Clear reply state when navigating
    setReplyingTo(null);
    setInputValue('');
    setIsInputActive(false);
    setOpenThread({ parent, subReplies, lastVisibleReplyId, replyOffsetFromTop, scrollToReplyId });
  };

  // Handle closing thread view and restoring scroll position
  const handleCloseThread = () => {
    // Clear reply state when navigating
    setReplyingTo(null);
    setInputValue('');
    setIsInputActive(false);
    setOpenThread(null);
    // scrollBackToReplyId is already set, useEffect will scroll to it
  };

  // Handle clicking reply button on a specific reply
  const handleReplyToUser = (replyId, userNumber) => {
    setReplyingTo({ id: replyId, userNumber });
    setInputValue(`@${userNumber} `);
    setIsInputActive(true);

    // Highlight the reply being responded to with fade in
    setHighlightedReplyId(replyId);

    // Remove highlight after 1500ms (will fade out)
    setTimeout(() => {
      setHighlightedReplyId(null);
    }, 1500);

    // Focus the input immediately and with delays to ensure keyboard opens
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Also try after state updates
    requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.click();
      }
    });
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 50);
  };

  // Handle posting a new reply
  const handlePostReply = () => {
    if (inputValue.trim() === '' || isPosting) return;

    const replyText = inputValue;
    const replyingToId = replyingTo ? replyingTo.id : null;

    // Start loading
    setIsPosting(true);
    setInputValue('');

    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
    }

    // Generate the new reply ID and timestamp
    const newReplyId = Date.now();
    const newTimestamp = Date.now();

    // After 200ms: insert the reply
    setTimeout(() => {
      const newReply = {
        id: newReplyId,
        userNumber: myUserNumber,
        text: replyText,
        duration: '1s',
        timestamp: newTimestamp,
        distance: 'close',
        votes: 0,
        voteState: 'default',
        parentId: replyingToId || null
      };

      // Determine the thread root ID
      let threadRootId = null;

      if (replyingToId) {
        // Find the parent reply to get its parentId (to determine the thread root)
        const parentReply = replies.find(r => r.id === replyingToId);
        // The thread root is either the parent's parentId (if parent is a sub-reply) or the parent itself
        threadRootId = (parentReply && parentReply.parentId) ? parentReply.parentId : replyingToId;
      } else if (openThread) {
        // If we're in thread details view without a specific replyingTo, reply to the thread parent
        threadRootId = openThread.parent.id;
      }

      if (threadRootId) {
        // Set the new reply's parentId to the thread root (all sub-replies point to the main reply)
        newReply.parentId = threadRootId;

        // Find the position to insert: after the last sub-reply of this thread
        setReplies(prev => {
          const newReplies = [...prev];

          // Find all replies in this thread (same parentId as threadRootId)
          // and find the index of the last one
          let lastSubReplyIndex = -1;
          for (let i = 0; i < newReplies.length; i++) {
            if (newReplies[i].id === threadRootId || newReplies[i].parentId === threadRootId) {
              lastSubReplyIndex = i;
            }
          }

          if (lastSubReplyIndex !== -1) {
            // Insert after the last sub-reply in the thread
            newReplies.splice(lastSubReplyIndex + 1, 0, newReply);
          } else {
            // Fallback: add to end
            newReplies.push(newReply);
          }

          return newReplies;
        });
      } else {
        // Add to the end for main thread replies (new parent reply)
        setReplies(prev => [...prev, newReply]);
      }

      setIsPosting(false);
      setReplyingTo(null);
      // Keep input active so keyboard stays open
      setIsInputActive(true);

      // Scroll to the new reply after it's inserted
      setTimeout(() => {
        if (replyRefs.current[newReplyId]) {
          replyRefs.current[newReplyId].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }, 200);
  };

  // Handle vote for replies
  const handleReplyVote = (replyId, voteType) => {
    setReplies(replies.map(reply => {
      if (reply.id !== replyId) return reply;

      let newVotes = reply.votes;
      let newState = reply.voteState;

      if (voteType === 'up') {
        if (reply.voteState === 'upvoted') {
          newState = 'default';
          newVotes = reply.votes - 1;
        } else if (reply.voteState === 'downvoted') {
          newState = 'upvoted';
          newVotes = reply.votes + 2;
        } else {
          newState = 'upvoted';
          newVotes = reply.votes + 1;
        }
      } else {
        if (reply.voteState === 'downvoted') {
          newState = 'default';
          newVotes = reply.votes + 1;
        } else if (reply.voteState === 'upvoted') {
          newState = 'downvoted';
          newVotes = reply.votes - 2;
        } else {
          newState = 'downvoted';
          newVotes = reply.votes - 1;
        }
      }

      return { ...reply, votes: newVotes, voteState: newState };
    }));
  };

  // Scroll back to the reply when returning from thread view
  useEffect(() => {
    if (!openThread && scrollBackToReplyId) {
      // Wait for DOM to be ready
      setTimeout(() => {
        // Try to scroll to the exact reply first
        let replyElement = replyRefs.current[scrollBackToReplyId];

        // If subreply is not visible (hidden), fall back to parent reply
        if (!replyElement && scrollBackToParentId) {
          replyElement = replyRefs.current[scrollBackToParentId];
        }

        if (replyElement) {
          replyElement.scrollIntoView({ behavior: 'instant', block: 'center' });
        }

        setScrollBackToReplyId(null);
        setScrollBackToParentId(null);
      }, 50);
    }
  }, [openThread, scrollBackToReplyId, scrollBackToParentId]);

  // Handle opening a post from feed
  const handleOpenPost = (feedPost) => {
    setSelectedPost(feedPost);
    setPost(feedPost);
    setMainPostVotes(feedPost.votes);
    setMainPostVoteState('default');
    // Load replies for this post
    const postReplies = mockData.repliesByPostId[feedPost.id] || [];
    setReplies(postReplies.map(reply => ({
      ...reply,
      voteState: 'default'
    })));
    setCurrentView('postDetail');
    // Clear reply state when navigating
    setReplyingTo(null);
    setInputValue('');
    setIsInputActive(false);
  };

  // Handle going back to feed
  const handleBackToFeed = () => {
    setCurrentView('feed');
    setSelectedPost(null);
    setOpenThread(null);
    // Clear reply state when navigating
    setReplyingTo(null);
    setInputValue('');
    setIsInputActive(false);
  };

  // Feed View
  if (currentView === 'feed') {
    return (
      <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '393px', margin: '0 auto', position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', fontFamily: '"GothamBook", Gotham, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400, direction: 'rtl', overflowY: 'auto' }}>
        {/* Feed Header */}
        <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '48px', padding: '0 16px', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: '#f2f2f6', borderRadius: '9999px', padding: '8px', display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ color: '#404044', fontSize: '12px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>Upgrade</span>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6 10.271C6 6.80403 8.68286 4 12 4C15.3171 4 18 6.80403 18 10.271C18 13.3947 15.3511 16.4996 13.5762 18.5801C13.2284 18.9878 12.9142 19.3561 12.66 19.6775C12.3171 20.1075 11.6914 20.1075 11.3486 19.6775C11.0967 19.3607 10.7867 18.9983 10.4439 18.5977C8.66383 16.5171 6 13.4035 6 10.271ZM9.85714 10C9.85714 11.1829 10.8171 12.1429 12 12.1429C13.1829 12.1429 14.1429 11.1829 14.1429 10C14.1429 8.81715 13.1829 7.85715 12 7.85715C10.8171 7.85715 9.85714 8.81715 9.85714 10Z" fill="#FA7E0A"/>
            </svg>
            <span style={{ color: '#404044', fontSize: '16px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>Berlin</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6241 6.96286L9.99468 10.891L5.3653 6.96286C5.14239 6.77329 4.83975 6.66675 4.52414 6.66675C4.20853 6.66675 3.90589 6.77329 3.68298 6.96286C3.21765 7.3577 3.21765 7.99551 3.68298 8.39035L9.15949 13.0373C9.62481 13.4321 10.3765 13.4321 10.8418 13.0373L16.3183 8.39035C16.7836 7.99551 16.7836 7.3577 16.3183 6.96286C15.853 6.57815 15.0894 6.56802 14.6241 6.96286Z" fill="#8C8C90"/>
            </svg>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span style={{ color: '#404044', fontSize: '14px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>100500</span>
            <span style={{ color: '#FA7E0A', fontSize: '8px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}>MY KARMA</span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', borderBottom: '1px solid #f2f2f6' }}>
          <div style={{ flex: 1, padding: '8px 40px 16px', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0.3 }}>
            <span style={{ color: '#8C8C90', fontSize: '16px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>Top 10</span>
          </div>
          <div style={{ flex: 1, padding: '8px 40px 16px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <span style={{ color: '#404044', fontSize: '16px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>Home</span>
            <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '112px', height: '3px', backgroundColor: '#FA7E0A', borderRadius: '9999px' }} />
          </div>
        </div>

        {/* Sorting Bar */}
        <div style={{ backgroundColor: 'white', padding: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ backgroundColor: '#FA7E0A', borderRadius: '9999px', padding: '8px', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: '12px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>Newest</span>
          </div>
          <div style={{ backgroundColor: '#f2f2f6', borderRadius: '9999px', padding: '8px', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#404044', fontSize: '12px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>Most Commented</span>
          </div>
          <div style={{ backgroundColor: '#f2f2f6', borderRadius: '9999px', padding: '8px', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#404044', fontSize: '12px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>Loudest</span>
          </div>
        </div>

        {/* Feed Content */}
        <div style={{ flex: 1, backgroundColor: '#f2f2f6', padding: '16px 8px', display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
          {/* Multiple Post Cards using mockData.posts */}
          {mockData.posts.map((feedPost) => {
            const postReplies = mockData.repliesByPostId[feedPost.id] || [];
            const replyCount = postReplies.length;

            return (
              <div
                key={feedPost.id}
                onClick={() => handleOpenPost(feedPost)}
                style={{
                  backgroundColor: ojColor,
                  borderRadius: '8px',
                  padding: '16px',
                  paddingLeft: '56px',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <ChannelTag channel={feedPost.channel} />
                  <LocationItem distance={feedPost.distance} />
                  <Timestamp duration={feedPost.duration} />
                </div>

                {/* Body */}
                <p style={{ color: 'white', fontSize: '16px', fontFamily: '"GothamBook", Gotham, sans-serif', lineHeight: '20px', margin: 0, marginBottom: '16px' }}>
                  {feedPost.text}
                </p>
                <span style={{ color: 'white', fontSize: '16px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>{feedPost.hashtag}</span>

                {/* Vote Count */}
                <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                  <VoteCount
                    initialVotes={feedPost.votes}
                    voteState="default"
                    onUpvote={() => {}}
                    onDownvote={() => {}}
                  />
                </div>

                {/* More button */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  style={{ position: 'absolute', left: '16px', top: '16px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  <MoreHorizontal style={{ width: '24px', height: '24px', color: 'white' }} />
                </button>

                {/* Footer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '16px' }}>
                  <CommentIcon />
                  <span style={{ color: 'white', fontSize: '10px', fontFamily: '"GothamBook", Gotham, sans-serif' }}>{replyCount}</span>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '2px 4px', marginLeft: '4px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27.5 7C26.8787 7 26.375 7.50368 26.375 8.125V10.375H24.125C23.5037 10.375 23 10.8787 23 11.5C23 12.1213 23.5037 12.625 24.125 12.625H26.375V14.875C26.375 15.4963 26.8787 16 27.5 16C28.1213 16 28.625 15.4963 28.625 14.875V12.625H30.875C31.4963 12.625 32 12.1213 32 11.5C32 10.8787 31.4963 10.375 30.875 10.375H28.625V8.125C28.625 7.50368 28.1213 7 27.5 7Z" fill="white"/>
                      <path d="M8.19798 12.6175C8.18842 12.0819 8.6284 11.6323 9.17359 11.6323C9.72835 11.6228 10.1492 12.0532 10.1492 12.608C10.1492 13.1531 9.73791 13.574 9.19272 13.574C8.63796 13.5836 8.20754 13.1531 8.19798 12.6175Z" fill="white"/>
                      <path d="M13.8795 12.5984C13.8795 12.0436 14.2621 11.661 14.8264 11.661C15.3812 11.661 15.802 12.0628 15.802 12.5984C15.802 13.1436 15.3907 13.5549 14.836 13.5549C14.2716 13.5549 13.8795 13.1627 13.8795 12.5984Z" fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 15.4965C21.7322 13.6505 21.12 11.948 19.9531 10.4654C19.8384 10.3124 19.8001 10.1689 19.8384 9.97764C20.0488 8.94464 20.2592 7.91164 20.4409 6.87864C20.5653 6.16128 20.6514 5.44392 20.5748 4.717C20.5079 4.06659 20.2975 3.88486 19.6758 4.06659C18.9871 4.26745 18.308 4.50657 17.6671 4.81264C16.7203 5.2651 15.7882 5.76159 14.8579 6.25711L14.8566 6.25781C14.7254 6.32772 14.5942 6.39761 14.4629 6.46735C14.1473 6.63952 13.8317 6.70647 13.4778 6.64909C12.99 6.57257 12.4926 6.53431 12.0048 6.52474C11.517 6.52474 11.0196 6.57257 10.5318 6.64909C10.1779 6.70647 9.86227 6.63952 9.54663 6.46735C9.21665 6.29647 8.88849 6.12287 8.56046 5.94934C7.82357 5.55951 7.08737 5.17005 6.33286 4.81264C5.69201 4.50657 5.00335 4.26745 4.32425 4.06659C3.70253 3.88486 3.49211 4.06659 3.42516 4.717C3.34864 5.44392 3.43472 6.17084 3.55906 6.87864C3.74079 7.91164 3.95122 8.94464 4.16165 9.97764C4.1999 10.1689 4.17121 10.3124 4.04687 10.4654C2.87996 11.948 2.26781 13.6601 2 15.4965C2 15.5061 2 15.5252 2.00956 15.573C2.1626 15.5826 2.31564 15.5922 2.45911 15.5922C2.8417 15.5922 3.20517 15.6783 3.5495 15.8313C4.10426 16.08 4.42946 16.5104 4.51554 17.113C4.54424 17.3043 4.5538 17.5051 4.54424 17.706C4.53467 17.9069 4.62076 18.0025 4.82162 18.0312C5.55811 18.1268 6.2659 18.3277 6.92587 18.6816C7.0615 18.7552 7.19398 18.8304 7.32587 18.9053C7.51953 19.0152 7.7119 19.1244 7.91105 19.2268C9.21186 19.9059 10.5701 20.2789 11.9952 20.2885C13.4204 20.2789 14.7786 19.9059 16.0794 19.2268C16.3203 19.1029 16.5563 18.9691 16.7909 18.8361C16.8821 18.7843 16.9735 18.7325 17.0646 18.6816C17.7245 18.3277 18.4323 18.1173 19.1688 18.0312C19.3697 18.0025 19.4558 17.9069 19.4462 17.706C19.4366 17.5051 19.4462 17.3043 19.4749 17.113C19.561 16.5104 19.8862 16.08 20.4409 15.8313C20.7853 15.6783 21.1487 15.5922 21.5313 15.5922C21.6748 15.5922 21.8278 15.5826 21.9809 15.573C22 15.5252 22 15.5157 22 15.4965ZM18.7862 12.3114C18.1263 13.7079 17.0837 14.7409 15.6872 15.4009C15.5629 15.4583 15.4385 15.5157 15.3142 15.5635C14.8838 15.7261 14.4534 15.7165 14.0421 15.5061C13.7768 15.3668 13.5162 15.2138 13.2538 15.0597L13.2522 15.0588C13.1366 14.9909 13.0206 14.9228 12.9039 14.8557C12.6074 14.6835 12.3013 14.607 12.0048 14.607C11.7083 14.607 11.4022 14.6931 11.1057 14.8557C10.9379 14.948 10.7719 15.0458 10.6061 15.1435C10.3941 15.2685 10.1822 15.3934 9.96748 15.5061C9.55619 15.7261 9.12578 15.7356 8.69536 15.5635C8.57104 15.5157 8.44672 15.4583 8.32239 15.4009C6.91637 14.7409 5.88331 13.7079 5.22334 12.3114C4.93639 11.7089 5.0703 11.3167 5.65375 10.9915C6.05548 10.7715 6.4572 10.5515 6.87805 10.3794C8.1693 9.83416 9.46055 9.75765 10.7518 10.3889C11.1726 10.5993 11.5935 10.7046 12.0143 10.695C12.4352 10.695 12.8561 10.5993 13.2769 10.3889C14.5586 9.75765 15.8594 9.84373 17.1506 10.3794C17.5715 10.5515 17.9828 10.7715 18.3749 10.9915C18.9393 11.3071 19.0732 11.7089 18.7862 12.3114Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tab Bar */}
        <div style={{ backgroundColor: 'white', borderTop: '1px solid #f2f2f6', display: 'flex', alignItems: 'center', position: 'sticky', bottom: 0 }}>
          <div style={{ flex: 1, height: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4px' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.93 16.8233C10.9172 16.1091 11.5039 15.5097 12.2308 15.5097C12.9705 15.497 13.5316 16.0708 13.5316 16.8105C13.5316 17.5375 12.9832 18.0986 12.2563 18.0986C11.5166 18.1113 10.9427 17.5375 10.93 16.8233Z" fill="#FA7E0A"/>
              <path d="M18.5053 16.7978C18.5053 16.0581 19.0154 15.548 19.7679 15.548C20.5076 15.548 21.0687 16.0836 21.0687 16.7978C21.0687 17.5247 20.5203 18.0731 19.7806 18.0731C19.0282 18.0731 18.5053 17.5502 18.5053 16.7978Z" fill="#FA7E0A"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M29.3327 20.662C28.9756 18.2006 28.1594 15.9306 26.6035 13.9538C26.4505 13.7498 26.3995 13.5585 26.4505 13.3034C26.7311 11.9261 27.0116 10.5488 27.2539 9.17144C27.4197 8.21496 27.5345 7.25848 27.4325 6.28925C27.3432 5.42204 27.0626 5.17973 26.2337 5.42204C25.3155 5.68985 24.41 6.00868 23.5555 6.41678C22.2931 7.02005 21.0503 7.68204 19.8099 8.34274L19.8082 8.34367C19.6332 8.43688 19.4582 8.53007 19.2833 8.62306C18.8624 8.85261 18.4416 8.94188 17.9697 8.86537C17.3193 8.76334 16.6561 8.71233 16.0057 8.69957C15.3553 8.69957 14.6922 8.76334 14.0418 8.86537C13.5699 8.94188 13.149 8.85261 12.7282 8.62306C12.2882 8.39521 11.8507 8.16374 11.4133 7.93237C10.4308 7.41259 9.44918 6.89331 8.44316 6.41678C7.5887 6.00868 6.67048 5.68985 5.76501 5.42204C4.93606 5.17973 4.65549 5.42204 4.56622 6.28925C4.4642 7.25848 4.57898 8.22771 4.74477 9.17144C4.98707 10.5488 5.26764 11.9261 5.54821 13.3034C5.59922 13.5585 5.56096 13.7498 5.39517 13.9538C3.8393 15.9306 3.0231 18.2134 2.66602 20.662C2.66602 20.6747 2.66602 20.7002 2.67877 20.764C2.88282 20.7767 3.08687 20.7895 3.27816 20.7895C3.78829 20.7895 4.2729 20.9043 4.73201 21.1083C5.47169 21.4399 5.9053 22.0138 6.02007 22.8172C6.05833 23.0723 6.07108 23.3401 6.05833 23.6079C6.04558 23.8757 6.16036 24.0033 6.42817 24.0415C7.41016 24.169 8.35388 24.4369 9.23385 24.9087C9.41468 25.0069 9.59133 25.1071 9.76718 25.207C10.0254 25.3535 10.2819 25.4991 10.5474 25.6356C12.2818 26.5411 14.0928 27.0385 15.993 27.0512C17.8932 27.0385 19.7041 26.5411 21.4385 25.6356C21.7598 25.4704 22.0744 25.292 22.3872 25.1147C22.5089 25.0457 22.6307 24.9766 22.7521 24.9087C23.6321 24.4369 24.5758 24.1563 25.5578 24.0415C25.8256 24.0033 25.9404 23.8757 25.9276 23.6079C25.9149 23.3401 25.9276 23.0723 25.9659 22.8172C26.0807 22.0138 26.5143 21.4399 27.2539 21.1083C27.713 20.9043 28.1977 20.7895 28.7078 20.7895C28.8991 20.7895 29.1031 20.7767 29.3072 20.764C29.3327 20.7002 29.3327 20.6875 29.3327 20.662ZM25.0477 16.4152C24.1677 18.2771 22.7776 19.6545 20.9157 20.5344C20.7499 20.6109 20.5841 20.6875 20.4183 20.7512C19.8444 20.968 19.2705 20.9553 18.7221 20.6747C18.3685 20.489 18.0209 20.285 17.6711 20.0795L17.6689 20.0783C17.5149 19.9878 17.3602 19.897 17.2045 19.8075C16.8092 19.5779 16.4011 19.4759 16.0057 19.4759C15.6104 19.4759 15.2023 19.5907 14.8069 19.8075C14.5832 19.9306 14.3619 20.061 14.1408 20.1913C13.8581 20.3579 13.5756 20.5244 13.2893 20.6747C12.7409 20.968 12.1671 20.9808 11.5932 20.7512C11.4274 20.6875 11.2616 20.611 11.0959 20.5344C9.22117 19.6545 7.84376 18.2771 6.9638 16.4152C6.58121 15.6117 6.75975 15.0889 7.53769 14.6553C8.07332 14.3619 8.60895 14.0686 9.17008 13.8391C10.8917 13.1121 12.6134 13.0101 14.3351 13.8518C14.8962 14.1324 15.4573 14.2727 16.0185 14.2599C16.5796 14.2599 17.1407 14.1324 17.7019 13.8518C19.4108 13.0101 21.1452 13.1249 22.8669 13.8391C23.428 14.0686 23.9764 14.3619 24.4993 14.6553C25.2517 15.0761 25.4302 15.6117 25.0477 16.4152Z" fill="#FA7E0A"/>
            </svg>
          </div>
          <div style={{ flex: 1, height: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4px', opacity: 0.2 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9999 16C19.7149 16 18.4724 15.4263 17.4999 14.385C16.5543 13.3694 15.9768 12.015 15.8749 10.5725C15.7662 9.03375 16.2356 7.61875 17.1962 6.5875C18.1568 5.55625 19.4999 5 20.9999 5C22.4893 5 23.8362 5.56625 24.7937 6.595C25.7606 7.63375 26.2312 9.04625 26.1224 10.5719C26.0181 12.0162 25.4412 13.37 24.4974 14.3844C23.5274 15.4262 22.2856 16 20.9999 16Z" fill="#D9D9DD"/>
              <path d="M29.2393 27H12.7612C12.4962 27.0014 12.2345 26.942 11.9961 26.8264C11.7578 26.7108 11.5491 26.542 11.3862 26.3331C11.2134 26.1066 11.094 25.844 11.0371 25.5649C10.9802 25.2857 10.9871 24.9973 11.0574 24.7213C11.5837 22.6081 12.8874 20.8556 14.8274 19.6537C16.5493 18.5875 18.7412 18 20.9999 18C23.3031 18 25.4374 18.5625 27.1693 19.6281C29.1137 20.8237 30.4193 22.5863 30.9431 24.725C31.0125 25.0013 31.0187 25.2897 30.9611 25.5687C30.9035 25.8477 30.7837 26.11 30.6106 26.3363C30.4478 26.5442 30.2396 26.7121 30.0019 26.8272C29.7642 26.9422 29.5034 27.0014 29.2393 27Z" fill="#D9D9DD"/>
              <path d="M9.18743 16.25C6.98805 16.25 5.0543 14.205 4.87493 11.6919C4.78618 10.4044 5.18743 9.21375 5.99993 8.34062C6.80368 7.47625 7.93743 7 9.18743 7C10.4374 7 11.5624 7.47875 12.3706 8.34813C13.1893 9.22813 13.5893 10.4162 13.4956 11.6931C13.3162 14.2056 11.3831 16.25 9.18743 16.25Z" fill="#D9D9DD"/>
              <path d="M13.2912 18.2156C12.1918 17.6781 10.7649 17.4094 9.18805 17.4094C7.3468 17.4094 5.55868 17.8894 4.15243 18.7606C2.55805 19.75 1.48555 21.1906 1.05243 22.93C0.989045 23.1802 0.98305 23.4415 1.03489 23.6943C1.08673 23.9471 1.19507 24.185 1.3518 24.39C1.50052 24.5809 1.69104 24.7352 1.90872 24.8409C2.1264 24.9467 2.36543 25.0011 2.60743 25H9.54493C9.66202 25 9.7754 24.9589 9.86528 24.8838C9.95517 24.8088 10.0159 24.7046 10.0368 24.5894C10.0437 24.55 10.0524 24.5106 10.0624 24.4719C10.5924 22.3431 11.8343 20.5444 13.6693 19.2331C13.7368 19.1845 13.7911 19.1198 13.8272 19.0448C13.8634 18.9699 13.8803 18.8871 13.8764 18.804C13.8725 18.7209 13.8479 18.6401 13.8048 18.5689C13.7618 18.4977 13.7017 18.4383 13.6299 18.3962C13.5318 18.3387 13.4193 18.2781 13.2912 18.2156Z" fill="#D9D9DD"/>
            </svg>
          </div>
          <div style={{ flex: 1, height: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4px', opacity: 0.2 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.2344 19.9536C14.0727 19.7044 14.0874 19.3674 14.2783 19.1184L19.8746 12.2473C20.0362 12.0569 19.7717 11.7931 19.566 11.9396L12.7207 17.5649C12.4857 17.77 12.1478 17.7846 11.898 17.6234L5.9619 13.9299C5.44764 13.6221 5.55034 12.8455 6.12328 12.6551L24.4427 6.57759C25.0009 6.40186 25.5299 6.92945 25.3537 7.48622L19.2306 25.7276C19.0397 26.299 18.2611 26.4014 17.9524 25.8885L14.2344 19.9536Z" fill="#D9D9DD"/>
            </svg>
          </div>
          <div style={{ flex: 1, height: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4px', opacity: 0.2 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.62226 18.1508C7.56352 18.5982 7.18557 18.9325 6.73848 18.9325C6.27214 18.9325 5.8583 19.2342 5.71165 19.681L5.39934 20.6326C5.1768 21.3107 5.54095 22.0426 6.21269 22.2672C6.34267 22.3107 6.47871 22.3328 6.61564 22.3328H25.386C26.0937 22.3328 26.6673 21.7537 26.6673 21.0394C26.6673 20.9012 26.6454 20.7639 26.6023 20.6326L26.29 19.681C26.1433 19.2342 25.7295 18.9325 25.2632 18.9325C24.8161 18.9325 24.4381 18.5982 24.3794 18.1508L23.5814 12.0721C23.0748 8.21309 19.8339 5.33105 16.0008 5.33105C12.1678 5.33105 8.92681 8.21309 8.42022 12.0721L7.62226 18.1508Z" fill="#D9D9DD"/>
              <path d="M16.0004 28.0001C14.2331 28.0001 12.8004 26.4777 12.8004 24.5997H19.2004C19.2004 26.4777 17.7677 28.0001 16.0004 28.0001Z" fill="#D9D9DD"/>
            </svg>
          </div>
          <div style={{ flex: 1, height: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4px', opacity: 0.2 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.6497 17.2619C12.6475 17.7733 12.2959 18.217 11.7985 18.3359L10.0331 18.758C8.85256 19.0403 7.8437 19.7707 7.23991 20.7802L5.62819 23.4748C5.4354 23.7972 5.33398 24.162 5.33398 24.5333C5.33398 25.7115 6.33372 26.6666 7.56695 26.6666H24.434C24.8226 26.6666 25.2044 26.5697 25.5418 26.3855C26.6126 25.801 26.9846 24.4978 26.3727 23.4748L24.7614 20.7807C24.1574 19.7709 23.148 19.0404 21.967 18.7583L20.2003 18.3364C19.7017 18.2173 19.3499 17.7716 19.3499 17.2589C19.3499 17.0634 19.4018 16.8714 19.4967 16.7004C19.9939 15.8056 21.5829 12.819 21.5829 11.1999C21.5829 7.95985 19.0835 5.33325 16.0005 5.33325C12.9174 5.33325 10.418 7.95985 10.418 11.1999C10.418 12.8176 12.0042 15.8004 12.5029 16.6981C12.5987 16.8706 12.6506 17.0644 12.6497 17.2619Z" fill="#D9D9DD"/>
            </svg>
          </div>
        </div>

        {/* Post Button */}
        <div style={{ position: 'fixed', bottom: '80px', left: '50%', transform: 'translateX(-50%)', width: '64px', height: '64px', backgroundColor: 'rgba(64,64,68,0.4)', borderRadius: '9999px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '6px solid white', cursor: 'pointer' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0007 5.33325C14.5279 5.33325 13.334 6.52716 13.334 7.99992V13.3333H8.00065C6.52789 13.3333 5.33398 14.5272 5.33398 15.9999C5.33398 17.4727 6.52789 18.6666 8.00065 18.6666H13.334V23.9999C13.334 25.4727 14.5279 26.6666 16.0007 26.6666C17.4734 26.6666 18.6673 25.4727 18.6673 23.9999V18.6666H24.0007C25.4734 18.6666 26.6673 17.4727 26.6673 15.9999C26.6673 14.5272 25.4734 13.3333 24.0007 13.3333H18.6673V7.99992C18.6673 6.52716 17.4734 5.33325 16.0007 5.33325Z" fill="white"/>
          </svg>
        </div>
      </div>
    );
  }

  // If a thread is open, render the thread view
  if (openThread) {
    const { parent, lastVisibleReplyId } = openThread;
    // Get live subReplies from current replies state instead of stale snapshot
    const subReplies = replies.filter(r => r.parentId === parent.id);
    const parentLabel = parent.userType === 'OJ' ? 'OJ' : parent.userNumber;
    const threadPlaceholder = `Reply to @${parentLabel} thread`;

    // Truncate parent text for header
    const truncatedText = parent.text.length > 50 ? parent.text.substring(0, 50) + '...' : parent.text;

    return (
      <div style={{ backgroundColor: '#009d52', height: viewportHeight, display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '393px', margin: '0 auto', position: 'fixed', top: viewportOffset, left: '50%', transform: 'translateX(-50%)', fontFamily: '"GothamBook", Gotham, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400, direction: 'rtl' }}>
        {/* Thread View Top Navigation Bar - Fixed */}
        <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '48px', padding: '8px 16px', zIndex: 100, gap: '16px', overflow: 'hidden', flexShrink: 0 }}>
          <button
            onClick={handleCloseThread}
            style={{ width: '24px', height: '24px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
              <path d="M15.6447 17.5481L10.9309 11.9928L15.6447 6.43758C15.8722 6.17008 16 5.80692 16 5.42819C16 5.04946 15.8722 4.68629 15.6447 4.41879C15.1709 3.8604 14.4055 3.8604 13.9317 4.41879L8.35535 10.9906C7.88155 11.549 7.88155 12.451 8.35535 13.0094L13.9317 19.5812C14.4055 20.1396 15.1709 20.1396 15.6447 19.5812C16.1063 19.0228 16.1185 18.1065 15.6447 17.5481Z" fill="#404044"/>
            </svg>
          </button>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', overflow: 'hidden' }}>
            <span style={{
              color: '#404044',
              fontSize: '16px',
              fontFamily: '"GothamBook", Gotham, sans-serif',
              lineHeight: '20px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              🧵 @{parentLabel}: {truncatedText}
            </span>
          </div>
        </div>

        {/* Thread Content */}
        <div ref={(el) => {
          threadScrollRef.current = el;
          if (el && openThread) {
            // Handle scroll when element mounts
            if (openThread.scrollToReplyId === openThread.parent.id) {
              // Parent reply - scroll to top
              el.scrollTop = 0;
            } else if (openThread.scrollToReplyId) {
              // Sub-reply - scroll to it after a brief delay for refs to be set
              setTimeout(() => {
                const replyElement = replyRefs.current[openThread.scrollToReplyId];
                if (replyElement) {
                  replyElement.scrollIntoView({ behavior: 'instant', block: 'start' });
                }
              }, 50);
            } else if (openThread.lastVisibleReplyId && openThread.replyOffsetFromTop !== null) {
              // "Open thread" button case
              setTimeout(() => {
                const replyElement = replyRefs.current[openThread.lastVisibleReplyId];
                const containerRect = el.getBoundingClientRect();
                if (replyElement) {
                  const elementOffsetInContainer = replyElement.offsetTop;
                  const desiredScrollTop = elementOffsetInContainer - (openThread.replyOffsetFromTop - containerRect.top);
                  el.scrollTop = desiredScrollTop;
                }
              }, 50);
            }
          }
        }} style={{ flex: 1, overflowY: 'auto', backgroundColor: '#009d52' }}>
          {/* Parent Reply */}
          {(() => {
            const isOJReply = parent.userType === 'OJ';
            const replyColor = isOJReply ? ojColor : getRandomColor(parent.userNumber);
            const isYou = !isOJReply && parent.userNumber === myUserNumber;

            return (
              <SwipeableReply
                onReply={() => handleReplyToUser(parent.id, isOJReply ? 'OJ' : parent.userNumber)}
              >
                <div
                  ref={el => replyRefs.current[parent.id] = el}
                  style={{
                    backgroundColor: '#009d52',
                    padding: '16px',
                    paddingLeft: '62px',
                    position: 'relative',
                    scrollMarginTop: '80px',
                  }}
                >
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <ReplyHeader isOJ={isOJReply} label={isOJReply ? 'OJ' : String(parent.userNumber)} bgColor={replyColor} arrowColor={replyColor} distance={parent.distance} duration={parent.duration} isYou={isYou} />
                  </div>

                  <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.25', margin: 0, marginBottom: '24px', position: 'relative', zIndex: 2 }}>
                    {parent.text.split(/(@\d+)/g).map((part, index) => {
                      if (part.match(/^@\d+$/)) {
                        return <span key={index} style={{ fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>{part}</span>;
                      }
                      return part;
                    })}
                  </p>

                  <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                    <VoteCount
                      initialVotes={parent.votes}
                      voteState={parent.voteState}
                      onUpvote={() => handleReplyVote(parent.id, 'up')}
                      onDownvote={() => handleReplyVote(parent.id, 'down')}
                    />
                  </div>

                  <button style={{ position: 'absolute', left: '16px', top: '16px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2 }}>
                    <MoreHorizontal style={{ width: '24px', height: '24px', color: 'white' }} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingTop: '24px', position: 'relative', zIndex: 2 }}>
                    <button
                      onClick={() => handleReplyToUser(parent.id, isOJReply ? 'OJ' : parent.userNumber)}
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '2px 4px', display: 'flex', alignItems: 'center', gap: '2px', border: 'none', cursor: 'pointer' }}
                    >
                      <CornerUpLeft style={{ width: '24px', height: '24px', color: 'white' }} />
                      <span style={{ color: 'white', fontSize: '8px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}>Reply</span>
                    </button>
                  </div>

                  {/* Reply count */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
                    <CommentIcon />
                    <span style={{ color: 'white', fontSize: '10px', fontFamily: '"GothamBook", Gotham, sans-serif', lineHeight: '12px' }}>{subReplies.length}</span>
                  </div>
                </div>
              </SwipeableReply>
            );
          })()}

          {/* All Sub-replies */}
          {subReplies.map((reply, index) => {
            const isOJReply = reply.userType === 'OJ';
            const replyColor = isOJReply ? ojColor : getRandomColor(reply.userNumber);
            const isHighlighted = highlightedReplyId === reply.id;
            const isYou = !isOJReply && reply.userNumber === myUserNumber;

            return (
              <SwipeableReply
                key={reply.id}
                onReply={() => handleReplyToUser(reply.id, isOJReply ? 'OJ' : reply.userNumber)}
              >
                <div
                  ref={el => replyRefs.current[reply.id] = el}
                  style={{
                    backgroundColor: '#009d52',
                    padding: '16px',
                    paddingRight: '32px',
                    paddingLeft: '62px',
                    position: 'relative',
                    scrollMarginTop: '80px',
                  }}
                >
                  {/* Sub-reply right line indicator (RTL - z-index below avatars) */}
                  <div style={{
                    position: 'absolute',
                    right: '16px',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    zIndex: 0,
                  }} />

                  {/* White overlay for highlight effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    opacity: isHighlighted ? 1 : 0,
                    transition: 'opacity 300ms ease-in-out',
                    pointerEvents: 'none',
                    zIndex: 1
                  }} />

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <ReplyHeader isOJ={isOJReply} label={isOJReply ? 'OJ' : String(reply.userNumber)} bgColor={replyColor} arrowColor={replyColor} distance={reply.distance} duration={reply.duration} isYou={isYou} />
                  </div>

                  <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.25', margin: 0, marginBottom: '24px', position: 'relative', zIndex: 2 }}>
                    {reply.text.split(/(@\d+)/g).map((part, idx) => {
                      if (part.match(/^@\d+$/)) {
                        return <span key={idx} style={{ fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>{part}</span>;
                      }
                      return part;
                    })}
                  </p>

                  <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                    <VoteCount
                      initialVotes={reply.votes}
                      voteState={reply.voteState}
                      onUpvote={() => handleReplyVote(reply.id, 'up')}
                      onDownvote={() => handleReplyVote(reply.id, 'down')}
                    />
                  </div>

                  <button style={{ position: 'absolute', left: '16px', top: '16px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2 }}>
                    <MoreHorizontal style={{ width: '24px', height: '24px', color: 'white' }} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingTop: '24px', position: 'relative', zIndex: 2 }}>
                    <button
                      onClick={() => handleReplyToUser(reply.id, isOJReply ? 'OJ' : reply.userNumber)}
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '2px 4px', display: 'flex', alignItems: 'center', gap: '2px', border: 'none', cursor: 'pointer' }}
                    >
                      <CornerUpLeft style={{ width: '24px', height: '24px', color: 'white' }} />
                      <span style={{ color: 'white', fontSize: '8px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}>Reply</span>
                    </button>
                  </div>
                </div>
              </SwipeableReply>
            );
          })}
        </div>

        {/* Bottom Input Bar */}
        <PostBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          isActive={isInputActive}
          setIsActive={setIsInputActive}
          onPost={handlePostReply}
          isLoading={isPosting}
          replyingTo={replyingTo}
          inputRef={inputRef}
          onCancelReply={handleCancelReply}
          customPlaceholder={threadPlaceholder}
        />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#009d52', height: viewportHeight, display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '393px', margin: '0 auto', position: 'fixed', top: viewportOffset, left: '50%', transform: 'translateX(-50%)', fontFamily: '"GothamBook", Gotham, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400, direction: 'rtl' }}>
      {/* Top Navigation Bar - Fixed */}
      <div style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '49px', padding: '0 16px', zIndex: 100, flexShrink: 0 }}>
        <button onClick={handleBackToFeed} style={{ width: '24px', height: '24px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <ArrowLeft style={{ width: '24px', height: '24px', color: '#404044', transform: 'scaleX(-1)' }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button style={{ backgroundColor: '#f2f2f6', borderRadius: '9999px', padding: '8px', border: 'none', cursor: 'pointer' }}>
            <Rocket style={{ width: '16px', height: '16px', color: '#404044' }} />
          </button>
          <button style={{ backgroundColor: '#f2f2f6', borderRadius: '9999px', padding: '8px', border: 'none', cursor: 'pointer' }}>
            <Share style={{ width: '16px', height: '16px', color: '#404044' }} />
          </button>
          <button style={{ backgroundColor: '#f2f2f6', borderRadius: '9999px', padding: '8px', border: 'none', cursor: 'pointer' }}>
            <Pin style={{ width: '16px', height: '16px', color: '#404044' }} />
          </button>
          <button style={{ backgroundColor: '#f2f2f6', borderRadius: '9999px', padding: '8px', border: 'none', cursor: 'pointer' }}>
            <ArrowDownUp style={{ width: '16px', height: '16px', color: '#404044' }} />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div ref={(el) => {
        scrollContainerRef.current = el;
        mainScrollRef.current = el;
      }} style={{ flex: 1, overflowY: 'auto', backgroundColor: '#009d52' }}>
        {/* Main Post */}
        <div style={{ backgroundColor: '#009d52', borderBottom: '4px solid white', padding: '16px', paddingLeft: '62px', position: 'relative' }}>
          <PostHeader isOJ={post.userType === 'OJ'} label={post.userType === 'OJ' ? 'OJ' : String(post.userNumber)} bgColor={ojColor} arrowColor={ojColor} channel={post.channel} distance={post.distance} duration={post.duration} />

          {/* Post Content */}
          <div style={{ marginBottom: '16px' }}>
            <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.25', marginBottom: '16px', margin: 0, marginBottom: '16px' }}>
              {post.text}
            </p>
            <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.25', margin: 0, fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>{post.hashtag}</p>
          </div>

          {/* Vote Count - Right Side */}
          <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
            <VoteCount
              initialVotes={mainPostVotes}
              voteState={mainPostVoteState}
              onUpvote={() => handleUpvote(mainPostVoteState, setMainPostVoteState, mainPostVotes, setMainPostVotes)}
              onDownvote={() => handleDownvote(mainPostVoteState, setMainPostVoteState, mainPostVotes, setMainPostVotes)}
            />
          </div>

          {/* More Button */}
          <button style={{ position: 'absolute', left: '16px', top: '16px', background: 'none', border: 'none', cursor: 'pointer' }}>
            <MoreHorizontal style={{ width: '24px', height: '24px', color: 'white' }} />
          </button>

          {/* Post Footer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center', gap: '2px' }}>
              <CommentIcon />
              <span style={{ color: 'white', fontSize: '10px', fontFamily: '"GothamBook", Gotham, sans-serif', lineHeight: '12px' }}>{replies.length}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Replies - Organized into threads */}
        {(() => {
          const threads = organizeRepliesIntoThreads(replies);
          const MAX_VISIBLE_SUBREPLIES = 3;

          return threads.map((thread) => {
            const { parent, subReplies } = thread;

            // Check if user has a reply in this thread that would be hidden
            const userReplyInThread = subReplies.find(r => r.userNumber === myUserNumber);
            const userReplyIndex = subReplies.findIndex(r => r.userNumber === myUserNumber);
            const userReplyWouldBeHidden = userReplyIndex >= MAX_VISIBLE_SUBREPLIES;

            // Determine visible sub-replies
            let visibleSubReplies;
            let hiddenCount;

            if (userReplyWouldBeHidden && userReplyInThread) {
              // Show first 3 + pin user's reply as 4th
              const firstThree = subReplies.slice(0, MAX_VISIBLE_SUBREPLIES);
              visibleSubReplies = [...firstThree, userReplyInThread];
              // Hidden count excludes the pinned user reply
              hiddenCount = subReplies.length - MAX_VISIBLE_SUBREPLIES - 1;
            } else {
              visibleSubReplies = subReplies.slice(0, MAX_VISIBLE_SUBREPLIES);
              hiddenCount = subReplies.length - MAX_VISIBLE_SUBREPLIES;
            }

            const hasSubReplies = subReplies.length > 0;
            const hasHiddenReplies = hiddenCount > 0;

            return (
              <React.Fragment key={parent.id}>
                {/* Parent Reply */}
                {(() => {
                  const isOJReply = parent.userType === 'OJ';
                  const replyColor = isOJReply ? ojColor : getRandomColor(parent.userNumber);
                  const isHighlighted = highlightedReplyId === parent.id;
                  const isYou = !isOJReply && parent.userNumber === myUserNumber;

                  return (
                    <SwipeableReply
                      onReply={() => handleReplyToUser(parent.id, isOJReply ? 'OJ' : parent.userNumber)}
                    >
                      <div
                        ref={el => replyRefs.current[parent.id] = el}
                        onClick={() => handleOpenThread(parent, subReplies, null, parent.id)}
                        style={{
                          backgroundColor: '#009d52',
                          padding: '16px',
                          paddingLeft: '62px',
                          position: 'relative',
                          cursor: 'pointer',
                        }}
                      >
                        {/* White overlay for highlight effect */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          opacity: isHighlighted ? 1 : 0,
                          transition: 'opacity 300ms ease-in-out',
                          pointerEvents: 'none',
                          zIndex: 1
                        }} />

                        <div style={{ position: 'relative', zIndex: 2 }}>
                          <ReplyHeader isOJ={isOJReply} label={isOJReply ? 'OJ' : String(parent.userNumber)} bgColor={replyColor} arrowColor={replyColor} distance={parent.distance} duration={parent.duration} isYou={isYou} />
                        </div>

                        <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.25', margin: 0, marginBottom: '24px', position: 'relative', zIndex: 2 }}>
                          {parent.text.split(/(@\d+)/g).map((part, index) => {
                            if (part.match(/^@\d+$/)) {
                              return <span key={index} style={{ fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>{part}</span>;
                            }
                            return part;
                          })}
                        </p>

                        <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} onClick={(e) => e.stopPropagation()}>
                          <VoteCount
                            initialVotes={parent.votes}
                            voteState={parent.voteState}
                            onUpvote={() => handleReplyVote(parent.id, 'up')}
                            onDownvote={() => handleReplyVote(parent.id, 'down')}
                          />
                        </div>

                        <button onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', left: '16px', top: '16px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2 }}>
                          <MoreHorizontal style={{ width: '24px', height: '24px', color: 'white' }} />
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingTop: '24px', position: 'relative', zIndex: 2 }} onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => handleReplyToUser(parent.id, isOJReply ? 'OJ' : parent.userNumber)}
                            style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '2px 4px', display: 'flex', alignItems: 'center', gap: '2px', border: 'none', cursor: 'pointer' }}
                          >
                            <CornerUpLeft style={{ width: '24px', height: '24px', color: 'white' }} />
                            <span style={{ color: 'white', fontSize: '8px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}>Reply</span>
                          </button>
                        </div>
                      </div>
                    </SwipeableReply>
                  );
                })()}

                {/* Sub-replies (max 3 visible) */}
                {visibleSubReplies.map((reply, index) => {
                  const isOJReply = reply.userType === 'OJ';
                  const replyColor = isOJReply ? ojColor : getRandomColor(reply.userNumber);
                  const isHighlighted = highlightedReplyId === reply.id;
                  const isYou = !isOJReply && reply.userNumber === myUserNumber;
                  const isLastVisible = index === visibleSubReplies.length - 1;

                  return (
                    <SwipeableReply
                      key={reply.id}
                      onReply={() => handleReplyToUser(reply.id, isOJReply ? 'OJ' : reply.userNumber)}
                    >
                      <div
                        ref={el => replyRefs.current[reply.id] = el}
                        onClick={() => handleOpenThread(parent, subReplies, null, reply.id)}
                        style={{
                          backgroundColor: '#009d52',
                          padding: '16px',
                          paddingRight: '32px',
                          paddingLeft: '62px',
                          position: 'relative',
                          cursor: 'pointer',
                        }}
                      >
                        {/* Sub-reply right line indicator (RTL - z-index below avatars) */}
                        <div style={{
                          position: 'absolute',
                          right: '16px',
                          top: 0,
                          bottom: 0,
                          width: '2px',
                          backgroundColor: 'rgba(255, 255, 255, 0.5)',
                          zIndex: 0,
                        }} />

                        {/* White overlay for highlight effect */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          opacity: isHighlighted ? 1 : 0,
                          transition: 'opacity 300ms ease-in-out',
                          pointerEvents: 'none',
                          zIndex: 1
                        }} />

                        <div style={{ position: 'relative', zIndex: 2 }}>
                          <ReplyHeader isOJ={isOJReply} label={isOJReply ? 'OJ' : String(reply.userNumber)} bgColor={replyColor} arrowColor={replyColor} distance={reply.distance} duration={reply.duration} isYou={isYou} />
                        </div>

                        <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.25', margin: 0, marginBottom: '24px', position: 'relative', zIndex: 2 }}>
                          {reply.text.split(/(@\d+)/g).map((part, idx) => {
                            if (part.match(/^@\d+$/)) {
                              return <span key={idx} style={{ fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>{part}</span>;
                            }
                            return part;
                          })}
                        </p>

                        <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} onClick={(e) => e.stopPropagation()}>
                          <VoteCount
                            initialVotes={reply.votes}
                            voteState={reply.voteState}
                            onUpvote={() => handleReplyVote(reply.id, 'up')}
                            onDownvote={() => handleReplyVote(reply.id, 'down')}
                          />
                        </div>

                        <button onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', left: '16px', top: '16px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2 }}>
                          <MoreHorizontal style={{ width: '24px', height: '24px', color: 'white' }} />
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingTop: '24px', position: 'relative', zIndex: 2 }} onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => handleReplyToUser(reply.id, isOJReply ? 'OJ' : reply.userNumber)}
                            style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '2px 4px', display: 'flex', alignItems: 'center', gap: '2px', border: 'none', cursor: 'pointer' }}
                          >
                            <CornerUpLeft style={{ width: '24px', height: '24px', color: 'white' }} />
                            <span style={{ color: 'white', fontSize: '8px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600, textTransform: 'uppercase' }}>Reply</span>
                          </button>
                        </div>
                      </div>
                    </SwipeableReply>
                  );
                })}

                {/* Thread action button - Show if there are sub-replies */}
                {hasSubReplies && (
                  <div style={{
                    backgroundColor: '#009d52',
                    padding: '0px 32px 16px 16px',
                    position: 'relative',
                  }}>
                    {/* Curved line connecting to button (RTL - on right, mirrored) */}
                    <svg
                      width="24"
                      height="32"
                      viewBox="0 0 24 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ position: 'absolute', right: '16px', top: '-18px', transform: 'scaleX(-1)', zIndex: 0 }}
                    >
                      <path d="M1 0V12C1 20 8 28 20 28H24" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" fill="none"/>
                    </svg>

                    <button
                      onClick={() => {
                        // Get the last visible reply ID to scroll to in thread view
                        const lastVisibleId = visibleSubReplies.length > 0
                          ? visibleSubReplies[visibleSubReplies.length - 1].id
                          : null;
                        handleOpenThread(parent, subReplies, lastVisibleId);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: 0,
                        marginLeft: '8px',
                        marginTop: '16px'
                      }}
                    >
                      {/* Avatar icons for hidden replies */}
                      {hasHiddenReplies && (() => {
                        // Get hidden replies (replies not in visibleSubReplies)
                        const visibleIds = new Set(visibleSubReplies.map(r => r.id));
                        const hiddenReplies = subReplies.filter(r => !visibleIds.has(r.id));

                        // Check for OJ in hidden replies
                        const hasOJInHidden = hiddenReplies.some(r => r.userType === 'OJ');
                        // Check for current user in hidden replies
                        const hasUserInHidden = hiddenReplies.some(r => r.userNumber === myUserNumber);
                        // Get other unique users in hidden replies (excluding OJ and current user)
                        const otherUsers = [...new Set(hiddenReplies
                          .filter(r => r.userType !== 'OJ' && r.userNumber !== myUserNumber)
                          .map(r => r.userNumber))];

                        const avatars = [];
                        let avatarCount = 0;
                        const maxAvatars = 3;

                        // Add OJ avatar if present
                        if (hasOJInHidden && avatarCount < maxAvatars) {
                          avatars.push(
                            <div key="oj" style={{
                              width: '20px',
                              height: '20px',
                              padding: '2px',
                              backgroundColor: '#009d52',
                              borderRadius: '9999px',
                              outline: '1px solid white',
                              outlineOffset: '-1px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginLeft: avatarCount > 0 ? '-6px' : '0'
                            }}>
                              <OJIcon />
                            </div>
                          );
                          avatarCount++;
                        }

                        // Add current user avatar if present
                        if (hasUserInHidden && avatarCount < maxAvatars) {
                          const userColor = getRandomColor(myUserNumber);
                          avatars.push(
                            <div key="user" style={{
                              width: '20px',
                              height: '20px',
                              padding: '2px',
                              backgroundColor: userColor,
                              borderRadius: '9999px',
                              outline: '1px solid white',
                              outlineOffset: '-1px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginLeft: avatarCount > 0 ? '-6px' : '0'
                            }}>
                              <GuestIcon />
                            </div>
                          );
                          avatarCount++;
                        }

                        // Add other users or count
                        if (otherUsers.length > 0 && avatarCount < maxAvatars) {
                          const remainingSlots = maxAvatars - avatarCount;
                          const usersToShow = otherUsers.slice(0, remainingSlots);
                          const remainingUsers = otherUsers.length - usersToShow.length;

                          // Show individual user avatars
                          usersToShow.forEach((userNum, idx) => {
                            const color = getRandomColor(userNum);
                            avatars.push(
                              <div key={`user-${userNum}`} style={{
                                width: '20px',
                                height: '20px',
                                padding: '2px',
                                backgroundColor: color,
                                borderRadius: '9999px',
                                outline: '1px solid white',
                                outlineOffset: '-1px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: avatarCount > 0 || idx > 0 ? '-6px' : '0'
                              }}>
                                <span style={{
                                  width: '16px',
                                  height: '16px',
                                  textAlign: 'center',
                                  color: 'white',
                                  fontSize: '8px',
                                  fontFamily: '"GothamBold", Gotham, sans-serif',
                                  fontWeight: 500,
                                  lineHeight: '16px',
                                  textTransform: 'uppercase'
                                }}>{userNum}</span>
                              </div>
                            );
                          });
                          avatarCount += usersToShow.length;

                          // If there are more users, show count badge
                          if (remainingUsers > 0 && avatarCount < maxAvatars) {
                            avatars.push(
                              <div key="count" style={{
                                width: '20px',
                                height: '20px',
                                padding: '2px',
                                backgroundColor: '#009d52',
                                borderRadius: '9999px',
                                outline: '1px solid white',
                                outlineOffset: '-1px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '-6px'
                              }}>
                                <span style={{
                                  width: '16px',
                                  height: '16px',
                                  textAlign: 'center',
                                  color: 'white',
                                  fontSize: '8px',
                                  fontFamily: '"GothamBold", Gotham, sans-serif',
                                  fontWeight: 500,
                                  lineHeight: '16px',
                                  textTransform: 'uppercase'
                                }}>{remainingUsers}+</span>
                              </div>
                            );
                          }
                        }

                        return (
                          <div style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                            {avatars}
                          </div>
                        );
                      })()}

                      <span style={{
                        color: 'white',
                        fontSize: '14px',
                        fontFamily: '"GothamBold", Gotham, sans-serif',
                        fontWeight: 600
                      }}>
                        {hasHiddenReplies ? `Show ${hiddenCount} replies` : 'Open thread'}
                      </span>
                      <ArrowRightSmall />
                    </button>
                  </div>
                )}
              </React.Fragment>
            );
          });
        })()}

        {/* Bottom anchor for scrolling */}
        <div ref={bottomRef} style={{ height: '1px' }} />
      </div>

      {/* Bottom Input Bar */}
      <PostBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        isActive={isInputActive}
        setIsActive={setIsInputActive}
        onPost={handlePostReply}
        isLoading={isPosting}
        replyingTo={replyingTo}
        inputRef={inputRef}
        onCancelReply={handleCancelReply}
      />
    </div>
  );
}
