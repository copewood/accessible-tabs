import styled from 'styled-components';

export const StyledTabs = styled.div`
    fontFamily: 'lucida grande', sans-serif;
    color: grey;
`;

export const StyledTabList = styled.div`
    min-width: 550px;
`;

export const StyledTab = styled.button`
    &[role="tab"], [role="tab"]:focus, [role="tab"]:hover {
        color: blue;
        position: relative;
        z-index: 2;
        top: 2px;
        margin: 0;
        margin-top: 4px;
        padding: 3px 3px 4px;
        border: 1px solid hsl(219deg 1% 72%);
        border-bottom: 2px solid hsl(219deg 1% 72%);
        border-radius: 5px 5px 0 0;
        overflow: visible;
        background: hsl(220deg 20% 94%);
        outline: none;
        font-weight: bold;
    }
    &[role="tab"][aria-selected="true"] {
        padding: 2px 2px 4px;
        margin-top: 0;
        border-width: 2px;
        border-top-width: 6px;
        border-top-color: rgb(36 116 214);
        border-bottom-color: hsl(220deg 43% 99%);
        background: hsl(220deg 43% 99%);
    }
    &[role="tab"][aria-selected="false"] {
        border-bottom: 1px solid hsl(219deg 1% 72%);
    }
    &[role="tab"] span.focus {
        display: inline-block;
        margin: 2px;
        padding: 4px 6px;
    }
    &[role="tab"]:hover span.focus,
    &[role="tab"]:focus span.focus,
    &[role="tab"]:active span.focus {
        padding: 2px 4px;
        border: 2px solid rgb(36 116 214);
        border-radius: 3px;
    }
`;

export const StyledTabPanel = styled.div`
    &[role="tabpanel"] {
        padding: 5px;
        border: 2px solid hsl(219deg 1% 72%);
        border-radius: 0 5px 5px;
        background: hsl(220deg 43% 99%);
        min-height: 10em;
        min-width: 550px;
        overflow: auto;
    }
    &[role="tabpanel"].is-hidden {
        display: none;
    }
    &[role="tabpanel"] p {
        margin: 0;
    }
    & a {
        text-decoration: underline;
        color: blue;
        margin-right: .5rem;
    }
`;  