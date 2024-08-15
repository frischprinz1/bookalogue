import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledGlobalNav = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 87px;
    background-color: #fff;
    box-shadow: 0px 0px 4px 2px #aaa;

    .wrapper {
        width: var(--page-width-sm);
        padding-inline: var(--global-padding);
    }

    @media screen and (min-width: 768px) {
        .wrapper {
            width: var(--page-width);
        }
    }
`;

const GlobalNav = () => {
    return (
        <StyledGlobalNav>
            <div className="wrapper">
                <GlobalNav.Icon wordMark={"Bucher"} />
            </div>
        </StyledGlobalNav>
    );
};

const LogoWrapper = styled.div`
    & .icon {
        margin-inline-end: 8px;
        // width: 21px;
        // height: 26px;
        width: 30px;
        height: 15px;
    }
    & .word-mark {
        /* font-family: 'Aktiv Grotesk'; */
        --book-scout-logo-color: #66a3ff;
        font-size: 28px;
        font-weight: 700;
        line-height: 35.84px;
        color: #315351;
    }
    a {
        text-decoration: none;
    }
`;

GlobalNav.Icon = ({ wordMark }) => {
    return (
        <LogoWrapper>
            <Link to="/">
                <svg
                    className="icon"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Vector">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.4221 2.0187C7.06027 -0.274701 3.231 -0.274701 0.869171 2.0187L11.7979 12.6308C14.1598 14.9242 17.989 14.9242 20.3509 12.6308L9.4221 2.0187Z"
                            fill="#306ADB"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.3508 2.0187C16.989 -0.274701 13.1597 -0.274701 10.7979 2.0187L21.7266 12.6308C24.0885 14.9242 27.9177 14.9242 30.2796 12.6308L19.3508 2.0187Z"
                            // fill="#306ADB"
                            fill="#f00"
                        />
                    </g>
                </svg>
                {/* <svg
                    className="icon"
                    // viewBox="0 0 21 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.90424 6.94926C11.7461 5.03027 11.7461 1.91899 9.90424 0L1.38141 8.87957C-0.46047 10.7986 -0.46047 13.9098 1.38141 15.8289L9.90424 6.94926ZM1.40004 25.9304C-0.441843 24.0115 -0.441843 20.9002 1.40004 18.9812L19.6186 4.06802e-06C21.4605 1.91899 21.4605 5.03028 19.6186 6.94926L1.40004 25.9304ZM11.095 26C9.25307 24.081 9.25307 20.9697 11.095 19.0508L19.6177 10.1711C21.4596 12.0902 21.4596 15.2014 19.6177 17.1204L11.095 26Z"
                        fill="#66a3ff"
                    />
                </svg> */}
                <span className="word-mark">{wordMark}</span>
            </Link>
        </LogoWrapper>
    );
};

export default GlobalNav;
