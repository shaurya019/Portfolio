
import { Container, Row, Col } from "react-bootstrap";
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-item align-items-center">
        <div> © Shaurya 2023. All Rights Reserved.</div> 
        <div className="footer-icons">
            <a className="icon-s" href="https://www.linkedin.com/in/shaurya023/" target="_blank"><UilLinkedin /></a>
            <a className="icon-s" href="https://github.com/shaurya019" target="_blank"><UilGithub /></a>
            </div> 
        </div>
    </footer>
  )
}

