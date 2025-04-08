import React from 'react'

type IconProps = {
  className?: string
}

const Handshake: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      className={`h-8 w-8 ${className}`}
      viewBox="0 0 38 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_53_11)">
        <path
          d="M37.1239 13.4888L33.3984 7.10627C33.2611 6.87136 33.0712 6.66189 32.8394 6.48983C32.6076 6.31778 32.3385 6.1865 32.0474 6.10351C31.7564 6.02052 31.4491 5.98743 31.1431 6.00613C30.8371 6.02484 30.5384 6.09497 30.2641 6.21252L26.6334 7.76627L18.9852 6.03377C18.789 5.99004 18.5829 5.99004 18.3867 6.03377L10.7385 7.76627L7.10786 6.21252C6.83353 6.09497 6.53484 6.02484 6.22885 6.00613C5.92286 5.98743 5.61556 6.02052 5.32451 6.10351C5.03345 6.1865 4.76434 6.31778 4.53254 6.48983C4.30075 6.66189 4.1108 6.87136 3.97356 7.10627L0.248008 13.4875C0.110718 13.7224 0.0288117 13.9782 0.00696719 14.2402C-0.0148774 14.5022 0.0237676 14.7653 0.120695 15.0145C0.217623 15.2637 0.370934 15.4942 0.571875 15.6926C0.772815 15.8911 1.01745 16.0538 1.2918 16.1713L5.23341 17.86L13.3341 22.8138C13.4535 22.8865 13.5877 22.9395 13.7298 22.97L23.0728 24.97C23.2685 25.012 23.4735 25.0099 23.668 24.9639C23.8624 24.9179 24.0396 24.8296 24.1823 24.7075L32.2217 17.8225L36.0787 16.1713C36.6324 15.9339 37.0534 15.5181 37.2491 15.015C37.4448 14.512 37.3993 13.963 37.1225 13.4888H37.1239ZM29.1108 17.66L24.0874 14.215C23.8624 14.0607 23.5786 13.9831 23.2908 13.9972C23.0029 14.0113 22.7314 14.116 22.5283 14.2913C19.9283 16.5338 17.0305 16.25 15.1823 15.25L21.4947 10H26.1385L30.1108 16.8013L29.1108 17.66ZM6.06261 8.00002L9.05093 9.27752L5.31808 15.6588L2.3356 14.3825L6.06261 8.00002ZM22.9969 22.8913L14.5137 21.0763L7.33122 16.6838L11.4188 9.68377L18.686 8.03502L20.1166 8.35877L13.5473 13.8188L13.5356 13.83C13.2883 14.0418 13.0997 14.2984 12.9837 14.5808C12.8677 14.8633 12.8273 15.1645 12.8654 15.4622C12.9035 15.7599 13.0192 16.0464 13.2039 16.3007C13.3886 16.5549 13.6377 16.7704 13.9327 16.9313C16.9341 18.5725 20.556 18.3063 23.4086 16.3063L27.4451 19.0825L22.9969 22.8913ZM32.048 15.6575L28.3225 9.28252L31.3093 8.00002L35.0363 14.3825L32.048 15.6575ZM19.2378 27.2413C19.1747 27.4574 19.0291 27.6493 18.8242 27.7865C18.6192 27.9238 18.3666 27.9985 18.1064 27.9988C18.0104 27.9987 17.9149 27.9886 17.8217 27.9688L11.7385 26.6663C11.5962 26.6362 11.462 26.5832 11.3429 26.51L7.49618 24.1575C7.25966 23.9985 7.10389 23.7675 7.0613 23.5126C7.01871 23.2577 7.09259 22.9986 7.26756 22.7892C7.44252 22.5797 7.70509 22.4362 8.00058 22.3884C8.29607 22.3406 8.60171 22.3922 8.85385 22.5325L12.5195 24.775L18.394 26.03C18.6944 26.0944 18.9527 26.2583 19.112 26.4856C19.2714 26.713 19.3187 26.9853 19.2436 27.2425L19.2378 27.2413Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_53_11">
          <rect width="38" height="32" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Handshake
