'use client'

import React, { useEffect, useRef, useState } from "react";
import { CommentsEmbeddedProps } from "./Comments.types";

const Comments: React.FC<CommentsEmbeddedProps> = ({ workspaceId, pageUrl, pageId, pageTitle }) => {
  // @ts-ignore
  const embedContainer = useRef()
  const [width, setWidth] = useState()
  const [height, setHeight] = useState("0px");
  const [listeningHeightResize, setlisteningHeightResize] = useState(false)

  function onResizeContainer () {
    // @ts-ignore
    setWidth(embedContainer.current.offsetWidth)
    // ref.current.contentWindow.postMessage('oraora', "*");
  }

  useEffect(() => {
    // @ts-ignore
    setWidth(embedContainer?.current?.offsetWidth || 0)
    // @ts-ignore
    new ResizeObserver(onResizeContainer).observe(embedContainer.current)

    if (!listeningHeightResize) {
      window.addEventListener('message', e => {
        const jsonData = JSON.parse(e.data)
        if (jsonData?.commentsSize) {
          setHeight(jsonData?.commentsSize?.height + 15)
        }
      }, false);
      setlisteningHeightResize(true)
    }
  }, [])

  return (
    // @ts-ignore
    <div ref={embedContainer} style={{position: 'relative', left: 0}}>
      URL: {import.meta.env.VITE_COMMENTS_UI_URL}<br/>
      ENVIRONMENT: {import.meta.env.VITE_NODE_ENV}
      {listeningHeightResize ? <iframe style={{zIndex: 2147483647, width, minHeight: '480px', height }}
        src={`${import.meta.env.VITE_COMMENTS_UI_URL}/comments?workspaceId=${workspaceId}
&pageUrl=${pageUrl}&pageId=${pageId}&pageTitle=${pageTitle}`}
width="100%" height="100%" frameBorder="0" scrolling="no"></iframe> : ''}
    </div>
  )
}

export default Comments;
