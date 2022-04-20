import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
        /* devanagari */
        @font-face {
          font-family: 'Baloo';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/baloo2/v11/wXK0E3kTposypRydzVT08TS3JnAmtdgozZpp_led7Q.woff2) format('woff2');
          unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Baloo';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/baloo2/v11/wXK0E3kTposypRydzVT08TS3JnAmtdgozZpn_led7Q.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Baloo';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/baloo2/v11/wXK0E3kTposypRydzVT08TS3JnAmtdgozZpm_led7Q.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Baloo';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/baloo2/v11/wXK0E3kTposypRydzVT08TS3JnAmtdgozZpo_lc.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        /* cyrillic-ext */
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunito/v23/XRXI3I6Li01BKofiOc5wtlZ2di8HDOUhdTk3j77e.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunito/v23/XRXI3I6Li01BKofiOc5wtlZ2di8HDOUhdTA3j77e.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunito/v23/XRXI3I6Li01BKofiOc5wtlZ2di8HDOUhdTs3j77e.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunito/v23/XRXI3I6Li01BKofiOc5wtlZ2di8HDOUhdTo3j77e.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/nunito/v23/XRXI3I6Li01BKofiOc5wtlZ2di8HDOUhdTQ3jw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}
  />
)

export default Fonts