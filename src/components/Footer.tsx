import React from 'react'
import 'twin.macro'

const Footer = () => {
  return (
    <div tw="relative p-6 bg-black text-white text-center h-80">
      <span tw="text-xl">Jangan lupa follow</span>

      <div
        id="u_content_social_2"
        className="u_content_social"
        style={{ overflowWrap: 'break-word', padding: 10 }}
      >
        <div style={{ textAlign: 'center', lineHeight: 0 }}>
          <a
            href="https://github.com/rohmanhm"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              width: 32,
              height: 32,
              marginRight: 12,
            }}
          >
            <img
              src="https://cdn.tools.unlayer.com/social/icons/circle-white/github.png"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://instagram.com/rohmanhm"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              width: 32,
              height: 32,
              marginRight: 12,
            }}
          >
            <img
              src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://facebook.com/rohmanhm"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              width: 32,
              height: 32,
              marginRight: 12,
            }}
          >
            <img
              src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://youtube.com/rohmanhm"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              width: 32,
              height: 32,
              marginRight: 12,
            }}
          >
            <img
              src="https://cdn.tools.unlayer.com/social/icons/circle-white/youtube.png"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://twitter.com/rohmanhm"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              width: 32,
              height: 32,
              marginRight: 12,
            }}
          >
            <img
              src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://linkedin.com/rohmanhm"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              width: 32,
              height: 32,
              marginRight: 0,
            }}
          >
            <img
              src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
