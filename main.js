
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
}

body{
    font-family: 'Poppins', sans-serif;

}

.tab-bx{
    display:flex;
    position: absolute;
    top: 20%;
    left: 50%;
    transform:translate(-50%, -20%);
    width: 500px;
    height: 400px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 3px 8px;
    
}

.tab-btn-bx {
    display: block;
    width:25%;
    height:100%;
    /* background:#16a085; */
    transition: 0.5s;
}

.tab-btn-bx .tab-btn {
    width:100%;
    height: 40px;
    border:none;
    outline: none;
    background: #fff;
    /* background:#16a085; */
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
}
.tab-btn-bx .tab-btn:hover{
    background:#ecf0f1;
}
.tab-ctn-bx{
    border-left:1px solid rgba(0, 0, 0, 0.19);
    width:100%;
    height:100%;
    /* box-shadow: rgba(0, 0, 0, 0.19) 0px 0 3px; */
}

.tab-ctn-bx .tab-ctn{
    width:100%;
    height: 100%;
    padding: 10px;
    display:none;
    
}
