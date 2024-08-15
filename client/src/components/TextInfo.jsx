import styled from "styled-components";

const TextInfoWrapper = styled.div`
    flex: 1 0 auto;
    padding-inline: 33px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .row {
        margin-block-end: 35px;
    }
    & .heading {
        font-weight: 500;
        font-size: 11px;
        line-height: 1.28;
        color: #a5b2bd;
        text-transform: uppercase;
    }

    & .desc {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #1d2b36;
    }
`;

const TextInfo = ({ title, author, genres }) => {
    const detailTitle = "Book Title";
    const detailAuthor = "Author";
    const detailCategories = "Categories";

    return (
        <TextInfoWrapper>
            <div className="row">
                <div className="heading">{detailTitle}</div>
                <div className="desc">{title}</div>
            </div>
            <div className="row">
                <div className="heading">{detailAuthor}</div>
                <div className="desc">{author}</div>
            </div>
            <div className="row">
                <div className="heading">{detailCategories}</div>
                <div className="desc">{genres.join(", ")}</div>
            </div>
        </TextInfoWrapper>
    );
};

export default TextInfo;
