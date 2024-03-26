import type { WalletInit, EIP1193Provider } from '@web3-onboard/common'

function stablewallet(): WalletInit {
  if (typeof window === 'undefined') return () => null

  return () => {
    return {
      label: 'StableWallet',
      getIcon: async () => {
        return `<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3620_3151)">
          <path d="M0 0H1024V1024H0V0Z" fill="url(#paint0_linear_3620_3151)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M354.295 862.225C402.408 883.923 455.794 895.999 512.001 895.999C568.205 895.999 621.588 883.924 669.699 862.227L670.03 862.078C705.371 846.099 737.86 824.927 766.525 799.534C827.689 745.352 871.439 671.955 888.319 588.799C888.913 585.869 889.475 582.927 890.002 579.974C893.943 557.911 896 535.195 896 511.999C896 499.04 895.358 486.229 894.104 473.599C882.939 361.151 823.266 262.972 736.305 200.287C705.668 178.202 671.643 160.522 635.16 148.176C596.5 135.093 555.079 128 512.001 128C469.477 128 428.567 134.912 390.335 147.674C368.981 154.802 348.462 163.754 328.964 174.347C314.631 182.133 300.848 190.805 287.691 200.29C200.733 262.976 141.062 361.153 129.897 473.599C128.643 486.229 128 499.039 128 511.999C128 538.301 130.644 563.985 135.681 588.799C152.561 671.952 196.31 745.348 257.471 799.53C280.748 820.15 306.547 837.988 334.347 852.521C340.783 855.886 347.327 859.074 353.971 862.078C354.079 862.127 354.187 862.176 354.295 862.225ZM678.113 473.599L836.165 473.599C825.482 382.445 777.24 302.772 707.33 250.473L628.391 387.2C576.66 476.799 447.334 476.799 395.604 387.2L316.667 250.477C246.759 302.776 198.519 382.447 187.836 473.599H345.881C449.342 473.599 514.005 585.599 462.275 675.199L383.273 812.034C422.77 829.002 466.288 838.399 512.001 838.399C557.711 838.399 601.227 829.003 640.722 812.036L561.719 675.199C509.988 585.599 574.652 473.599 678.113 473.599ZM286.973 748.431L362.509 617.599C369.899 604.799 360.661 588.799 345.881 588.799H194.688C209.638 650.789 242.28 705.88 286.973 748.431ZM678.113 588.799L829.314 588.799C814.363 650.791 781.718 705.885 737.023 748.435L661.485 617.599C654.095 604.799 663.332 588.799 678.113 588.799ZM419.847 198.79C449.071 190.206 479.998 185.6 512.001 185.6C544.001 185.6 574.926 190.205 604.149 198.789L528.625 329.6C521.235 342.4 502.76 342.4 495.37 329.6L419.847 198.79Z" fill="white"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_3620_3151" x1="1024" y1="0" x2="0" y2="1024" gradientUnits="userSpaceOnUse">
            <stop stop-color="#26D3A6"/>
            <stop offset="0.598026" stop-color="#36A2CB"/>
            <stop offset="1" stop-color="#4C62FD"/>
            </linearGradient>
            <clipPath id="clip0_3620_3151">
            <rect width="1024" height="1024" fill="white"/>
            </clipPath>
          </defs>
        </svg>`;
      },
      getInterface: async () => {
        let provider: EIP1193Provider
        if (window?.ethereum?.isStableWallet) {
          provider = window?.ethereum
        } else {
          // window.open("https://stablewallet.ai/", '_blank')
          throw new Error('Please Install <a href="https://stablewallet.ai/">StableWallet</a> to use this wallet')
        }
        return { provider }
      }
    }
  }
}

export default stablewallet
