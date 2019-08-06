let Navbar = {    
    render : async () => { 
        console.log("navegador: render");
        let view = /* html */ `
            <nav>
                <a href = "/#/">TOGETHER-CLICK</a><br>
                <a href = "/#/register"> Crea tu cuenta</a>
                <a href = "/#/login">Incia sesión</a>
            </nav>
        `
        return view
    },
    after_render : async () => {}
}

export default Navbar;