import React from 'react';
import logo from '../../images/sidebar/company_logo.svg'
import logo_text from '../../images/sidebar/doors_text.svg'

const CompanyLogo = () => {
    return (
        <div className='logo'>
            <img className='logo__pic' src={logo} alt="logo" />
            <img className='logo__text' src={logo_text} alt="logo" />
            <div class="logo__shadow">
                <svg width="491" height="122" viewBox="0 0 491 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M665.465 39.4144V2.2319H660.65L646.983 22.6475V2.2319H638.984V39.4144H643.799L657.466 18.9988V39.4144H665.465ZM413.082 0.668152C384.505 0.668152 361.441 26.5569 361.441 58.44C361.441 90.41 384.582 116.212 413.082 116.212V116.299H464.724V58.44C464.724 26.5569 441.66 0.668152 413.082 0.668152V0.668152ZM177.784 68.17H171.028V116.038H150.449V2.31878H171.028V47.1463H177.784C185.938 47.1463 192.228 45.5825 196.654 42.455C201.081 39.3275 204.964 33.8544 208.303 26.1225L218.243 2.31878H239.754L229.814 25.8619C226.785 33.1594 223.834 39.2407 220.883 44.1057C217.932 48.9707 214.904 53.0538 211.72 56.2682L246.354 116.038H222.359L194.247 66.4325C191.995 67.1275 189.51 67.5619 186.792 67.8225C184.074 67.9963 181.045 68.17 177.784 68.17ZM287.434 68.17H280.678V116.038H260.022V2.31878H280.601V47.1463H287.357C295.511 47.1463 301.801 45.5825 306.227 42.455C310.654 39.3275 314.537 33.8544 317.876 26.1225L327.816 2.31878H349.327L339.387 25.8619C336.358 33.1594 333.407 39.2407 330.456 44.1057C327.505 48.9707 324.477 53.0538 321.293 56.2682L355.927 116.038H331.931L303.82 66.4325C301.568 67.1275 299.083 67.5619 296.365 67.8225C293.725 67.9963 290.696 68.17 287.434 68.17V68.17ZM82.8879 0.668152C57.9603 0.668152 37.2261 20.215 32.1008 46.3644H21.0736V2.31878H0.727631V116.038H21.0736V68.5175H31.4795C35.44 96.3175 56.8731 117.428 82.8879 117.428C111.776 117.428 135.151 91.5394 135.151 59.2219C135.151 26.8175 111.776 0.668152 82.8879 0.668152V0.668152ZM82.8879 22.5607C99.7393 22.5607 114.805 37.59 114.805 59.2219C114.805 80.8538 99.7393 95.6225 82.8879 95.6225C66.0365 95.6225 51.2042 80.8538 51.2042 59.2219C51.2042 37.5032 66.0365 22.5607 82.8879 22.5607V22.5607ZM413.082 22.3C430.943 22.3 445.387 38.4588 445.387 58.44V94.58H413.082C395.221 94.58 380.777 78.4213 380.777 58.44C380.777 38.5457 395.221 22.3 413.082 22.3ZM700.333 39.4144V2.2319H692.334V16.4794H682.084V2.2319H674.085V39.4144H682.084V25.08H692.334V39.4144H700.333ZM723.086 10.7457H731.551V2.2319H706.623V10.7457H715.087V39.4144H723.086V10.7457V10.7457ZM746.228 16.5663V10.7457H760.827V2.2319H738.229V39.4144H760.827V30.9007H746.228V25.08H759.507V16.5663H746.228V16.5663ZM768.67 2.2319V39.4144H776.669V31.5957H779.775C789.482 31.5957 794.607 24.9063 794.607 16.9138C794.607 9.00815 789.482 2.2319 779.775 2.2319H768.67V2.2319ZM776.669 22.995V10.7457H780.396C783.813 10.7457 786.997 12.8307 786.997 16.9138C786.997 21.1707 783.813 22.995 780.396 22.995H776.669ZM809.44 15.35V2.2319H801.441V39.4144H815.497C823.263 39.4144 826.912 34.4625 826.912 27.4257C826.912 20.3888 823.263 15.35 815.497 15.35H809.44V15.35ZM809.44 30.9007V23.9507H815.652C818.293 23.9507 819.38 25.3407 819.38 27.4257C819.38 29.5107 818.37 30.9007 815.652 30.9007H809.44V30.9007ZM842.055 19.0135V10.7457H856.655V2.2319H834.057V39.4144H856.655V30.9007H842.055V25.08H855.335V16.5663C850.908 17.382 846.482 18.1977 842.055 19.0135ZM864.498 2.2319V39.4144H872.497V31.5957H875.603C885.31 31.5957 890.435 24.9063 890.435 16.9138C890.435 9.00815 885.31 2.2319 875.603 2.2319H864.498V2.2319ZM872.497 22.995V10.7457H876.224C879.641 10.7457 882.825 12.8307 882.825 16.9138C882.825 21.1707 879.641 22.995 876.224 22.995H872.497ZM922.585 39.4144V2.2319H914.586V16.4794H904.336V2.2319H896.337V39.4144H904.336V25.08H914.586V39.4144H922.585ZM939.203 15.35V2.2319H931.205V39.4144H945.261C953.026 39.4144 956.676 34.4625 956.676 27.4257C956.676 20.3888 953.026 15.35 945.261 15.35H939.203V15.35ZM967.548 39.4144V2.2319H959.549V39.4144H967.548ZM939.203 30.9007V23.9507H945.416C948.056 23.9507 949.143 25.3407 949.143 27.4257C949.143 29.5107 948.134 30.9007 945.416 30.9007H939.203V30.9007ZM985.098 16.5663V10.7457H999.698V2.2319H977.1V39.4144H999.698V30.9007H985.098V25.08H998.377V16.5663H985.098V16.5663ZM673.231 121.946V106.569H668.804L658.554 77.9869H653.739L643.333 106.569H638.907V121.946H646.905V115.083H665.155V121.946H673.231V121.946ZM656.146 94.4932L660.185 106.569H652.031L656.146 94.4932ZM679.832 77.9869V115.169H692.722C702.429 115.169 705.303 110.131 705.303 104.31C705.303 100.14 703.206 96.7519 700.255 95.97C702.352 94.8407 704.293 92.4082 704.293 88.1513C704.293 84.7632 702.662 78.0738 692.878 78.0738H679.832V77.9869V77.9869ZM687.83 86.5007H693.81C696.217 86.5007 696.683 88.325 696.683 89.3675C696.683 90.41 696.139 92.2344 693.81 92.2344H687.83V86.5007ZM687.83 99.9663H694.353C696.838 99.9663 697.692 101.791 697.692 103.268C697.692 104.831 696.916 106.569 694.353 106.569H687.83V99.9663V99.9663ZM720.523 92.2344V86.4138H735.123V77.9H712.525V115.083H735.123V106.569H720.523V100.748H733.803V92.2344H720.523ZM742.966 77.9869V115.169H750.965V107.351H754.071C763.778 107.351 768.903 100.661 768.903 92.6688C768.903 84.7632 763.778 77.9869 754.071 77.9869H742.966ZM750.965 98.75V86.5007H754.692C758.109 86.5007 761.293 88.5857 761.293 92.6688C761.293 96.9257 758.109 98.75 754.692 98.75H750.965V98.75ZM802.218 115.083V77.9H797.403H783.736H775.737V115.083H780.552L794.219 94.6669V115.083H802.218Z"
                        fill="#FFF1CE" fill-opacity="0.16"/>
                </svg>
            </div>
        </div>
    );
};

export default CompanyLogo;