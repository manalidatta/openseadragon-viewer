import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position : "relative",
        width : "100%",
        top : "20vh"
    }
    return (
        <footer className = "bg-dark text-light text-center py-3" style = {footerStyle}>
            <p>Copyright &copy; Manali Datta 2021</p>
        </footer>
    )
}
