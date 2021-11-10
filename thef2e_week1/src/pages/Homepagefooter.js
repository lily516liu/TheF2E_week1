import React from 'react'
import { Link } from 'react-router-dom';
import LogoWhite from '../component/LogoWhite'

function Homepagefooter() {
  return (
    <div>
      <div className="home_footer">
        <div className="footer_content">
          <div>
            <LogoWhite />
            <div className="d-flex mt-1">
              <div className="fb_icon me-1">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_923:3869)">
                    <circle cx="12.439" cy="12" r="12" fill="#28DAA5" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.438965 12.067C0.438965 18.033 4.77197 22.994 10.439 24V15.333H7.43896V12H10.439V9.333C10.439 6.333 12.372 4.667 15.106 4.667C15.972 4.667 16.906 4.8 17.772 4.933V8H16.239C14.772 8 14.439 8.733 14.439 9.667V12H17.639L17.106 15.333H14.439V24C20.106 22.994 24.439 18.034 24.439 12.067C24.439 5.43 19.039 0 12.439 0C5.83896 0 0.438965 5.43 0.438965 12.067Z"
                      fill="#FEFEFE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_923:3869">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.438965)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="line_icon me-1">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12.439" cy="12" r="12" fill="#FEFEFE" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2409 5C16.5427 5 20.0428 7.8399 20.0428 11.3313C20.0428 12.7288 19.5016 13.9868 18.3703 15.2264C16.7338 17.1105 13.0737 19.4053 12.2409 19.7564C11.4314 20.0977 11.5251 19.5642 11.5621 19.3536L11.5651 19.336L11.6762 18.668C11.7026 18.4691 11.7299 18.1599 11.6509 17.9629C11.5631 17.7454 11.2179 17.6323 10.9643 17.5777C7.2145 17.0832 4.43896 14.4608 4.43896 11.3313C4.43896 7.8399 7.94008 5 12.2409 5ZM9.33663 12.4957H7.84938V9.79624C7.84938 9.75605 7.83349 9.7175 7.80517 9.689C7.77685 9.6605 7.7384 9.64435 7.69822 9.6441H7.15013C7.13016 9.6441 7.11037 9.64803 7.09191 9.65568C7.07346 9.66332 7.05668 9.67453 7.04256 9.68866C7.02843 9.70279 7.01722 9.71956 7.00958 9.73801C7.00193 9.75647 6.998 9.77626 6.998 9.79624V13.1959C6.998 13.2359 7.01458 13.2739 7.04091 13.3003V13.3013L7.04286 13.3032L7.04481 13.3052C7.07309 13.3324 7.1109 13.3474 7.15013 13.3471H9.33663C9.4205 13.3471 9.48779 13.2788 9.48779 13.1949V12.6488C9.48792 12.6288 9.48411 12.609 9.47658 12.5905C9.46905 12.572 9.45795 12.5552 9.44392 12.541C9.42988 12.5267 9.41318 12.5154 9.39477 12.5077C9.37636 12.4999 9.3566 12.4958 9.33663 12.4957ZM10.108 9.6441H10.6561C10.74 9.6441 10.8073 9.71236 10.8073 9.79624V13.1959C10.8073 13.2798 10.739 13.3471 10.6561 13.3471H10.108C10.0679 13.3471 10.0293 13.3312 10.0008 13.3029C9.9723 13.2746 9.95616 13.2361 9.9559 13.1959V9.79624C9.9559 9.71236 10.0242 9.6441 10.108 9.6441ZM13.8754 9.6441H14.4215C14.5064 9.6441 14.5746 9.71236 14.5746 9.79624V13.1959C14.5746 13.2798 14.5064 13.3471 14.4225 13.3471H13.8754C13.8622 13.3472 13.8491 13.3455 13.8364 13.3422H13.8344C13.8308 13.341 13.8272 13.3397 13.8237 13.3383L13.8188 13.3364L13.812 13.3334C13.8093 13.3323 13.8067 13.331 13.8042 13.3295L13.8013 13.3286L13.7915 13.3227L13.7906 13.3217C13.7753 13.3115 13.7621 13.2986 13.7515 13.2837L12.1912 11.1772V13.1959C12.1913 13.2159 12.1875 13.2356 12.1799 13.2541C12.1724 13.2725 12.1613 13.2893 12.1472 13.3034C12.1332 13.3176 12.1165 13.3288 12.0981 13.3365C12.0797 13.3441 12.0599 13.3481 12.04 13.3481H11.4929C11.4527 13.3481 11.4142 13.3322 11.3856 13.3038C11.3571 13.2755 11.341 13.2371 11.3407 13.1969V9.79624C11.3407 9.71236 11.409 9.6441 11.4929 9.6441H12.0458L12.0507 9.64507H12.0566L12.0595 9.64605H12.0653L12.0751 9.64897H12.0771L12.079 9.64995L12.0888 9.65287L12.0936 9.65482C12.0966 9.65596 12.0996 9.65727 12.1024 9.65873L12.1053 9.6597L12.1073 9.66068C12.1117 9.66299 12.1159 9.6656 12.12 9.66848L12.1229 9.67043L12.1278 9.67335V9.67433C12.1297 9.67433 12.1307 9.67628 12.1317 9.67726C12.1344 9.67906 12.137 9.68102 12.1395 9.68311L12.1424 9.68603C12.1507 9.6937 12.1582 9.70219 12.1648 9.71139L13.7233 11.8169V9.79624C13.7233 9.71236 13.7915 9.6441 13.8754 9.6441ZM17.5959 10.3433C17.5959 10.4272 17.5277 10.4955 17.4448 10.4955H15.9566V11.0709H17.4438C17.5277 11.0709 17.595 11.1391 17.595 11.222V11.7691C17.595 11.853 17.5267 11.9213 17.4438 11.9213H15.9566V12.4967H17.4438C17.5277 12.4967 17.595 12.5649 17.595 12.6478V13.1949C17.595 13.2788 17.5267 13.3471 17.4438 13.3471H15.2573C15.2374 13.3472 15.2177 13.3434 15.1993 13.3358C15.1809 13.3283 15.1642 13.3172 15.15 13.3032L15.1481 13.3003C15.1209 13.2723 15.1055 13.2349 15.1052 13.1959V9.79624C15.1052 9.75528 15.1218 9.71822 15.1471 9.69188L15.15 9.68896L15.151 9.68798C15.1793 9.65992 15.2175 9.64415 15.2573 9.6441H17.4438C17.5277 9.6441 17.595 9.71236 17.595 9.79624V10.3433H17.5959Z"
                    fill="#28DAA5"
                  />
                </svg>
              </div>
              <div className="twitter_icon me-1">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_923:3877)">
                    <circle cx="12.439" cy="12" r="12" fill="#28DAA5" />
                    <path
                      d="M12.439 0C5.81218 0 0.438965 5.37321 0.438965 12C0.438965 18.6268 5.81218 24 12.439 24C19.0658 24 24.439 18.6268 24.439 12C24.439 5.37321 19.0658 0 12.439 0ZM18.2059 9.04554C18.214 9.17143 18.214 9.30268 18.214 9.43125C18.214 13.3634 15.2193 17.8929 9.747 17.8929C8.0595 17.8929 6.49521 17.4027 5.17736 16.5589C5.41843 16.5857 5.64879 16.5964 5.89522 16.5964C7.28807 16.5964 8.56843 16.125 9.58897 15.3268C8.28182 15.3 7.18361 14.4429 6.80861 13.2643C7.26664 13.3313 7.67914 13.3313 8.15057 13.2107C7.47752 13.074 6.87256 12.7084 6.43847 12.1762C6.00439 11.644 5.76795 10.9779 5.76932 10.2911V10.2536C6.16307 10.4759 6.62646 10.6125 7.11129 10.6313C6.70372 10.3596 6.36948 9.99164 6.13819 9.5599C5.90691 9.12817 5.78572 8.64603 5.78539 8.15625C5.78539 7.60179 5.93004 7.09554 6.18986 6.65625C6.93692 7.5759 7.86914 8.32806 8.92592 8.86384C9.98271 9.39961 11.1404 9.70702 12.3238 9.76607C11.9033 7.74375 13.414 6.10714 15.23 6.10714C16.0872 6.10714 16.8586 6.46607 17.4024 7.04464C18.0747 6.91875 18.7175 6.66696 19.2908 6.32946C19.0684 7.01786 18.6024 7.59911 17.9836 7.96607C18.5836 7.90179 19.1622 7.73571 19.6979 7.50268C19.2934 8.09732 18.7872 8.625 18.2059 9.04554Z"
                      fill="#FEFEFE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_923:3877">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.438965)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="find_location">
            <Link to="#" style={{ textDecoration: 'none' ,color:'rgba(254, 254, 254, 1)'}}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>找景點</div>
                <div>主題景點</div>
              </div>
            </Link>
          </div>
          <div className="find_restaurant">
            <Link to="#" style={{ textDecoration: 'none' ,color:'rgba(254, 254, 254, 1)'}}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>找餐廳</div>
                <div>主題餐廳</div>
              </div>
            </Link>
          </div>
          <div className="find_hotel">
            <Link to="#" style={{ textDecoration: 'none' ,color:'rgba(254, 254, 254, 1)'}}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>找飯店</div>
                <div>主題飯店</div>
              </div>
            </Link>
          </div>
          <div className="user_login">
            <Link to="#" style={{ textDecoration: 'none' ,color:'rgba(254, 254, 254, 1)'}}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>會員登入</div>
                <div>商家專區</div>
              </div>
            </Link>
          </div>
          <div className="copy_right">Copyright ©</div>
        </div>
      </div>
    </div>
  );
}

export default Homepagefooter