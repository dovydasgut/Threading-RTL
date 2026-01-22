import React, { useState, useRef } from 'react';
import {
  OJIcon,
  GuestIcon,
  ArrowRightIcon,
  LocationIcon,
  VoteUpFilled,
  VoteUpOutline,
  VoteDownFilled,
  VoteDownOutline,
  MicrophoneIcon,
  CameraIcon,
  GalleryIcon,
  SendIcon,
  LoadingIcon,
  CloseIcon,
  ReplySwipeIcon,
} from './icons';

// UserButton Component
export const UserButton = ({ isOJ = false, label, bgColor = '#fa7e0a', arrowColor = '#FA7E0A' }) => (
  <div style={{ backgroundColor: 'white', borderRadius: '9999px', padding: '2px', display: 'flex', alignItems: 'center', gap: '2px', boxShadow: '0px 0.1px 3px rgba(217,217,221,1)' }}>
    <div style={{ backgroundColor: bgColor, borderRadius: '9999px', padding: '2px 8px 2px 4px', display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #d9d9dd' }}>
      {isOJ ? <OJIcon /> : <GuestIcon />}
      <span style={{ color: 'white', fontSize: '10px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>{label}</span>
    </div>
    <ArrowRightIcon color={arrowColor} />
  </div>
);

// Location Item Component
export const LocationItem = ({ distance = "close" }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
    <div style={{ width: '20px', height: '20px', position: 'relative' }}>
      <LocationIcon />
    </div>
    <span style={{ color: 'white', fontSize: '10px', fontFamily: '"GothamBook", Gotham, sans-serif', lineHeight: '12px' }}>{distance}</span>
  </div>
);

// Channel Tag Component
export const ChannelTag = ({ channel = "@main" }) => (
  <div style={{ backgroundColor: 'rgba(13,13,17,0.2)', borderRadius: '9999px', padding: '4px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
    <span style={{ color: 'white', fontSize: '10px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600, lineHeight: '12px', textAlign: 'center' }}>{channel}</span>
  </div>
);

// Timestamp Component
export const Timestamp = ({ duration = "2 min", isYou = false }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
    <span style={{ color: 'white', fontSize: '10px', fontFamily: '"GothamBook", Gotham, sans-serif', lineHeight: '12px' }}>• {duration} ago</span>
    {isYou && <span style={{ color: 'white', fontSize: '10px', fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600, lineHeight: '12px' }}>• You</span>}
  </div>
);

// Post Header Component (with channel tag)
export const PostHeader = ({ isOJ = false, label, bgColor, arrowColor, channel = "@main", distance = "close", duration = "2 min" }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap', marginBottom: '16px' }}>
    <UserButton isOJ={isOJ} label={label} bgColor={bgColor} arrowColor={arrowColor} />
    <ChannelTag channel={channel} />
    <LocationItem distance={distance} />
    <Timestamp duration={duration} />
  </div>
);

// Reply Header Component (without channel tag)
export const ReplyHeader = ({ isOJ = false, label, bgColor, arrowColor, distance = "close", duration = "2 min", isYou = false }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap', marginBottom: '16px' }}>
    <UserButton isOJ={isOJ} label={label} bgColor={bgColor} arrowColor={arrowColor} />
    <LocationItem distance={distance} />
    <Timestamp duration={duration} isYou={isYou} />
  </div>
);

// VoteCount Component with state management
export const VoteCount = ({ initialVotes = 0, voteState, onUpvote, onDownvote }) => {
  const isUpvoted = voteState === 'upvoted';
  const isDownvoted = voteState === 'downvoted';

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', overflow: 'hidden', width: '32px' }}>
      <button
        onClick={onUpvote}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, opacity: isDownvoted ? 0.4 : 1 }}
      >
        {isDownvoted ? <VoteUpOutline /> : <VoteUpFilled />}
      </button>
      <div style={{
        alignSelf: 'stretch',
        height: '24px',
        textAlign: 'center',
        color: 'white',
        fontSize: '16px',
        fontFamily: '"GothamBook", Gotham, sans-serif',
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {initialVotes}
      </div>
      <button
        onClick={onDownvote}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, opacity: isUpvoted ? 0.4 : 1 }}
      >
        {isUpvoted ? <VoteDownOutline /> : <VoteDownFilled />}
      </button>
    </div>
  );
};

// Reply Banner Component
export const ReplyBanner = ({ userNumber, onClose }) => (
  <div style={{
    alignSelf: 'stretch',
    padding: '8px',
    backgroundColor: 'rgba(13, 13, 17, 0.50)',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '8px'
  }}>
    <div style={{
      flex: 1,
      color: 'white',
      fontSize: '12px',
      fontFamily: '"GothamBook", Gotham, sans-serif',
      lineHeight: '16px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }}>
      Replying to <span style={{ fontFamily: '"GothamBold", Gotham, sans-serif', fontWeight: 600 }}>@{userNumber}</span>
    </div>
    <button
      onClick={onClose}
      style={{
        padding: '4px',
        backgroundColor: '#f2f2f6',
        borderRadius: '9999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      <CloseIcon />
    </button>
  </div>
);

// PostBar Component
export const PostBar = ({ inputValue, setInputValue, isActive, setIsActive, onPost, isLoading, replyingTo, inputRef, onCancelReply, customPlaceholder }) => {
  const placeholder = customPlaceholder
    ? customPlaceholder
    : replyingTo
      ? `Add a reply to @${replyingTo.userNumber}`
      : '#GoodVibesOnly';

  // Auto-resize textarea
  const handleTextareaChange = (e) => {
    setInputValue(e.target.value);
    // Reset height to auto to get the correct scrollHeight
    e.target.style.height = 'auto';
    // Set height to scrollHeight, but cap at 4 lines (approx 80px with 20px line height)
    const maxHeight = 80; // 4 lines * 20px line height
    e.target.style.height = Math.min(e.target.scrollHeight, maxHeight) + 'px';
  };

  return (
    <div style={{
      alignSelf: 'stretch',
      boxShadow: '0px -8px 16px 0px rgba(0,0,0,0.15)',
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      overflow: 'hidden',
      zIndex: 100,
      backgroundColor: 'white',
      flexShrink: 0,
    }}>
      {/* Reply Banner - shown when replying to a specific user */}
      {replyingTo && (
        <ReplyBanner userNumber={replyingTo.userNumber} onClose={onCancelReply} />
      )}
      <div style={{
        alignSelf: 'stretch',
        padding: '8px',
        paddingBottom: 'calc(8px + env(safe-area-inset-bottom, 0px))',
        backgroundColor: 'white',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        gap: '8px'
      }}>
        <div style={{
          flex: 1,
          paddingLeft: '16px',
          paddingRight: '8px',
          paddingTop: '6px',
          paddingBottom: '6px',
          backgroundColor: '#f2f2f6',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          overflow: 'hidden'
        }}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(inputValue.length > 0)}
            placeholder={placeholder}
            disabled={isLoading}
            inputMode="text"
            enterKeyHint="send"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            data-form-type="other"
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              color: isActive ? '#0d0d11' : '#8C8C90',
              fontSize: '16px',
              fontFamily: '"GothamBook", Gotham, sans-serif',
              lineHeight: '20px',
              minHeight: '20px',
              padding: 0,
              WebkitAppearance: 'none',
              appearance: 'none',
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                if (!isLoading && inputValue.trim()) {
                  onPost();
                }
              }
            }}
          />
        </div>
        {!isActive ? (
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', paddingBottom: '2px' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <MicrophoneIcon />
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <CameraIcon />
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <GalleryIcon />
            </button>
          </div>
        ) : (
          <button
            style={{ background: 'none', border: 'none', cursor: isLoading ? 'default' : 'pointer', padding: 0, paddingBottom: '2px' }}
            onClick={!isLoading ? onPost : undefined}
            disabled={isLoading}
          >
            {isLoading ? <LoadingIcon /> : <SendIcon />}
          </button>
        )}
      </div>
    </div>
  );
};

// SwipeableReply Component - wraps reply cards to enable swipe-to-reply
export const SwipeableReply = ({ children, onReply, disabled = false }) => {
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const currentX = useRef(0);
  const isHorizontalSwipe = useRef(null);
  const hasTriggered = useRef(false);
  const containerRef = useRef(null);

  const SWIPE_THRESHOLD = 80; // Distance to trigger reply
  const MAX_SWIPE = 100; // Maximum swipe distance
  const VERTICAL_THRESHOLD = 10; // Vertical movement threshold to cancel horizontal swipe

  const handleTouchStart = (e) => {
    if (disabled) return;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    currentX.current = 0;
    isHorizontalSwipe.current = null;
    hasTriggered.current = false;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (disabled || !isDragging) return;

    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    const diffX = touchX - startX.current;
    const diffY = touchY - startY.current;

    // Determine swipe direction on first significant movement
    if (isHorizontalSwipe.current === null) {
      if (Math.abs(diffX) > 10 || Math.abs(diffY) > 10) {
        isHorizontalSwipe.current = Math.abs(diffX) > Math.abs(diffY);
      }
    }

    // If vertical swipe detected, cancel horizontal swipe
    if (isHorizontalSwipe.current === false) {
      return;
    }

    // Only allow swipe from left to right (positive direction for RTL)
    if (diffX > 0) {
      // Prevent default to stop scrolling when swiping horizontally
      if (isHorizontalSwipe.current) {
        e.preventDefault();
      }

      // Apply resistance after threshold
      let newTranslate = diffX;
      if (newTranslate > MAX_SWIPE) {
        newTranslate = MAX_SWIPE + (diffX - MAX_SWIPE) * 0.2;
      }

      currentX.current = newTranslate;
      setTranslateX(newTranslate);

      // Trigger haptic feedback when crossing threshold
      if (newTranslate >= SWIPE_THRESHOLD && !hasTriggered.current) {
        hasTriggered.current = true;
        // Vibrate if supported
        if (navigator.vibrate) {
          navigator.vibrate(10);
        }
      } else if (newTranslate < SWIPE_THRESHOLD && hasTriggered.current) {
        hasTriggered.current = false;
      }
    }
  };

  const handleTouchEnd = () => {
    if (disabled) return;

    // If swipe crossed threshold, trigger reply
    if (currentX.current >= SWIPE_THRESHOLD && onReply) {
      onReply();
    }

    // Animate back to original position
    setTranslateX(0);
    setIsDragging(false);
    isHorizontalSwipe.current = null;
  };

  // Calculate icon opacity and scale based on swipe progress
  const progress = Math.min(translateX / SWIPE_THRESHOLD, 1);
  const iconOpacity = progress;
  const iconScale = 0.5 + progress * 0.5;
  const isActivated = translateX >= SWIPE_THRESHOLD;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Reply icon that appears on the left side during swipe */}
      <div
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: `translateY(-50%) scale(${iconScale})`,
          opacity: iconOpacity,
          transition: isDragging ? 'none' : 'all 0.2s ease-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: isActivated ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
          zIndex: 0,
        }}
      >
        <ReplySwipeIcon />
      </div>

      {/* Swipeable content */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isDragging ? 'none' : 'transform 0.2s ease-out',
          position: 'relative',
          zIndex: 1,
          backgroundColor: '#009d52',
        }}
      >
        {children}
      </div>
    </div>
  );
};
