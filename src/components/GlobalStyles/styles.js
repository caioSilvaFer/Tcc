import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
    * {
        box-sizing: border-box;

    }

    body, html {
        font-family: 'Roboto', sans-serif;

        margin: 0;
        border: 0;
        padding: 0;
        height: 100%;
    }
    body{
        padding:50px
    }

    #root{
        height: 100%;
        background-color:'#f3f4f6'
    }
    .Title{
        font-size: 16px;
        margin: 10px;
        color: white;
        }
        .Header{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px black solid;
        height: 90px;
        background-color: orange;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        }
        .Logo{
            margin: 10px;
        }
        .body{
        height: 630px;
        background-color: #F5F5F5;
        }
        .footer{
            height: 80px;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
            display: flex;
            background-color: #F5F5F5;
        }
        .Tab{
        width: 210px;   
        border-top: 1px black solid;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-around;
        align-items: center;
        cursor:pointer;
        height:80px
        }
        #TabHome:hover{
            background-color:#fff;
            border-bottom-left-radius: 30px
        }
        #TabForm:hover{
            background-color:#fff;
            border-bottom-right-radius: 30px
        }
        #TabHome {
            border-right: 1px black solid;
        }
        .BodyHome{

            background-color:white;
            height: 550px;
            width: 420px;
            margin-left: 10px;
            margin-right: 10px;
            border-radius: 30px;
            position:relative;
        }
        #BodyTitle{
            text-align:center;
            padding-top:10px
        }    
        .body{
    
            display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        }
        a {
            color: inherit; /* blue colors for links too */
            text-decoration: inherit; /* no underline */
          }
        
        `