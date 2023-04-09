import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    top: 0;
    height: 6.8rem;
    background: black;
    border-bottom: 0.31rem solid white;
    justify-content: space-between;
    margin-bottom: 6.25rem;
`

export const LogoArea = styled.div`
    margin-left: 3.12rem;
    padding-top: 0.31rem;
    
    > .logo {
        margin: auto;
        font-size: 2.5rem;
        color: red;
        font-family: Kaushan Script;
        font-weight: bold;
        text-shadow: 0.10rem 0.06rem 0.43rem;
        user-select: none;
    }

    > .logo span {
        font-size: 1.87rem;
        color: white;
        font-family: 'Times New Roman', Times, serif;
        font-weight: normal;
        text-shadow: 0.06rem 0.06rem 0.12rem;
    }
`

export const FlagsArea = styled.div`
     margin-right: 3.12rem;

     > .flag {
        margin-top: 1.25rem;
        margin-right: 0.6rem;
        -webkit-user-drag: none; 
        user-select: none;

        width: 2.8rem;
        height: 1.8rem;
        border-radius: 0.31rem;
        cursor: pointer;
        transition: border linear 0.2s;
     }

     > .flag.selected {
        border: 0.18rem solid var(--red);
     }

     > .flag:hover {
        opacity: 0.7;
     }
`